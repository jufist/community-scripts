#!/bin/bash
cd `dirname $0`
# sipp -inf users.csv -sf register.xml -d 1000 -s 5000 125.212.212.45

# -i 192.168.5.42

sipp -inf users.csv -sf register.xml -trace_msg -trace_screen -trace_err 125.212.212.45:5060
