#! /bin/bash

if [ $1 -gt $2 ] 
then
 let  n=$2
 let  m=$1
else
 let  n=$1
 let  m=$2
fi


function bajan {
z=1
j=1
while true
do
   if [ $j -gt $n ]
   then
       break
   fi

if (( ($1%$j==0) && ($2%$j==0) ))
   then
   z=$j
fi
    ((j++))
done

echo $z
}

function bazm {
i=$m
while true
do
   if (( ($i%$1==0) && ($i%$2==0) ))
   then
      p=$i
      break
   fi
   let i=$i+$m
done

echo $p
}

bajan $1 $2 $n
bazm  $1 $2 $m
