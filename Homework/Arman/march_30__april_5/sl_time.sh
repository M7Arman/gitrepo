#! /bin/bash


if [ `find /usr/games/ -name "sl"` ]

then
let now=$(date +"%H")*3600+$(date +"%M")*60
let d=$1*3600+$2*60
if [ $d -lt $now ]
then
   echo "Ushe!"
else 
let h=$d-$now
sleep $h
sl
fi
 else
    `sudo apt-get install sl`
    echo -n Password:  
    read -s password
    let now=$(date +"%H")*3600+$(date +"%M")*60
    let d=$1*3600+$2*60
    if [ $d -lt $now ]
    then
           echo "Ushe!"
       else
           let h=$d-$now
           sleep $h
           sl
       fi

fi
