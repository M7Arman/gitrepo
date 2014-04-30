#!/bin/bash  


echo "Permissions:"
if [ -w "$1" ]
then
    echo "write: yes"
else
    echo "write: no"
fi

if [ -r "$1" ]
then
    echo "read: yes"
else
    echo "read: no"
fi 

if [ -x "$1" ]
then
    echo "execute: yes"
else
    echo "execute: no"
fi 

