import itchat
import os,time
itchat.auto_login(hotReload=True)
friends = itchat.get_friends()
for i in friends:
    # os.system('command') #执行系统命令
    time.sleep(5) #推迟执行、休眠
    itchat.send("情人节快乐", toUserName=i['UserName'])