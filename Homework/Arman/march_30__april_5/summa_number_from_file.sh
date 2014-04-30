#!/bin/bash
# Create file on /Desktop and input it name


#if [ `ls ~/Desktop | grep "$1"` ]
#then
#echo hihi 
#else
#    `touch ~/Desktop/$1`
#   `chmod 777 ~/Desktop/$1`
#    `echo "sadas56ad56d4sad8" > ~/Desktop$1`
#fi

`grep -P -o "[0-9]+" ~/Desktop/"$1"  > ~/Desktop/file_sum`

s=0

while read line 
do
s=$(($s+$line))
done < ~/Desktop/file_sum

echo "sum: $s"

`rm ~/Desktop/file_sum`
