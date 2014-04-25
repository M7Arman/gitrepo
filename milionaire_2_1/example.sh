#!/bin/bash

#firefox -new-window google.com &
#some_pid=$!
#sleep 15 
#echo $some_pid
#kill -9 $some_pid

#firefox -new-window
#some_pid=$!
#firefox -new-tab google.com
#sleep 15
#kill -9 $some_pid

`google-chrome`
#`google-chrome google.com`
sleep 20

some_pid=$!
echo $some_pid
sleep 5
echo $some_pid
kill -9 $some_pid
