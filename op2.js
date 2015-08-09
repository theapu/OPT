phantom.casperTest = true;
var casper = require('casper').create();
var mouse = require("mouse").create(casper);

casper.start('http://en.email-fake.com/spamfighter.gq', function() {

casper.options.waitTimeout = 40000;

 	var email = casper.evaluate(function() {
    	return document.getElementById("email_ch_text").innerHTML;
  	});

	var emailname = email.slice(0, email.indexOf("@"));
	console.log(email + "\n" + emailname);

casper.thenOpen("https://oneplus.net/in/invites?kolid=6H2HZ").then(function () {

this.waitForSelector('#submit_email',
    function pass () {
        this.test.pass("Found");
	this.sendKeys('input[name=invite-email]', email);
    	this.mouse.click('#submit_email');
this.waitForSelector('div.section-e-statistics.section-e-unregister',
    function pass () {
        this.test.pass("Nice");
	this.capture('opt.png');
	this.echo(this.getTitle());
},
    function fail () {
        this.test.fail("Did not load element");
    }
);	
    },
    function fail () {
        this.test.fail("Did not load element");
    }
);

});


casper.thenOpen("http://en.email-fake.com/spamfighter.gq/" + emailname).then(function () {
this.waitForSelector('div.mess_bodiyy',
    function pass () {
        this.test.pass("Subscription Email Received");
	this.capture('clicksf.png');
        this.echo(this.getTitle());

var link = this.getElementAttribute('div.mess_bodiyy > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > a:nth-child(1)', "href");
this.echo(link);
casper.thenOpen(link).then(function () {
this.waitForSelector('div.section-e-statistics.section-e-registered',
    function pass () {
        this.test.pass("Done");
	this.capture('done.png');
	this.echo(this.getTitle());
},
    function fail () {
        this.echo("Did not load element");
    }
);
});
    },
    function fail () {
	this.capture('clicksf.png');
        this.echo("Failed");
        this.echo(this.getTitle());
    }
);

});

 });
casper.run();
