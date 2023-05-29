(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{512:function(e,s,n){"use strict";n.r(s);var a=n(2),t=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"mongodb基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb基本使用"}},[e._v("#")]),e._v(" MongoDB基本使用")]),e._v(" "),s("p",[e._v("成功启动MongoDB后，再打开一个命令行窗口输入mongo，就可以进行数据库的一些操作。")]),e._v(" "),s("blockquote",[s("p",[e._v("输入help可以看到基本操作命令：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("show dbs:显示数据库列表\nshow collections：显示当前数据库中的集合（类似关系数据库中的表）\nshow users：显示用户\n\nuse <db name>：切换当前数据库，这和MS-SQL里面的意思一样\ndb.help()：显示数据库操作命令，里面有很多的命令\ndb.foo.help()：显示集合操作命令，同样有很多的命令，foo指的是当前数据库下，一个叫foo的集合，并非真正意义上的命令\ndb.foo.find()：对于当前数据库中的foo集合进行数据查找（由于没有条件，会列出所有数据）\ndb.foo.find( { a : 1 } )：对于当前数据库中的foo集合进行查找，条件是数据中有一个属性叫a，且a的值为1\n")])])]),s("p",[e._v("MongoDB没有创建数据库的命令，但有类似的命令。")]),e._v(" "),s("p",[e._v("如：如果你想创建一个“myTest”的数据库，先运行use myTest命令，之后就做一些操作（如：db.createCollection('user')）,这样就可以创建一个名叫“myTest”的数据库。")]),e._v(" "),s("h2",{attrs:{id:"数据库常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库常用命令"}},[e._v("#")]),e._v(" 数据库常用命令")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Help查看命令提示")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("help\n\ndb.help();\n\ndb.yourColl.help();\n\ndb.youColl.find().help();\n\nrs.help();\n")])])])]),e._v(" "),s("li",[s("p",[e._v("切换/创建数据库")]),e._v(" "),s("p",[e._v("use yourDB;  当创建一个集合(table)的时候会自动创建当前数据库")])]),e._v(" "),s("li",[s("p",[e._v("查询所有数据库")]),e._v(" "),s("p",[e._v("show dbs;")])]),e._v(" "),s("li",[s("p",[e._v("删除当前使用数据库")])])]),e._v(" "),s("p",[e._v("db.dropDatabase();")]),e._v(" "),s("ul",[s("li",[e._v("从指定主机上克隆数据库")])]),e._v(" "),s("p",[e._v("db.cloneDatabase(“127.0.0.1”); 将指定机器上的数据库的数据克隆到当前数据库")]),e._v(" "),s("ul",[s("li",[e._v("从指定的机器上复制指定数据库数据到某个数据库")])]),e._v(" "),s("p",[e._v('db.copyDatabase("mydb", "temp", "127.0.0.1");将本机的mydb的数据复制到temp数据库中')]),e._v(" "),s("ul",[s("li",[e._v("修复当前数据库")])]),e._v(" "),s("p",[e._v("db.repairDatabase();")]),e._v(" "),s("ul",[s("li",[e._v("查看当前使用的数据库")])]),e._v(" "),s("p",[e._v("db.getName();")]),e._v(" "),s("p",[e._v("db; db和getName方法是一样的效果，都可以查询当前使用的数据库")]),e._v(" "),s("ul",[s("li",[e._v("显示当前db状态")])]),e._v(" "),s("p",[e._v("db.stats();")]),e._v(" "),s("ul",[s("li",[e._v("当前db版本")])]),e._v(" "),s("p",[e._v("db.version();")]),e._v(" "),s("ul",[s("li",[e._v("查看当前db的链接机器地址")])]),e._v(" "),s("p",[e._v("db.getMongo();")]),e._v(" "),s("h2",{attrs:{id:"collection聚集集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collection聚集集合"}},[e._v("#")]),e._v(" Collection聚集集合")]),e._v(" "),s("ul",[s("li",[e._v("创建一个聚集集合（table）")])]),e._v(" "),s("p",[e._v("db.createCollection(“collName”, {size: 20, capped: 5, max: 100});")]),e._v(" "),s("ul",[s("li",[e._v("得到指定名称的聚集集合（table）")])]),e._v(" "),s("p",[e._v('db.getCollection("account");')]),e._v(" "),s("ul",[s("li",[e._v("得到当前db的所有聚集集合")])]),e._v(" "),s("p",[e._v("db.getCollectionNames();")]),e._v(" "),s("ul",[s("li",[e._v("显示当前db所有聚集索引的状态")])]),e._v(" "),s("p",[e._v("db.printCollectionStats();")]),e._v(" "),s("h2",{attrs:{id:"用户相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户相关"}},[e._v("#")]),e._v(" 用户相关")]),e._v(" "),s("ul",[s("li",[e._v("添加一个用户")])]),e._v(" "),s("p",[e._v('db.addUser("name");')]),e._v(" "),s("p",[e._v('db.addUser("userName", "pwd123", true); 添加用户、设置密码、是否只读')]),e._v(" "),s("ul",[s("li",[e._v("数据库认证、安全模式")])]),e._v(" "),s("p",[e._v('db.auth("userName", "123123");')]),e._v(" "),s("ul",[s("li",[e._v("显示当前所有用户")])]),e._v(" "),s("p",[e._v("show users;")]),e._v(" "),s("ul",[s("li",[e._v("删除用户")])]),e._v(" "),s("p",[e._v('db.removeUser("userName");')]),e._v(" "),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),s("ul",[s("li",[e._v("查询之前的错误信息\ndb.getPrevError();")]),e._v(" "),s("li",[e._v("清除错误记录\ndb.resetError();")])]),e._v(" "),s("h2",{attrs:{id:"查看聚集集合基本信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看聚集集合基本信息"}},[e._v("#")]),e._v(" 查看聚集集合基本信息")]),e._v(" "),s("ul",[s("li",[e._v("查看帮助"),s("br"),e._v("\ndb.yourColl.help();")]),e._v(" "),s("li",[e._v("查询当前集合的数据条数\ndb.yourColl.count();")]),e._v(" "),s("li",[e._v("查看数据空间大小\ndb.userInfo.dataSize();")]),e._v(" "),s("li",[e._v("得到当前聚集集合所在的db\ndb.userInfo.getDB();")]),e._v(" "),s("li",[e._v("得到当前聚集的状态\ndb.userInfo.stats();")]),e._v(" "),s("li",[e._v("得到聚集集合总大小\ndb.userInfo.totalSize();")]),e._v(" "),s("li",[e._v("聚集集合储存空间大小\ndb.userInfo.storageSize();")]),e._v(" "),s("li",[e._v("Shard版本信息\ndb.userInfo.getShardVersion()")]),e._v(" "),s("li",[e._v('聚集集合重命名\ndb.userInfo.renameCollection("users"); 将userInfo重命名为users')]),e._v(" "),s("li",[e._v("删除当前聚集集合 db.userInfo.drop();")])]),e._v(" "),s("h2",{attrs:{id:"聚集集合查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚集集合查询"}},[e._v("#")]),e._v(" 聚集集合查询")]),e._v(" "),s("ul",[s("li",[e._v("查询所有记录")])]),e._v(" "),s("p",[e._v("db.userInfo.find();\n相当于：select* from userInfo;\n默认每页显示20条记录，当显示不下的情况下，可以用it迭代命令查询下一页数据。注意：键入it命令不能带“；”\n但是你可以设置每页显示数据的大小，用DBQuery.shellBatchSize= 50;这样每页就显示50条记录了。")]),e._v(" "),s("ul",[s("li",[e._v("查询去掉后的当前聚集集合中的某列的重复数据")])]),e._v(" "),s("p",[e._v('db.userInfo.distinct("name");\n会过滤掉name中的相同数据\n相当于：select distict name from userInfo;')]),e._v(" "),s("ul",[s("li",[e._v("查询age = 22的记录")])]),e._v(" "),s("p",[e._v('db.userInfo.find({"age": 22});\n相当于： select * from userInfo where age = 22;')]),e._v(" "),s("ul",[s("li",[e._v("查询age > 22的记录")])]),e._v(" "),s("p",[e._v("db.userInfo.find({age: {$gt: 22}});\n相当于：select * from userInfo where age >22;")]),e._v(" "),s("ul",[s("li",[e._v("查询age < 22的记录")])]),e._v(" "),s("p",[e._v("db.userInfo.find({age: {$lt: 22}});\n相当于：select * from userInfo where age <22;")]),e._v(" "),s("ul",[s("li",[e._v("查询age >= 25的记录")])]),e._v(" "),s("p",[e._v("db.userInfo.find({age: {$gte: 25}});\n相当于：select * from userInfo where age >= 25;")]),e._v(" "),s("ul",[s("li",[e._v("查询age <= 25的记录")])]),e._v(" "),s("p",[e._v("db.userInfo.find({age: {$lte: 25}});")]),e._v(" "),s("ul",[s("li",[e._v("查询age >= 23 并且 age <= 26")])]),e._v(" "),s("p",[e._v("db.userInfo.find({age: {$gte: 23, $lte: 26}});")]),e._v(" "),s("ul",[s("li",[e._v("查询name中包含 mongo的数据")])]),e._v(" "),s("p",[e._v("db.userInfo.find({name: /mongo/});\n//相当于%%\nselect * from userInfo where name like ‘%mongo%’;")]),e._v(" "),s("ul",[s("li",[e._v("查询name中以mongo开头的")])]),e._v(" "),s("p",[e._v("db.userInfo.find({name: /^mongo/});\nselect * from userInfo where name like ‘mongo%’;")]),e._v(" "),s("ul",[s("li",[e._v("查询指定列name、age数据")])]),e._v(" "),s("p",[e._v("db.userInfo.find({}, {name: 1, age: 1});\n相当于：select name, age from userInfo;\n当然name也可以用true或false,当用ture的情况下河name:1效果一样，如果用false就是排除name，显示name以外的列信息。")]),e._v(" "),s("ul",[s("li",[e._v("查询指定列name、age数据, age > 25")])]),e._v(" "),s("p",[e._v("db.userInfo.find({age: {$gt: 25}}, {name: 1, age: 1});\n相当于：select name, age from userInfo where age >25;")]),e._v(" "),s("ul",[s("li",[e._v("按照年龄排序")])]),e._v(" "),s("p",[e._v("升序：db.userInfo.find().sort({age: 1});\n降序：db.userInfo.find().sort({age: -1});")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("查询name = zhangsan, age = 22的数据\ndb.userInfo.find({name: 'zhangsan', age: 22});\n相当于：select * from userInfo where name = ‘zhangsan’ and age = ‘22’;")])]),e._v(" "),s("li",[s("p",[e._v("查询前5条数据")])])]),e._v(" "),s("p",[e._v("db.userInfo.find().limit(5);\n相当于：selecttop 5 * from userInfo;")]),e._v(" "),s("ul",[s("li",[e._v("查询10条以后的数据")])]),e._v(" "),s("p",[e._v("db.userInfo.find().skip(10);\n相当于：select * from userInfo where id not in (\nselecttop 10 * from userInfo\n);")]),e._v(" "),s("ul",[s("li",[e._v("查询在5-10之间的数据")])]),e._v(" "),s("p",[e._v("db.userInfo.find().limit(10).skip(5);\n可用于分页，limit是pageSize，skip是第几页*pageSize")]),e._v(" "),s("ul",[s("li",[e._v("or与 查询")])]),e._v(" "),s("p",[e._v("db.userInfo.find({$or: [{age: 22}, {age: 25}]});\n相当于：select * from userInfo where age = 22 or age = 25;")]),e._v(" "),s("ul",[s("li",[e._v("查询第一条数据")])]),e._v(" "),s("p",[e._v("db.userInfo.findOne();\n相当于：selecttop 1 * from userInfo;\ndb.userInfo.find().limit(1);")]),e._v(" "),s("ul",[s("li",[e._v("查询某个结果集的记录条数")])]),e._v(" "),s("p",[e._v("db.userInfo.find({age: {$gte: 25}}).count();\n相当于：select count(*) from userInfo where age >= 20;")]),e._v(" "),s("ul",[s("li",[e._v("按照某列进行排序")])]),e._v(" "),s("p",[e._v("db.userInfo.find({sex: {$exists: true}}).count();\n相当于：select count(sex) from userInfo;")]),e._v(" "),s("h2",{attrs:{id:"索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[e._v("#")]),e._v(" 索引")]),e._v(" "),s("ul",[s("li",[e._v("创建索引")])]),e._v(" "),s("p",[e._v("db.userInfo.ensureIndex({name: 1});\ndb.userInfo.ensureIndex({name: 1, ts: -1});")]),e._v(" "),s("ul",[s("li",[e._v("查询当前聚集集合所有索引")])]),e._v(" "),s("p",[e._v("db.userInfo.getIndexes();")]),e._v(" "),s("ul",[s("li",[e._v("查看总索引记录大小")])]),e._v(" "),s("p",[e._v("db.userInfo.totalIndexSize();")]),e._v(" "),s("ul",[s("li",[e._v("读取当前集合的所有index信息")])]),e._v(" "),s("p",[e._v("db.users.reIndex();")]),e._v(" "),s("ul",[s("li",[e._v("删除指定索引")])]),e._v(" "),s("p",[e._v('db.users.dropIndex("name_1");')]),e._v(" "),s("ul",[s("li",[e._v("删除所有索引索引")])]),e._v(" "),s("p",[e._v("db.users.dropIndexes();")]),e._v(" "),s("h2",{attrs:{id:"修改、添加、删除集合数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改、添加、删除集合数据"}},[e._v("#")]),e._v(" 修改、添加、删除集合数据")]),e._v(" "),s("ul",[s("li",[e._v("添加")])]),e._v(" "),s("p",[e._v("db.users.save({name: ‘zhangsan’, age: 25, sex: true});\n添加的数据的数据列，没有固定，根据添加的数据为准")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("修改\ndb.users.update({age: 25}, {$set: {name: 'changeName'}}, false, true);\n相当于：update users set name = ‘changeName’ where age = 25;")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("db.users.update({name: 'Lisi'}, {$inc: {age: 50}}, false, true);\n相当于：update users set age = age + 50 where name = ‘Lisi’;\n\ndb.users.update({name: 'Lisi'}, {$inc: {age: 50}, $set: {name: 'hoho'}}, false, true);\n相当于：update users set age = age + 50, name = ‘hoho’ where name = ‘Lisi’;\n")])])])]),e._v(" "),s("li",[s("p",[e._v("删除\ndb.users.remove({age: 132});")])]),e._v(" "),s("li",[s("p",[e._v("查询修改删除")])])]),e._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[e._v("      db.users.findAndModify("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("$gte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("-1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("$set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("$inc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(");\n\n      db.runCommand("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("findandmodify")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("$gte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("-1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("$set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("$inc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(");\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("update 或 remove 其中一个是必须的参数; 其他参数可选。\n\n参数\n\n详解\n\n默认值\n\nquery\n\n查询过滤条件\n\n{}\n\nsort\n\n如果多个文档符合查询过滤条件，将以该参数指定的排列方式选择出排在首位的对象，该对象将被操作\n\n{}\n\nremove\n\n若为true，被选中对象将在返回前被删除\n\nN/A\n\nupdate\n\n一个 修改器对象\n\nN/A\n\nnew\n\n若为true，将返回修改后的对象而不是原始对象。在删除操作中，该参数被忽略。\n\nfalse\n\nfields\n\n参见Retrieving a Subset of Fields (1.5.0+)\n\nAll fields\n\nupsert\n\n创建新对象若查询结果为空。 示例 (1.5.4+)\n\nfalse\n")])])]),s("p",[e._v("语句块操作\n1、简单Hello World")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('print("Hello World!");\n这种写法调用了print函数，和直接写入"Hello World!"的效果是一样的；\n')])])]),s("p",[e._v("2、将一个对象转换成json")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("tojson(new Object());\ntojson(new Object('a'));\n")])])]),s("p",[e._v("3、循环添加数据")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('> for (var i = 0; i < 30; i++) {\n... db.users.save({name: "u_" + i, age: 22 + i, sex: i % 2});\n... };\n')])])]),s("p",[e._v("这样就循环添加了30条数据，同样也可以省略括号的写法")]),e._v(" "),s("blockquote",[s("p",[e._v('for (var i = 0; i < 30; i++) db.users.save({name: "u_" + i, age: 22 + i, sex: i % 2});\n也是可以的，当你用db.users.find()查询的时候，显示多条数据而无法一页显示的情况下，可以用it查看下一页的信息；')])]),e._v(" "),s("p",[e._v("4、find 游标查询")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(">var cursor = db.users.find();\n> while (cursor.hasNext()) {\n    printjson(cursor.next());\n}\n")])])]),s("p",[e._v("这样就查询所有的users信息，同样可以这样写\nvar cursor = db.users.find();\nwhile (cursor.hasNext()) { printjson(cursor.next); }\n同样可以省略{}号")]),e._v(" "),s("p",[e._v("5、forEach迭代循环")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("db.users.find().forEach(printjson);\nforEach中必须传递一个函数来处理每条迭代的数据信息\n")])])]),s("p",[e._v("6、将find游标当数组处理")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("var cursor = db.users.find();\ncursor[4];\n取得下标索引为4的那条数据\n既然可以当做数组处理，那么就可以获得它的长度：cursor.length();或者cursor.count();\n那样我们也可以用循环显示数据\nfor (var i = 0, len = c.length(); i < len; i++) printjson(c[i]);\n")])])]),s("p",[e._v("7、将find游标转换成数组")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("> var arr = db.users.find().toArray();\n> printjson(arr[2]);\n用toArray方法将其转换为数组\n")])])]),s("p",[e._v("8、定制我们自己的查询结果")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("只显示age <= 28的并且只显示age这列数据\ndb.users.find({age: {$lte: 28}}, {age: 1}).forEach(printjson);\ndb.users.find({age: {$lte: 28}}, {age: true}).forEach(printjson);\n排除age的列\ndb.users.find({age: {$lte: 28}}, {age: false}).forEach(printjson);\n")])])]),s("p",[e._v("9、forEach传递函数显示信息")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("db.things.find({x:4}).forEach(function(x) {print(tojson(x));});\n")])])])])}),[],!1,null,null,null);s.default=t.exports}}]);