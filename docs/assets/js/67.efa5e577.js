(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{392:function(o,n,t){"use strict";t.r(n);var d=t(43),e=Object(d.a)({},function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h2",{attrs:{id:"mongodb导入导出以及数据库备份"}},[o._v("MongoDB导入导出以及数据库备份")]),o._v(" "),t("p",[o._v('1、导出工具：mongoexport\n1、概念：\nmongoDB中的mongoexport工具可以把一个collection导出成JSON格式或CSV格式的文件。可以通过参数指定导出的数据项，也可以根据指定的条件导出数据。\n2、语法：\nmongoexport -d dbname -c collectionname -o file --type json/csv -f field\n参数说明：\n-d ：数据库名\n-c ：collection名\n-o ：输出的文件名\n--type ： 输出的格式，默认为json\n-f ：输出的字段，如果-type为csv，则需要加上-f "字段名"\n3、示例：\n./bin/mongoexport -d test -c students -o students.dat\nsudo mongoexport -d mongotest -c users -o /home/python/Desktop/mongoDB/users.json --type json -f  "_id,user_id,user_name,age,status"')]),o._v(" "),t("p",[o._v("2、数据导入：mongoimport\n1、语法：\nmongoimport -d dbname -c collectionname --file filename --headerline --type json/csv -f field\n参数说明：\n-d ：数据库名\n-c ：collection名\n--type ：导入的格式默认json\n-f ：导入的字段名\n--headerline ：如果导入的格式是csv，则可以使用第一行的标题作为导入的字段\n--file ：要导入的文件")]),o._v(" "),t("pre",[t("code",[o._v("2、示例：\n    ./bin/mongoimport -d test -c students students.dat \n    sudo mongoimport -d mongotest -c users --file /home/mongodump/articles.json --type json\n")])]),o._v(" "),t("p",[o._v("-------------------MongoDB备份与恢复-------------------\n1、MongoDB数据库备份\n1、语法：\nmongodump -h dbhost -d dbname -o dbdirectory\n参数说明：\n-h： MongDB所在服务器地址，例如：127.0.0.1，当然也可以指定端口号：127.0.0.1:27017\n-d： 需要备份的数据库实例，例如：test\n-o： 备份的数据存放位置，例如：/home/mongodump/，当然该目录需要提前建立，这个目录里面存放该数据库实例的备份数据。\n2、实例：\nsudo rm -rf /home/momgodump/\nsudo mkdir -p /home/momgodump\nsudo mongodump -h 192.168.17.129:27017 -d itcast -o /home/mongodump/\n-\n2、MongoDB数据库恢复\n1、语法：\nmongorestore -h dbhost -d dbname --dir dbdirectory")]),o._v(" "),t("pre",[t("code",[o._v("    参数或名：\n        -h： MongoDB所在服务器地址\n        -d： 需要恢复的数据库实例，例如：test，当然这个名称也可以和备份时候的不一样，比如test2\n        --dir： 备份数据所在位置，例如：/home/mongodump/itcast/\n        --drop： 恢复的时候，先删除当前数据，然后恢复备份的数据。就是说，恢复后，备份后添加修改的数据都会被删除，慎用！\n2、实例：\nmongorestore -h 192.168.17.129:27017 -d itcast_restore --dir /home/mongodump/itcast/\n")])]),o._v(" "),t("h2",{attrs:{id:"linux下mongo启动关闭重启方法"}},[o._v("linux下mongo启动关闭重启方法")]),o._v(" "),t("p",[o._v("1 启动")]),o._v(" "),t("p",[o._v("启动mongodb首先要指定mongo的数据目录和日志文件路径，")]),o._v(" "),t("p",[o._v("如:     /data/mongodb/     /var/log/mongodb/mongodb.log")]),o._v(" "),t("p",[o._v("启动命令：     /usr/local/mongdb/bin/mongod -port 10001 --dbpath /data/mongodb/ --logpath /var/mongodb/mongodb.log")]),o._v(" "),t("p",[o._v("2 通过配置文件配置：")]),o._v(" "),t("p",[o._v("vim mongodb.conf")]),o._v(" "),t("p",[o._v("port=10001 【代表端口号，如果不指定则默认为   27017   】")]),o._v(" "),t("p",[o._v("dbpath= /data/mongodb/  【数据库路径】")]),o._v(" "),t("p",[o._v("logpath= /data/mongodb/  【日志路径】")]),o._v(" "),t("p",[o._v("logappend=true  【日志文件自动累加，而不是覆盖】")]),o._v(" "),t("p",[o._v("启动命令：     /usr/loca/mongodb/bin/mongod -f mongodb.conf")]),o._v(" "),t("p",[o._v("3后台启动")]),o._v(" "),t("h1",{attrs:{id:"fork-选项将会通知-mongod-在后台运行"}},[o._v("--fork 选项将会通知 mongod 在后台运行")]),o._v(" "),t("p",[o._v("/usr/local/mongodb/bin/mongod  -port 10001 --dbpath /data/mongodb/ --logpath /var/mongodb/mongodb.log --fork")]),o._v(" "),t("p",[o._v("#使用&后台启动")]),o._v(" "),t("p",[o._v("/usr/local/mongodb/bin/mongod  -port 10001 --dbpath /data/mongodb/ --logpath /var/mongodb/mongodb.log &")]),o._v(" "),t("p",[o._v("4 关闭")]),o._v(" "),t("p",[o._v("pkill mongod\n进入mongo shell ：运行 db.shuidownServer()")])])},[],!1,null,null,null);e.options.__file="mongodbData.md";n.default=e.exports}}]);