#!/bin/bash
# Who wants to be a Millionaire?
# created by Arman Kostandyan


# array of responses
#**********
arr[1]="A"
arr[2]="C"
arr[3]="B"
arr[4]="C"
arr[5]="A"
arr[6]="B"
arr[7]="B"
arr[8]="D"
arr[9]="B"
arr[10]="C"
#**********


QUESTION_AMT=10     # Harceri qanak(Qusetion amount)
SCORE=0
FIFTY=0
GOOGLE=0
CHANGE=0
declare -a b
c=1
b[1]=0
LIST=record/score
LIST_NAME=record/nick


#   function for record list
record () {    
clear
echo -n " The record belongs to:  "
cat "$LIST_NAME"
echo "Go back [ENTER]"
read
menu_func
}

#   function for exit mode
exit_func () {
clear
echo "EXIT? [Y/n]"
read yes_no
case "$yes_no" in
    "Y" | "y" | "yes" | "Yes" )
    clear
    exit
    ;;
    "N" | "n" | "No" | "no" )
    menu_func
    ;;
    * )
    echo "not found!"
    exit_func
    ;;
esac
}

#   function for choose name.
nickname () { 
clear
echo
echo -n "Enter your nickname and press [ENTER] :  "
read NICK
}

#############First clue ######################################
google_func () {
    if [ "$GOOGLE" == "0" ]; then
GOOGLE=1        
echo ""
xdg-open 'http://www.google.com'
sleep 20
#`pkill firefox`
`pkill chrome`
sleep 3
#clear
#let "QUESTION_CURRENT -= 1"
#print_question
#check_answer
fi
clear
let "QUESTION_CURRENT -= 1"
print_question
check_answer
}

############ Second clue ######################################
fifty_func () {
    if [ "$FIFTY" == "0" ]; then
        clear
        str=(A B C D)
        TMP_FILE=question/tmpfile
        cat $FILE_PATH > $TMP_FILE
        echo
        case ${arr[FILE_NAME]} in
            "A" | "B") sed 3,4d $TMP_FILE;;
        "C" | "D") sed 2,2d $TMP_FILE;;
    *) echo "Dzev chi senc ban lini!";;
esac
FIFTY=1
check_answer
else
    clear
    let "QUESTION_CURRENT -= 1"
    print_question
    check_answer
fi
    }

########### Third clue ######################################
change_func () {
if [ "$CHANGE" == "0" ]; then
    CHANGE=1
    let "QUESTION_CURRENT -= 1"
    clear
    step
fi
clear
let "QUESTION_CURRENT -= 1"
print_question
check_answer
#echo "Hi"
}

#############################################################
#   function for menu
menu_func () {
QUESTION_CURRENT=0 # Question current
clear
echo
echo "************ MENU *************"
echo "Hi $NICK, choose... "
echo "1. Play! "
echo -n "2. Record --> "
cat "$LIST_NAME"
echo "3. Exit "
echo "******************************* "
echo
echo -n "choose: "
read menu

case "$menu" in
    "1") 
    play
    ;;
    "2")
    record
    ;;
    "3")
    exit_func
    ;;
    * )
    clear
    echo "Error! Try again."
    menu_func
    ;;
esac
}


#   function for play mode
play () {
    SUM=0 
    for (( c1=1; c1<c; c1++ ))
     do
         b[c1]=0
     done
    clear
    for (( i=1; i<=10; i++ )) 
    do
        step
    done
}

step () {
while true
do
    (( c++ ))
    FILE_NAME=$(( ( RANDOM % $QUESTION_AMT ) + 1 ))
    b[c]=$FILE_NAME
    for (( c1=1; c1<c; c1++ )) 
    do
        if [[ "${b[c]}" == "${b[c1]}" ]]
        then
           (( c-- ))
           step
        fi
    done
    FILE_PATH="question/$FILE_NAME"
    if [ -f $FILE_PATH ]
    then
        print_question
        check_answer
    fi
    clear
done
}

#   function print of question
print_question () {
let "QUESTION_CURRENT += 1"

if [[ "$FIFTY" == "0" ]]; then
    echo -n " 50/50 [F]  "
else
    echo  -ne "\e[31m 50/50 [F]  \e[0m"
fi

if [[ "$GOOGLE" == "0" ]]; then
    echo -n " google [G]  "
else
    echo  -ne "\e[31m google [G]  \e[0m"
fi

if [[ "$CHANGE" == "0" ]]; then
    echo " Change the question  [T]  "
else
    echo  -e "\e[31m Change the question  [T]  \e[0m"
fi

# Poxel cat-i
echo -en "\n$QUESTION_CURRENT) "    
while read line
do
    echo -e "$line"
done<$FILE_PATH
}

#   function for check of answer
check_answer () {
echo
echo -n "your answer: "
read answ
if [[ "$answ" == "${arr[$FILE_NAME]}"  ]]; then
    let "SCORE += 100"
    clear
    echo -e "\nRight!"
    echo "your score $NICK: $SCORE"
if [ "$SCORE" -eq "1000" ]; then
    clear
    echo -e "\nYOU WIN!!"
    max_score_func
    echo -e "\n\nPress Enter for exit..."
    read
    menu_func
fi

    echo -n "Contiune? [Y/n]"
    read yes_no_1
        case "$yes_no_1" in
            "Y" | "y" | "yes" | "Yes" )
                continue
                ;;
            "N" | "n" | "No" | "no" )
                over_func
                menu_func
                ;;
            * )
                echo "not found!"
                ;;
        esac
else
   case "$answ" in
       "A"|"a"|"B"|"b"|"C"|"c"|"D"|"d")over_func
           menu_func;;
   "G" | "g" )
      google_func
      ;;
   "F" | "f" )
      fifty_func
      ;;
   "T" | "t" )
      change_func
      ;;
   * )
     echo "Answer not found!"  
     check_answer
      ;;
esac
fi
    }

over_func () {    
    echo -e "\nRight answer: ${arr[$FILE_NAME]}"
    echo -e "\n***GAME OVER!***"
    echo -e "\n\nYour score $NICK: $SCORE "
    max_score_func
    let  "SCORE=0"
    echo -e "\nPress ENTER for exit."
    read
    clear
}

max_score_func () {
while read line3 
do
SUM=$(($SUM+$line3))
done<$LIST
if [[ "$SCORE" > "$SUM" ]]; then
    echo "$SCORE" > $LIST
    echo "$NICK" > $LIST_NAME
fi

}

nickname
menu_func
