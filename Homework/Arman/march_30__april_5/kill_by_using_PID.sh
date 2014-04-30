#!/bin/bash
function terminate_process  #gtnum enq nermucvac cragri PID ev kill anum
{
   if [ `ps -All | grep $1 | wc -l` -eq 0 ]; # stugum e ka nermucvac ps
   then
      echo "no $1 running..."
   else
      user_id=`whoami`              # user er @ntrum
    echo `  ps -eo pid,comm,user | grep $1 | grep $user_id` > file_name  
      pid=`sed -e 's/^ *//g' -e 's/\ .*//g' file_name`
      kill -15 $pid
      rm -f file_name
   fi
}
terminate_process $1
