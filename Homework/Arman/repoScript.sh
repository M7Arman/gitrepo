#!/bin/bash

 
if [ ! -s ~/Desktop/myrepo ] 
then
    a=0
fi
  b=$a
  a= "echo`ls ~/Desktop/myrepo`"
    if [[ $a != $b ]]
    then
        `diff $a $b`
          

