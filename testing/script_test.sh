#!/bin/bash


TEST_CASE=test_case

ARGUMENT=(`egrep -o [0-9]+ $TEST_CASE`)


change_exe () {
    clear
    echo "********** MENU ***********"
    echo " Testing"
    echo "      1. Sum"
    echo "      2. Factorial"
    echo "      3. Decimal_to_Binary"
    echo "***************************"
    echo -ne "\n input: "
    read TESTING
    case $TESTING in
        "1")sum_func;;
        "2")factorial_func;;
        "3")decimal_to_binary_func;;
        *)echo "Not found"; change_exe;;
    esac
}
for_exit () {
    clear
    echo -ne "Exit[y/n]"
    read yes_no
    case $yes_no in
        "Y"|"y")exit;;
        "N"|"n")change_exe;;
        *)sleep 2; for_exit;;
    esac
}

sum_func () {
    SUM=$(./bin/sum ${ARGUMENT[0]} ${ARGUMENT[1]} | grep -Po [0-9]+)
    echo "1- Pass!"
    echo "2- Pass!"
    if [[ "$SUM" == "${ARGUMENT[2]}" ]]; then
        echo "3- Pass!"
    else
        echo "3- False!"
    fi
    sleep 3
    for_exit
}

factorial_func () {
    FACTORIAL=$(./bin/factorial ${ARGUMENT[5]} | grep -Po [0-9]+)
    echo "1- Pass!"
    echo "2- Pass!"
    if [[ "$FACTORIAL" == "${ARGUMENT[6]}" ]]; then
        echo "3- Pass!"
    else
        echo "3- False!"
    fi
    sleep 3
    for_exit
}

decimal_to_binary_func () {
    BINARY=$(./bin/erkuakan ${ARGUMENT[3]} | grep -Po [0-9]+)
    echo "1- Pass!"
    echo "2- Pass!"
    if [[ "$BINARY" == "${ARGUMENT[4]}" ]]; then
        echo "3- Pass!"
    else
        echo "3- False!"
    fi
    sleep 3
    for_exit
}

change_exe
