# import xlrd
# import random
# import time
# data = xlrd.open_workbook('../test.xlsx')
# table = data.sheets()[0]
# tables = data.sheet_names()
# for index in range(len(tables)):
    # print(index)
    # sheets = data.sheet_by_index(index)
    # print(dir(sheets))
    # print(sheets.nrows, sheets.ncols) # 总行数 总列数
    # for i in range(0,sheets.nrows):
        # rows = sheets.row_values(i)
        # cols = sheets.col_values(i)
        # print (rows)
        # print(tuple(rows))
    # for i in range(0,sheets.ncols):
    #     cols = sheets.col_values(i)
    #     # cols = sheets.col_values(i)
    #     print (cols)
# print(time.localtime(time.time()))
# str = input("请输入：")
# print ("你输入的内容是: ", str)
# for num in range(1,100):  # 迭代 1 到 100 之间的数字
#    for i in range(2,num): # 根据因子迭代
#       if num%i == 0:      # 确定第一个因子
#          j=num/i          # 计算第二个因子cls
#          #print '%d 等于 %d * %d' % (num,i,j)
#          break            # 跳出当前循环
#    else:                  # 循环的 else 部分
#       print num, '是一个质数'


# for num in range(1, 100):
#     for i in range(2,num):
#         if num%i == 0:
#             j=num/i
#             break
#     else: # 注意这个缩进
#         print (num, '是质数')

# list = [1,2,34,2,2,2,12]
# random.shuffle(list)
# print(list)
# fo = open("foo.word", "w")
# fo.write( "www.runoob.com!\nVery good site!\n")
import csv
csv_reader = csv.reader(open("../tel.csv"))
for row in csv_reader:
    print(row)

