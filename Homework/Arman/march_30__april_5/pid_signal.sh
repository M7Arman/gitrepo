#! /bin/bash
# input PID and signal number

if [ `ps -All | grep $1 | wc -l` -lt 0 ];
then
	echo "PID not found!"
else

    case "$2" in
    1)
        echo sending SIGHUP signal
        ;;
    2)
        echo sending SIGINT signal
        ;;
    9)
        echo sending SIGKILL signal
        ;;
    15)
        echo sending SIGTERM signal
        ;;
    17)
        echo sending SIGSTOP signal
        ;;
    19)
        echo sending SIGSTOP signal
        ;;
    23)
        echo sending SIGSTOP signal
        ;;
    *)
        echo Signal not found!
        ;;
esac

echo "PID killing"

fi
