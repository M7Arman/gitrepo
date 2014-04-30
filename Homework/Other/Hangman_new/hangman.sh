#bin/bash
#HANGMAN GAME 
#zangvaci haytararum,list.txt ic
clear
declare arr1
declare arr2
declare arr3
declare str
declare nermucvac
a=0
b=0
k=0
s=1
level=0
Game_over=0
while read line 
do

	arr1[$k]="$line"
	((k++)) 

done < ~/Desktop/Hangman_new/list.txt
	((k--))
     
        #Random kerpov talis e bar zangvacic

let R=$RANDOM%$k; 
echo ${arr1[$R]} > ~/Desktop/Hangman_new/conf/bar.txt  

	#Sarum e zangvac @ntrvac bari tareric

while read world  
do 
	echo ${arr1[$R]} | sed -r 's/(.){1}/&\n/g' > ~/Desktop/Hangman_new/conf/tarer.txt  
done < ~/Desktop/Hangman_new/conf/bar.txt

while read line 
do 
	arr2[$a]="$line"
	((a++))

done < ~/Desktop/Hangman_new/conf/tarer.txt
((a--))
	#Tpum e ektanin hammapatasxan bar@
	case $R in
		0) echo "*${arr2[1]}**${arr2[4]}" 		>    ~/Desktop/Hangman_new/conf/echo.txt && cat ~/Desktop/Hangman_new/conf/echo.txt;;
		1) echo "*${arr2[1]}*${arr2[3]}" 		>    ~/Desktop/Hangman_new/conf/echo.txt && cat ~/Desktop/Hangman_new/conf/echo.txt;;
		2) echo "*${arr2[1]}***${arr2[5]}" 		>    ~/Desktop/Hangman_new/conf/echo.txt && cat ~/Desktop/Hangman_new/conf/echo.txt;;
		3) echo "*${arr2[1]}*${arr2[3]}" 		>    ~/Desktop/Hangman_new/conf/echo.txt && cat ~/Desktop/Hangman_new/conf/echo.txt;;
		4) echo "*${arr2[1]}**${arr2[4]}***${arr2[8]}"  >    ~/Desktop/Hangman_new/conf/echo.txt && cat ~/Desktop/Hangman_new/conf/echo.txt;;
		5) echo "*${arr2[1]}*${arr2[3]}" 		>    ~/Desktop/Hangman_new/conf/echo.txt && cat ~/Desktop/Hangman_new/conf/echo.txt;;
		6) echo "${arr2[0]}**${arr2[3]}*" 		>    ~/Desktop/Hangman_new/conf/echo.txt && cat ~/Desktop/Hangman_new/conf/echo.txt;;
		7) echo "${arr2[0]}**${arr2[3]}**${arr2[6]}"    >    ~/Desktop/Hangman_new/conf/echo.txt && cat ~/Desktop/Hangman_new/conf/echo.txt;;
	esac

	#Sarqum e zangvac tpac bari tareric

while read line
do 
		z="$line"
done < ~/Desktop/Hangman_new/conf/echo.txt

while read world  
do
		echo $z | sed -r 's/(.){1}/&\n/g' > ~/Desktop/Hangman_new/conf/echo1.txt
done < ~/Desktop/Hangman_new/conf/echo.txt

while read line 
do 
		arr3[$b]="$line"
                str[0]+=${arr3[$b]}		
	   	((b++))
done < ~/Desktop/Hangman_new/conf/echo1.txt 

#Stugum e ete nermucvac tar@ hoyutyun uni tpum e nor bar@ ete voch nermucel noric
   
until   [[ ${str[$s]} = ${arr1[$R]} ]]
do  
#((t++))
#clear

	echo "Insert word"
	read q
	Game_over=0
	for (( i="0"; i<$a; i="$i+1" ))
	do     
                #nermucvac[$i]=$q
		if [[ $q == ${arr2[$i]} ]]; then  arr3[$i]=$q
			for (( i="0"; i<$a; i="$i+1" ))
			do   
				str[$s]+="${arr3[$i]}" 
                        
			done

               		clear
  			echo ${str[$s]} 
			((s++))     
			if [[ ${str[$s-1]} = ${arr1[$R]} ]]
				then 
					echo "Win!!"
					exit
	       fi		
				else 
                                        
					((Game_over++))
					if [[ "$Game_over" = "$a" ]] 
                                        	then
 							Game_over=0
							((level++))
							case $level in

		1)  clear; cat ~/Desktop/Hangman_new/levels/level1; echo ${str[$s-1]}; echo "False";;
		2)  clear; cat ~/Desktop/Hangman_new/levels/level2; echo ${str[$s-1]}; echo "False";;
		3)  clear; cat ~/Desktop/Hangman_new/levels/level3; echo ${str[$s-1]}; echo "False";;
		4)  clear; cat ~/Desktop/Hangman_new/levels/level4; echo ${str[$s-1]}; echo "False";;
		5)  clear; cat ~/Desktop/Hangman_new/levels/level5; echo ${str[$s-1]}; echo "False";;
		6)  clear; cat ~/Desktop/Hangman_new/levels/level6; echo ${str[$s-1]}; echo "False";;
	        7)  clear; cat ~/Desktop/Hangman_new/levels/level7; echo ${str[$s-1]}; echo "False";;
					
							esac

                                         fi
		       fi
		if [ $level = 7 ] 
		then 
			echo "Game Over"
			exit
      
		fi
		
	 done
done
 
