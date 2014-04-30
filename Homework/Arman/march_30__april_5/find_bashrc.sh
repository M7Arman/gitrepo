#! /bin/bash/

user=`whoami`
for j in `ls -a "/home/$user"`;
do
if [ $j == ".bashrc" ]; then  # tesnum e ka .bashrc file
echo "Found!!!"
exit 0
fi
done
