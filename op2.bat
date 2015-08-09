
for /l %%x in (1, 1, %1) do (
echo %%x 
casperjs op2.js
)
