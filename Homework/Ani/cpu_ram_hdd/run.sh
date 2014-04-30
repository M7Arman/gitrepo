#!/bin/bash
echo  "00 * * * * bash ~/check_system.sh $1 $2 $3 $4" > mycron
 crontab  mycron

