from pymongo import MongoClient
import csv
csv_reader = csv.DictReader(open("../tel.csv"))
conn = MongoClient('127.0.0.1', 27017)
db = conn.hanting_data #连接mydb数据库，没有则自动创建
my_set = db.user_data #使用test_set集合，没有则自动创建
print(csv_reader.line_num)
# for row in csv_reader:
    # print(dict(row)['name'])
    # print(dict(row)['sex'])
    # print(dict(row)['age'])
    # my_set.insert_one({"name":dict(row)['name'],"age":dict(row)['age'], "sex": dict(row)['sex']})


    # print(row[0])
    # my_set.insert_one({"name":"zhangsan","age":18}) #或
#查询全部
print(my_set.estimated_document_count())
# for i in my_set.find():
#     print(i)
# my_set.delete_many({})
#查询name=zhangsan的
    # for i in my_set.find({"name":"zhangsan"}):
        # print(i)
        # print(my_set.find_one({"name":"zhangsan"}))