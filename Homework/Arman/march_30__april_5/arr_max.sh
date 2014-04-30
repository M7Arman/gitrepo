#! /bin/bash

read -a arr
max=${arr[0]}

n=${#arr[*]}

for (( i=0; i<=$n; i++ ))
do
  if [ $max -lt ${arr[$i]} ]
    then
        max=${arr[$i]}
  fi
done

echo "max: $max"
