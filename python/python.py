#引入库 threading

# import threading


# #定义函数

# def fun_timer():
#     print('hello timer')   #打印输出
# global timer  #定义变量
# # timer = threading.Timer(10,fun_timer)   #60秒调用一次函数
# #定时器构造函数主要有2个参数，第一个参数为时间，第二个参数为函数名
# # timer.start()    #启用定时器
# array=[1,2,23,34,3,34,4,3,32]
# for i in array:
#     timer = threading.Timer(5,fun_timer)
#     timer.start()

#-*- coding:utf8 -*- 

#!/usr/bin/env python
import os,time
#how to run it
#nohup python -u example.py >> /data/logs/example.log 2>&1 &
while True:
    os.system('command') #执行系统命令
    time.sleep(3) #推迟执行、休眠