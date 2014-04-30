#!/bin/bash

function prepare_mail {
    if [ ! ` which mail` ]
    then
        sudo apt-get install sendemail mailutils
    fi
}

function system_data {
    cpu_used=`top -bn 1 | awk 'BEGIN{FS="[ \%]+"} NR==3{ print $2}'`
    ram_used=`free -m 1 | awk 'NR==2{ print $3*100/$2}'`
    hdd_used=`df  | awk 'BEGIN{FS="[ \t%]+"} NR==2{ print $5}'`
}

function def_limit {
    cpu=90
    ram=90
    hdd=90
    eval $2
    eval $3
    eval $4
    re='([0-9]+)'
    [[ $cpu =~ $re ]] && cpu=${BASH_REMATCH[1]}
    [[ $ram =~ $re ]] && ram=${BASH_REMATCH[1]}
    [[ $hdd =~ $re ]] && hdd=${BASH_REMATCH[1]}
}

function init_data {
    if [ `echo $1 | grep "@" ` ]
    then
        mail=$1
    else
        mail=ganyan.1992@mail.ru
    fi
    def_limit $2 $3 $4
}

function check_system_state {
    c=`echo "$cpu_used > $cpu" | bc`
    m=`echo "$ram_used > $ram" | bc`
    h=`echo "$hdd_used > $hdd" | bc`
    if [[ $c -gt 0 || $m -gt 0 || $h -gt 0 ]]
    then
    sendemail -f ganyan.1992@mail.ru -t $mail -u System data -m cpu_used=$cpu_used% ram_used=$ram_used% hdd_used=$hdd_used%
    fi
}

function main {
    system_data
    init_data $1 $2 $3 $4 
    check_system_state
}

main $1 $2 $3 $4
