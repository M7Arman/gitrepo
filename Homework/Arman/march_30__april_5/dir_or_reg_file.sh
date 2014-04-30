#! /bin/bash
  #  Write a Bash script that takes file path and determines whether it is
  #    directory or regular file, and if it is directory count all file count inside it.

if [ -d $1 ]                     # if $1 file is directory then...
  then
    echo Directory!!
	cd "$1"
  s=`ls -l | wc -l`
echo $(($s-1))                # How many directory of $1 file (1-ov avela cuyc talis!!)
elif [ -f $1 ]                   # $1 file is regular then...
  then
    echo Regulare!!
else
    echo error!!

fi



    

    


