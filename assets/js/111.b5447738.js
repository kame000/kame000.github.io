(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{516:function(s,a,n){"use strict";n.r(a);var e=n(2),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-优化"}},[s._v("#")]),s._v(" mysql 优化")]),s._v(" "),a("blockquote",[a("p",[s._v("在进行MySQL的优化之前，必须要了解的就是MySQL的查询过程，很多查询优化工作实际上就是遵循一些原则，让MySQL的优化器能够按照预想的合理方式运行而已。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-08-29-073716.jpg",alt:""}})]),s._v(" "),a("p",[s._v("图-MySQL查询过程")]),s._v(" "),a("h2",{attrs:{id:"一、优化的哲学"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、优化的哲学"}},[s._v("#")]),s._v(" 一、优化的哲学")]),s._v(" "),a("p",[s._v("注：优化有风险，涉足需谨慎")]),s._v(" "),a("h3",{attrs:{id:"_1-优化可能带来的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-优化可能带来的问题"}},[s._v("#")]),s._v(" 1. 优化可能带来的问题？")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("优化不总是对一个单纯的环境进行，还很可能是一个复杂的已投产的系统；")])]),s._v(" "),a("li",[a("p",[s._v("优化手段本来就有很大的风险，只不过你没能力意识到和预见到；")])]),s._v(" "),a("li",[a("p",[s._v("任何的技术可以解决一个问题，但必然存在带来一个问题的风险；")])]),s._v(" "),a("li",[a("p",[s._v("对于优化来说解决问题而带来的问题，控制在可接受的范围内才是有成果；")])]),s._v(" "),a("li",[a("p",[s._v("保持现状或出现更差的情况都是失败")])])]),s._v(" "),a("h3",{attrs:{id:"_2-优化的需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-优化的需求"}},[s._v("#")]),s._v(" 2. 优化的需求？")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("稳定性和业务可持续性，通常比性能更重要；")])]),s._v(" "),a("li",[a("p",[s._v("优化不可避免涉及到变更，变更就有风险；")])]),s._v(" "),a("li",[a("p",[s._v("优化使性能变好，维持和变差是等概率事件；")])]),s._v(" "),a("li",[a("p",[s._v("切记优化，应该是各部门协同，共同参与的工作，任何单一部门都不能对数据库进行优化！")])])]),s._v(" "),a("p",[s._v("所以优化工作，是由业务需要驱使的！")]),s._v(" "),a("h3",{attrs:{id:"_3-优化由谁参与"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-优化由谁参与"}},[s._v("#")]),s._v(" 3. 优化由谁参与？")]),s._v(" "),a("p",[s._v("在进行数据库优化时，应由数据库管理员、业务部门代表、应用程序架构师、应用程序设计人员、应用程序开发人员、硬件及系统管理员、存储管理员等，业务相关人员共同参与。")]),s._v(" "),a("h2",{attrs:{id:"二、优化思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、优化思路"}},[s._v("#")]),s._v(" "),a("strong",[s._v("二、优化思路")])]),s._v(" "),a("h3",{attrs:{id:"_1-优化什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-优化什么"}},[s._v("#")]),s._v(" 1. 优化什么？")]),s._v(" "),a("p",[s._v("在数据库优化上有两个主要方面：即安全与性能。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安全->数据可持续性；")])]),s._v(" "),a("li",[a("p",[s._v("性能->数据的高性能访问。")])])]),s._v(" "),a("h3",{attrs:{id:"_2-优化的范围有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-优化的范围有哪些"}},[s._v("#")]),s._v(" 2. 优化的范围有哪些？")]),s._v(" "),a("h4",{attrs:{id:"存储、主机和操作系统方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储、主机和操作系统方面"}},[s._v("#")]),s._v(" "),a("strong",[s._v("存储、主机和操作系统方面：")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("主机架构稳定性；")])]),s._v(" "),a("li",[a("p",[s._v("I/O规划及配置；")])]),s._v(" "),a("li",[a("p",[s._v("Swap交换分区；")])]),s._v(" "),a("li",[a("p",[s._v("OS内核参数和网络问题。")])])]),s._v(" "),a("h4",{attrs:{id:"应用程序方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用程序方面"}},[s._v("#")]),s._v(" "),a("strong",[s._v("应用程序方面：")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("应用程序稳定性；")])]),s._v(" "),a("li",[a("p",[s._v("SQL语句性能；")])]),s._v(" "),a("li",[a("p",[s._v("串行访问资源；")])]),s._v(" "),a("li",[a("p",[s._v("性能欠佳会话管理；")])]),s._v(" "),a("li",[a("p",[s._v("这个应用适不适合用MySQL。")])])]),s._v(" "),a("h4",{attrs:{id:"数据库优化方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库优化方面"}},[s._v("#")]),s._v(" "),a("strong",[s._v("数据库优化方面：")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("内存；")])]),s._v(" "),a("li",[a("p",[s._v("数据库结构（物理&逻辑）；")])]),s._v(" "),a("li",[a("p",[s._v("实例配置。")])])]),s._v(" "),a("p",[s._v("说明：不管是设计系统、定位问题还是优化，都可以按照这个顺序执行。")]),s._v(" "),a("h3",{attrs:{id:"_3-优化维度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-优化维度"}},[s._v("#")]),s._v(" 3. 优化维度？")]),s._v(" "),a("p",[a("strong",[s._v("数据库优化维度有四个：")])]),s._v(" "),a("p",[s._v("硬件、系统配置、数据库表结构、SQL及索引。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-08-29-073741.jpg",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("优化选择：")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("优化成本：硬件>系统配置>数据库表结构>SQL及索引。")])]),s._v(" "),a("li",[a("p",[s._v("优化效果：硬件<系统配置<数据库表结构<SQL及索引。")])])]),s._v(" "),a("h2",{attrs:{id:"三、优化工具有啥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、优化工具有啥"}},[s._v("#")]),s._v(" "),a("strong",[s._v("三、优化工具有啥？")])]),s._v(" "),a("h3",{attrs:{id:"_1-数据库层面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库层面"}},[s._v("#")]),s._v(" 1. 数据库层面？")]),s._v(" "),a("p",[s._v("检查问题常用工具：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("*  MySQL\n\n* msyqladmin：MySQL客户端，可进行管理操作\n\n* mysqlshow：功能强大的查看shell命令\n\n*  show [SESSION | GLOBAL] variables：查看数据库参数信息\n\n* SHOW [SESSION | GLOBAL] STATUS：查看数据库的状态信息\n\n* information_schema：获取元数据的方法\n\n* SHOW ENGINE INNODB STATUS：Innodb引擎的所有状态\n\n* SHOW PROCESSLIST：查看当前所有连接session状态\n\n* explain：获取查询语句的执行计划\n\n* show index：查看表的索引信息\n\n* slow-log：记录慢查询语句\n\n* mysqldumpslow：分析slowlog文件的\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("不常用但好用的工具：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1）Zabbix：监控主机、系统、数据库（部署zabbix监控平台）\n\n2）pt-query-digest：分析慢日志\n\n3）MySQL slap：分析慢日志\n\n4）sysbench：压力测试工具\n\n5）MySQL profiling：统计数据库整体状态工具    \n\n6）Performance Schema：MySQL性能状态统计的数据\n\n7）workbench：管理、备份、监控、分析、优化工具（比较费资源）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("关于Zabbix参考：")]),s._v(" "),a("p",[a("code",[s._v("http://www.cnblogs.com/clsn/p/7885990.html")])]),s._v(" "),a("h3",{attrs:{id:"_2-数据库层面问题解决思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据库层面问题解决思路"}},[s._v("#")]),s._v(" 2. 数据库层面问题解决思路？")]),s._v(" "),a("p",[s._v("一般应急调优的思路：针对突然的业务办理卡顿，无法进行正常的业务处理，需要立马解决的场景。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1）show processlist；\n\n2）explain  select id ,name from stu where name='clsn'; # ALL  id name age  sex；\n\nselect id,name from stu  where id=2-1 函数 结果集>30；show index from table；\n\n3）通过执行计划判断，索引问题（有没有、合不合理）或者语句本身问题；\n\n4）show status  like '%lock%';    # 查询锁状态\n\nkill SESSION_ID;   # 杀掉有问题的session。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("code",[s._v("常规调优思路")]),s._v("：针对业务周期性的卡顿，例如在每天10-11点业务特别慢，但是还能够使用，过了这段时间就好了。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1）查看slowlog，分析slowlog，分析出查询慢的语句；\n\n2）按照一定优先级，一个一个排查所有慢语句；\n\n3）分析top SQL，进行explain调试，查看语句执行时间；\n\n4）调整索引或语句本身。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_3-系统层面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-系统层面"}},[s._v("#")]),s._v(" 3. 系统层面？")]),s._v(" "),a("p",[a("strong",[s._v("Cpu方面：")])]),s._v(" "),a("p",[s._v("vmstat、sar top、htop、nmon、mpstat；")]),s._v(" "),a("p",[a("strong",[s._v("内存：")])]),s._v(" "),a("p",[s._v("free、ps-aux；")]),s._v(" "),a("p",[a("strong",[s._v("IO设备（磁盘、网络）")])]),s._v(" "),a("p",[s._v("iostat、ss、netstat、iptraf、iftop、lsof；")]),s._v(" "),a("p",[a("strong",[s._v("vmstat命令说明：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1）Procs：r显示有多少进程正在等待CPU时间。b显示处于不可中断的休眠的进程数量。在等待I/O。\n\n2）Memory：swpd显示被交换到磁盘的数据块的数量。未被使用的数据块，用户缓冲数据块，用于操作系统的数据块的数量。\n\n3）Swap：操作系统每秒从磁盘上交换到内存和从内存交换到磁盘的数据块的数量。s1和s0最好是0。\n\n4）Io：每秒从设备中读入b1的写入到设备b0的数据块的数量。反映了磁盘I/O。\n\n5）System：显示了每秒发生中断的数量（in）和上下文交换（cs）的数量。\n\n6）Cpu：显示用于运行用户代码，系统代码，空闲，等待I/O的Cpu时间。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("strong",[s._v("iostat命令说明：")])]),s._v(" "),a("p",[s._v("实例命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("iostat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-dk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\niostat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" （查看设备使用率（%util）和响应时间（await））\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("）tps：该设备每秒的传输次数。“一次传输”意思是“一次I/O请求”。多个逻辑请求可能会被合并为“一次I/O请求”。\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("）iops ：硬件出厂的时候，厂家定义的一个每秒最大的IO次数\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"一次传输"')]),s._v("请求的大小是未知的。\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("）kB_read/s：每秒从设备（drive expressed）读取的数据量；\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("）KB_wrtn/s：每秒向设备（drive expressed）写入的数据量；\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("）kB_read：读取的总数据量；\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("）kB_wrtn：写入的总数量数据量；这些单位都为Kilobytes。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"_4-系统层面问题解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-系统层面问题解决办法"}},[s._v("#")]),s._v(" 4. 系统层面问题解决办法？")]),s._v(" "),a("p",[s._v("你认为到底负载高好，还是低好呢？在实际的生产中，一般认为Cpu只要不超过90%都没什么问题。")]),s._v(" "),a("p",[s._v("当然不排除下面这些特殊情况：")]),s._v(" "),a("p",[a("strong",[s._v("Cpu负载高，IO负载低：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1）内存不够； \n\n2）磁盘性能差；\n\n3）SQL问题---\x3e去数据库层，进一步排查SQL 问题；\n\n4）IO出问题了（磁盘到临界了、raid设计不好、raid降级、锁、在单位时间内tps过高）；\n\n5）tps过高：大量的小数据IO、大量的全表扫描。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("IO负载高，Cpu负载低：")])]),s._v(" "),a("p",[s._v("1）大量小的IO写操作：")]),s._v(" "),a("p",[a("code",[s._v("autocommit")]),s._v("，产生大量小IO；IO/PS，磁盘的一个定值，硬件出厂的时候，厂家定义的一个每秒最大的IO次数。")]),s._v(" "),a("p",[s._v("2）大量大的IO 写操作：SQL问题的几率比较大")]),s._v(" "),a("p",[a("strong",[s._v("IO和cpu负载都很高：")])]),s._v(" "),a("p",[s._v("硬件不够了或SQL存在问题。"),a("strong",[s._v("四、基础优化")]),s._v("1、优化思路？")]),s._v(" "),a("p",[s._v("**定位问题点吮吸：**硬件--\x3e系统--\x3e应用--\x3e数据库--\x3e架构（高可用、读写分离、分库分表）。")]),s._v(" "),a("p",[s._v("**处理方向：**明确优化目标、性能和安全的折中、防患未然。")]),s._v(" "),a("ol",[a("li",[s._v("硬件优化？")])]),s._v(" "),a("h4",{attrs:{id:"主机方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主机方面"}},[s._v("#")]),s._v(" "),a("strong",[s._v("主机方面：")])]),s._v(" "),a("p",[s._v("根据数据库类型，主机CPU选择、内存容量选择、磁盘选择：")]),s._v(" "),a("p",[s._v("1）平衡内存和磁盘资源；")]),s._v(" "),a("p",[s._v("2）随机的I/O和顺序的I/O；")]),s._v(" "),a("p",[s._v("3）主机 RAID卡的BBU（Battery Backup Unit）关闭。")]),s._v(" "),a("h4",{attrs:{id:"cpu的选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu的选择"}},[s._v("#")]),s._v(" "),a("strong",[s._v("CPU的选择：")])]),s._v(" "),a("p",[s._v("CPU的两个关键因素：核数、主频")]),s._v(" "),a("p",[s._v("根据不同的业务类型进行选择：")]),s._v(" "),a("p",[s._v("1）CPU密集型：计算比较多，OLTP - 主频很高的cpu、核数还要多")]),s._v(" "),a("p",[s._v("2）IO密集型：查询比较，OLAP - 核数要多，主频不一定高的")]),s._v(" "),a("h4",{attrs:{id:"内存的选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存的选择"}},[s._v("#")]),s._v(" "),a("strong",[s._v("内存的选择：")])]),s._v(" "),a("p",[s._v("OLAP类型数据库，需要更多内存，和数据获取量级有关。")]),s._v(" "),a("p",[s._v("OLTP类型数据一般内存是Cpu核心数量的2倍到4倍，没有最佳实践。")]),s._v(" "),a("h4",{attrs:{id:"存储方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储方面"}},[s._v("#")]),s._v(" "),a("strong",[s._v("存储方面：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1）根据存储数据种类的不同，选择不同的存储设备；\n\n2）配置合理的RAID级别（raid5、raid10、热备盘）；\n\n3）对与操作系统来讲，不需要太特殊的选择，最好做好冗余（raid1）（ssd、sas、sata）。\n\n4）raid卡：\n\n       主机raid卡选择：\n\n           实现操作系统磁盘的冗余（raid1）；\n\n           平衡内存和磁盘资源；\n\n           随机的I/O和顺序的I/O；\n\n           主机raid卡的BBU（Battery Backup Unit）要关闭。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h4",{attrs:{id:"网络设备方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络设备方面"}},[s._v("#")]),s._v(" "),a("strong",[s._v("网络设备方面：")])]),s._v(" "),a("p",[s._v("使用流量支持更高的网络设备（交换机、路由器、网线、网卡、HBA卡）")]),s._v(" "),a("p",[s._v("注意：以上这些规划应该在初始设计系统时就应该考虑好。")]),s._v(" "),a("h3",{attrs:{id:"_3-服务器硬件优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-服务器硬件优化"}},[s._v("#")]),s._v(" 3. 服务器硬件优化？")]),s._v(" "),a("p",[s._v("1）物理状态灯")]),s._v(" "),a("p",[s._v("2）自带管理设备：远程控制卡（FENCE设备：ipmi ilo idarc）、开关机、硬件监控。")]),s._v(" "),a("p",[s._v("3）第三方的监控软件、设备（snmp、agent）对物理设施进行监控。")]),s._v(" "),a("p",[s._v("4）存储设备：自带的监控平台。EMC2（hp收购了）、 日立（hds）、IBM低端OEM hds、高端存储是自己技术，华为存储。")]),s._v(" "),a("h3",{attrs:{id:"_4-系统优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-系统优化"}},[s._v("#")]),s._v(" 4. 系统优化？")]),s._v(" "),a("p",[a("strong",[s._v("Cpu：")])]),s._v(" "),a("p",[s._v("基本不需要调整，在硬件选择方面下功夫即可。")]),s._v(" "),a("p",[a("strong",[s._v("内存：")])]),s._v(" "),a("p",[s._v("基本不需要调整，在硬件选择方面下功夫即可。")]),s._v(" "),a("p",[a("strong",[s._v("SWAP：")])]),s._v(" "),a("p",[s._v("MySQL尽量避免使用swap。")]),s._v(" "),a("p",[s._v("阿里云的服务器中默认swap为0。")]),s._v(" "),a("p",[a("strong",[s._v("IO ：")])]),s._v(" "),a("p",[s._v("raid、no lvm、ext4或xfs、ssd、IO调度策略。")]),s._v(" "),a("p",[a("strong",[s._v("Swap调整(不使用swap分区)")])]),s._v(" "),a("p",[a("code",[s._v("/proc/sys/vm/swappiness")]),s._v("的内容改成0（临时），"),a("code",[s._v("/etc/sysctl. conf上添加vm.swappiness=0（永久）")])]),s._v(" "),a("p",[s._v("这个参数决定了Linux是倾向于使用swap，还是倾向于释放文件系统cache。在内存紧张的情况下，数值越低越倾向于释放文件系统cache。")]),s._v(" "),a("p",[s._v("当然，这个参数只能减少使用swap的概率，并不能避免Linux使用swap。")]),s._v(" "),a("p",[a("strong",[s._v("修改MySQL的配置参数")]),a("code",[s._v("innodb_flush_ method")]),s._v("，开启"),a("code",[s._v("O_DIRECT")]),s._v("模式：")]),s._v(" "),a("p",[s._v("这种情况下，InnoDB的"),a("code",[s._v("buffer pool")]),s._v("会直接绕过文件系统"),a("code",[s._v("cache")]),s._v("来访问磁盘，但是redo log依旧会使用文件系统cache。")]),s._v(" "),a("p",[s._v("值得注意的是，Redo log是覆写模式的，即使使用了文件系统的cache，也不会占用太多。")]),s._v(" "),a("p",[a("strong",[s._v("IO调度策略：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#echo deadline>/sys/block/sda/queue/scheduler   临时修改为deadline")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("永久修改")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /boot/grub/grub.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("更改到如下内容:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kernel /boot/vmlinuz-2.6.18-8.el5 ro root=LABEL=/ elevator=deadline rhgb quiet\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_5-系统参数调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-系统参数调整"}},[s._v("#")]),s._v(" 5. 系统参数调整？")]),s._v(" "),a("p",[a("strong",[s._v("Linux系统内核参数优化：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("vim/etc/sysctl.conf\n\nnet.ipv4.ip_local_port_range "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),s._v("："),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户端口范围")]),s._v("\n\nnet.ipv4.tcp_max_syn_backlog "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" \n\nnet.ipv4.tcp_fin_timeout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" \n\nfs.file-max"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),s._v("："),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 系统最大文件句柄，控制的是能打开文件最大数量  ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("用户限制参数（MySQL可以不设置以下配置）：")])]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[s._v("vim/etc/security/limits.conf \n\n* soft nproc 65535\n\n* hard nproc 65535\n\n* soft nofile 65535\n\n* hard nofile 65535\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_6-应用优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-应用优化"}},[s._v("#")]),s._v(" 6. 应用优化？")]),s._v(" "),a("p",[s._v("业务应用和数据库应用独立；")]),s._v(" "),a("p",[s._v("**防火墙：**iptables、selinux等其他无用服务（关闭）：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("   chkconfig --level 23456 acpid off\n\n    chkconfig --level 23456 anacron off\n\n    chkconfig --level 23456 autofs off\n\n    chkconfig --level 23456 avahi-daemon off\n\n    chkconfig --level 23456 bluetooth off\n\n    chkconfig --level 23456 cups off\n\n    chkconfig --level 23456 firstboot off\n\n    chkconfig --level 23456 haldaemon off\n\n    chkconfig --level 23456 hplip off\n\n    chkconfig --level 23456 ip6tables off\n\n    chkconfig --level 23456 iptables  off\n\n    chkconfig --level 23456 isdn off\n\n    chkconfig --level 23456 pcscd off\n\n    chkconfig --level 23456 sendmail  off\n\n    chkconfig --level 23456 yum-updatesd  off\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("安装图形界面的服务器不要启动图形界面"),a("code",[s._v("runlevel 3")]),s._v("。")]),s._v(" "),a("p",[s._v("另外，思考将来我们的业务是否真的需要MySQL，还是使用其他种类的数据库。用数据库的最高境界就是不用数据库。")]),s._v(" "),a("h2",{attrs:{id:"五、数据库优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、数据库优化"}},[s._v("#")]),s._v(" "),a("strong",[s._v("五、数据库优化")])]),s._v(" "),a("p",[s._v("SQL优化方向：执行计划、索引、SQL改写。")]),s._v(" "),a("p",[s._v("架构优化方向：高可用架构、高性能架构、分库分表。")]),s._v(" "),a("h3",{attrs:{id:"_1、数据库参数优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、数据库参数优化"}},[s._v("#")]),s._v(" 1、数据库参数优化？")]),s._v(" "),a("p",[a("strong",[s._v("调整")])]),s._v(" "),a("p",[s._v("实例整体（高级优化，扩展）：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("thread_concurrency：# 并发线程数量个数\n\nsort_buffer_size：# 排序缓存\n\nread_buffer_size：# 顺序读取缓存\n\nread_rnd_buffer_size：# 随机读取缓存\n\nkey_buffer_size：# 索引缓存\n\nthread_cache_size：# (1G—>8, 2G—>16, 3G—>32, >3G—>64)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("strong",[s._v("连接层（基础优化）")])]),s._v(" "),a("p",[s._v("设置合理的连接客户和连接方式：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("max_connections           # 最大连接数，看交易笔数设置    \n\nmax_connect_errors        # 最大错误连接数，能大则大\n\nconnect_timeout           # 连接超时\n\nmax_user_connections      # 最大用户连接数\n\nskip-name-resolve         # 跳过域名解析\n\nwait_timeout              # 等待超时\n\nback_log                  # 可以在堆栈中的连接数量\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("strong",[s._v("SQL层（基础优化）")])]),s._v(" "),a("p",[a("code",[s._v("query_cache_size：")]),s._v("查询缓存  >>>  OLAP类型数据库,需要重点加大此内存缓存，但是一般不会超过GB。")]),s._v(" "),a("p",[s._v("对于经常被修改的数据，缓存会立马失效。")]),s._v(" "),a("p",[s._v("我们可以实用内存数据库（redis、memecache），替代他的功能。")]),s._v(" "),a("h3",{attrs:{id:"_2、存储引擎层-innodb基础优化参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、存储引擎层-innodb基础优化参数"}},[s._v("#")]),s._v(" 2、存储引擎层（innodb基础优化参数）？")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("default-storage-engine\n\ninnodb_buffer_pool_size       # 没有固定大小，50%测试值，看看情况再微调。但是尽量设置不要超过物理内存70%\n\ninnodb_file_per_table=(1,0)\n\ninnodb_flush_log_at_trx_commit=(0,1,2) # 1是最安全的，0是性能最高，2折中\n\nbinlog_sync\n\nInnodb_flush_method=(O_DIRECT, fdatasync)\n\ninnodb_log_buffer_size           # 100M以下\n\ninnodb_log_file_size               # 100M 以下\n\ninnodb_log_files_in_group       # 5个成员以下,一般2-3个够用（iblogfile0-N）\n\ninnodb_max_dirty_pages_pct   # 达到百分之75的时候刷写 内存脏页到磁盘。\n\nlog_bin\n\nmax_binlog_cache_size                     # 可以不设置\n\nmax_binlog_size                               # 可以不设置\n\ninnodb_additional_mem_pool_size     #小于2G内存的机器，推荐值是20M。32G内存以上100M\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);