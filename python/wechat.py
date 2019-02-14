import itchat
import os,time
#how to run it
#nohup python -u example.py >> /data/logs/example.log 2>&1 &
# friends=[1,2,2,34,3,4,54,23,34,3,45,43,3,3]
itchat.auto_login(hotReload=True)
friends = itchat.get_friends()
for i in friends:
    # while True:
    # os.system('command') #执行系统命令
    time.sleep(3) #推迟执行、休眠
    # print(i)
    itchat.send("情人节快乐", toUserName=i['UserName'])