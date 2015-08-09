#!/bin/bash
for (( c=1; c<=$1; c++ ))
do
   echo $c
   casperjs op2.js
done
