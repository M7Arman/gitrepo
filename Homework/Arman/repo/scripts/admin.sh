#!/bin/bash
`cd ~/repo`
if [ ! -d direct ]; then
    `cd ~/repo && touch history && touch status.txt && mkdir direct && mkdir diff`
fi
#cout=`ls direct/`
#ls direct > list 
#cout=$(cat list)

#create status.txt file


case $1 in
    "add") sed '/?/s/?/A/g' ~/repo/status.txt;;
    "commit"|"ci") sed '/A|M/s/A|M/C/g' ~/repo/status.txt;;
    "status") cat ~/repo/status.txt;;
    # arayjm aysqan@
    *)"not found command";;
esac


