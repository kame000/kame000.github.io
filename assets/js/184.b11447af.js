(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{590:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux下搭建svn服务器及创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux下搭建svn服务器及创建项目"}},[s._v("#")]),s._v(" linux下搭建svn服务器及创建项目")]),s._v(" "),a("p",[s._v("主题 SVN Linux")]),s._v(" "),a("h2",{attrs:{id:"一-使用yum-安装svn包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-使用yum-安装svn包"}},[s._v("#")]),s._v(" 一. 使用yum 安装SVN包")]),s._v(" "),a("p",[s._v("关于YUM 服务器的配置参考：\nLinux 搭建 YUM 服务器\nhttp://blog.csdn.net/tianlesoftware/archive/2011/01/03/6113902.aspx")]),s._v(" "),a("h3",{attrs:{id:"_1-安装svn命令如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装svn命令如下"}},[s._v("#")]),s._v(" 1.安装svn命令如下")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install -y subversion")]),s._v("\n验证安装版本\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# svnserve --version")]),s._v("\n创建SVN 版本库\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir /var/www/svn")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# svnadmin create /var/www/svn/testproject  --  testproject 为版本库名称")]),s._v("\n为svn创建用户\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# htpasswd -c /var/www/passwd ***(这个根据情况不同，写法不同， -c是创建用户（删除原有用户）,-d是在原有基础上添加用户）)  ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_2-配置svn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置svn"}},[s._v("#")]),s._v(" 2.配置svn")]),s._v(" "),a("p",[s._v("创建版本库后，在这个目录下会生成3个配置文件：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pwd")]),s._v("\n/var/www/svn/testproject/conf\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\n  authz  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("  svnserve.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("svnserve.conf 文件， 该文件配置项分为以下5项：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("anon-access")]),s._v("： 控制非鉴权用户访问版本库的权限。")]),s._v(" "),a("li",[a("code",[s._v("auth-access")]),s._v("： 控制鉴权用户访问版本库的权限。")]),s._v(" "),a("li",[a("code",[s._v("password-db")]),s._v("： 指定用户名口令文件名。")]),s._v(" "),a("li",[a("code",[s._v("authz-db")]),s._v("：指定权限配置文件名，通过该文件可以实现以路径为基础的访问控制。")]),s._v(" "),a("li",[a("code",[s._v("realm")]),s._v("：指定版本库的认证域，即在登录时提示的认证域名称。若两个版本库的认证域相同，建议使用相同的用户名口令数据文件")])])]),s._v(" "),a("li",[a("p",[s._v("Passwd 文件 ：")])])]),s._v(" "),a("p",[s._v("我们在"),a("code",[s._v("svnserve.conf")]),s._v("文件里启用这个文件。然后配置如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi passwd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# harry = harryssecret")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sally = sallyssecret")]),s._v("\nadmin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" admin\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("zhangsan")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" zhangsanpwd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("authz  文件 ：")])]),s._v(" "),a("p",[s._v("下面我们来配置我们的"),a("code",[s._v("authz")]),s._v("文件：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi authz")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("groups"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nadmin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" admin\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("zhangsan")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zhangsan\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("project:/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n@admin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rw\n@zhangsan "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rw\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("以下是在网上找到一个很好的配置例子：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("groups"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nadmin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" john, kate\ndevteam1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" john, rachel, sally\ndevteam2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" kate, peter, mark\ndocs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bob, jane, mike\ntraining "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" zak\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("-- 这里把不同用户放到不同的组里面，下面在设置目录访问权限的时候，用目录来操作就可以了。")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为所有库指定默认访问规则")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所有人可以读，管理员可以写，危险分子没有任何权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("对应我测试里的：/u02/svn 目录\n* = r\n@admin = rw\ndangerman =\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许开发人员可以完全访问他们的项目版本库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("proj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n@devteam1 = rw\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("proj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n@devteam2 = rw\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bigproj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n@devteam1 = rw\n@devteam2 = rw\ntrevor = rw\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文档编写人员对所有的docs目录有写权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/trunk/doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n@docs = rw\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 培训人员可以完全访问培训版本库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TrainingRepos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n@training = rw\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"_3-启动和停止svn服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动和停止svn服务"}},[s._v("#")]),s._v(" 3.启动和停止SVN服务")]),s._v(" "),a("h4",{attrs:{id:"_1-启动svn服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-启动svn服务"}},[s._v("#")]),s._v(" 1）启动SVN服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# svnserve -d -r /var/www/svn")]),s._v("\n   \t\t-d表示后台运行\n    \t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" 指定根目录是 /var/www/svn\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_2-查看svn服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看svn服务"}},[s._v("#")]),s._v(" 2） 查看svn服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef | grep svn")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_3-停止svn服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-停止svn服务"}},[s._v("#")]),s._v(" 3）停止SVN服务:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -aux |grep svn")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shxt conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kill -9 进程杀掉")]),s._v("\n\n多数时候会把svn服务放到apache的服务中\n\n```shell\n重启apache\n\t/usr/local/apache/bin/apachectl restart\n    或者\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" httpd restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("strong",[s._v("如果遇到下列问题")])]),s._v(" "),a("p",[a("code",[s._v("Can't open file '/var/www/svn/repo_name/db/txn-current-lock': Permission denied")])]),s._v(" "),a("p",[s._v("需要分配读写权限")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/www/svn\n    $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" apache.apache project（项目名）\n  或者\n     $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" –R o+rw  /var/www/svn/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"二-客户端连接svn-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-客户端连接svn-服务器"}},[s._v("#")]),s._v(" 二. 客户端连接SVN 服务器")]),s._v(" "),a("h3",{attrs:{id:"_2-1-安装tortoisesvn-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装tortoisesvn-客户端"}},[s._v("#")]),s._v(" 2.1 安装TortoiseSVN 客户端")]),s._v(" "),a("p",[a("code",[s._v("下载地址：http://tortoisesvn.net/downloads.html")])]),s._v(" "),a("h3",{attrs:{id:"_2-2-找到自己项目的目录-右击-进行svn-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-找到自己项目的目录-右击-进行svn-操作"}},[s._v("#")]),s._v(" 2.2 找到自己项目的目录，右击，进行SVN 操作")]),s._v(" "),a("p",[s._v("（1）新建测试目录svn，进入后右键，点checkout：")]),s._v(" "),a("p",[s._v("SVN 服务器的IP地址和版本库名称。")]),s._v(" "),a("p",[s._v("新建个文件svn.txt. 把这个文件上传到SVN服务器(add)：")]),s._v(" "),a("h2",{attrs:{id:"三-linux下svn使用命令总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-linux下svn使用命令总结"}},[s._v("#")]),s._v(" 三.linux下svn使用命令总结")]),s._v(" "),a("h3",{attrs:{id:"_1、将文件checkout到本地目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、将文件checkout到本地目录"}},[s._v("#")]),s._v(" 1、将文件checkout到本地目录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn checkout path（path是服务器上的目录）\n\t例如：svn checkout svn://192.168.1.1/pro/domain\n\t简写：svn co\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2、往版本库中添加新的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、往版本库中添加新的文件"}},[s._v("#")]),s._v(" 2、往版本库中添加新的文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\t例如：svn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" test.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("添加test.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tsvn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" *.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("添加当前目录下所有的php文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_3、将改动的文件提交到版本库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、将改动的文件提交到版本库"}},[s._v("#")]),s._v(" 3、将改动的文件提交到版本库")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" “LogMessage“ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--no-unlock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("如果选择了保持锁，就使用–no-unlock开关"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t例如：svn commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" “add "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" my test“ test.php\n\t简写：svn ci\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_4、加锁-解锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、加锁-解锁"}},[s._v("#")]),s._v(" 4、加锁/解锁")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn lock "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" “LockMessage“ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--force"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n\t例如：svn lock "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" “lock "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" file“ test.php\n\tsvn unlock "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_5、更新到某个版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、更新到某个版本"}},[s._v("#")]),s._v(" 5、更新到某个版本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn update "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" m path\n\t例如：\n\tsvn update如果后面没有目录，默认将当前目录以及子目录下的所有文件都更新到最新版本。\n\tsvn update "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" test.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("将版本库中的文件test.php还原到版本200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tsvn update test.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("更新，于版本库同步。如果在提交的时候提示过期的话，是因为冲突，需要先update，修改文件，然后清除svn resolved，最后再提交commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t简写：svn up\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_6、查看文件或者目录状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、查看文件或者目录状态"}},[s._v("#")]),s._v(" 6、查看文件或者目录状态")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("）svn status path（目录下的文件和子目录的状态，正常状态不显示）\n\t【?：不在svn的控制中；M：内容被修改；C：发生冲突；A：预定加入到版本库；K：被锁定】\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("）svn status "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("显示文件和子目录状态"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t第一列保持相同，第二列显示工作版本号，第三和第四列显示最后一次修改的版本号和修改人。\n\t注：svn status、svn diff和 svn revert这三条命令在没有网络的情况下也可以执行的，原因是svn在本地的.svn中保留了本地版本的原始拷贝。\n\t简写：svn st\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_7、删除文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、删除文件"}},[s._v("#")]),s._v(" 7、删除文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn delete path "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" “delete "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" fle“\n\t例如：svn delete svn://192.168.1.1/pro/domain/test.php "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" “delete "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" file”\n\t或者直接svn delete test.php 然后再svn ci "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" ‘delete "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" file‘，推荐使用这种\n\t简写：svn "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("del, remove, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_8、查看日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、查看日志"}},[s._v("#")]),s._v(" 8、查看日志")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn log path\n\t例如：svn log test.php 显示这个文件的所有修改记录，及其版本号的变化\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_9、查看文件详细信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、查看文件详细信息"}},[s._v("#")]),s._v(" 9、查看文件详细信息")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn info path\n\t例如：svn info test.php\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_10、比较差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、比较差异"}},[s._v("#")]),s._v(" 10、比较差异")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("将修改的文件与基础版本比较"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t例如：svn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" test.php\n\tsvn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" m:n path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("对版本m和版本n比较差异"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t例如：svn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(":201 test.php\n\t简写：svn di\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_11、将两个版本之间的差异合并到当前文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11、将两个版本之间的差异合并到当前文件"}},[s._v("#")]),s._v(" 11、将两个版本之间的差异合并到当前文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn merge "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" m:n path\n\t例如：svn merge "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(":205 test.php（将版本200与205之间的差异合并到当前文件，但是一般都会产生冲突，需要处理一下）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_12、svn-帮助"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12、svn-帮助"}},[s._v("#")]),s._v(" 12、SVN 帮助")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\n\tsvn "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" ci\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("hr"),s._v(" "),a("p",[a("strong",[s._v("以上是常用命令，下面写几个不经常用的")])]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_13、版本库下的文件和目录列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13、版本库下的文件和目录列表"}},[s._v("#")]),s._v(" 13、版本库下的文件和目录列表")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn list path\n\t显示path目录下的所有属于版本库的文件和目录\n\t简写：svn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_14、创建纳入版本控制下的新目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14、创建纳入版本控制下的新目录"}},[s._v("#")]),s._v(" 14、创建纳入版本控制下的新目录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn mkdir: 创建纳入版本控制下的新目录。\n\t用法: \n\t- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、mkdir "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("…\n\t- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、mkdir URL…\n\t创建版本控制的目录。\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、每一个以工作副本 "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" 指定的目录，都会创建在本地端，并且加入新增\n\t调度，以待下一次的提交。\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、每个以URL指定的目录，都会透过立即提交于仓库中创建。\n\t在这两个情况下，所有的中间目录都必须事先存在。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_15、恢复本地修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15、恢复本地修改"}},[s._v("#")]),s._v(" 15、恢复本地修改")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn revert: 恢复原始未改变的工作副本文件 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("恢复大部份的本地修改"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("。revert:\n\t用法: revert "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("…\n\t注意: 本子命令不会存取网络，并且会解除冲突的状况。但是它不会恢复\n\t被删除的目录\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_16、代码库url变更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16、代码库url变更"}},[s._v("#")]),s._v(" 16、代码库URL变更")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn switch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": 更新工作副本至不同的URL。\n\t用法: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、switch URL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、switch –relocate FROM TO "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、更新你的工作副本，映射到一个新的URL，其行为跟“svn update”很像，也会将\n\t服务器上文件与本地文件合并。这是将工作副本对应到同一仓库中某个分支或者标记的\n\t方法。\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、改写工作副本的URL元数据，以反映单纯的URL上的改变。当仓库的根URL变动\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("比如方案名或是主机名称变动"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，但是工作副本仍旧对映到同一仓库的同一目录时使用\n\t这个命令更新工作副本与仓库的对应关系。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_17、解决冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17、解决冲突"}},[s._v("#")]),s._v(" 17、解决冲突")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn resolved: 移除工作副本的目录或文件的“冲突”状态。\n\t用法: resolved "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("…\n\t注意: 本子命令不会依语法来解决冲突或是移除冲突标记；它只是移除冲突的\n\t相关文件，然后让 "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" 可以再次提交。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_18、输出指定文件或url的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18、输出指定文件或url的内容"}},[s._v("#")]),s._v(" 18、输出指定文件或URL的内容.")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\tsvn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" 目标"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@版本"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("…如果指定了版本，将从指定的版本开始查找。\n\tsvn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" PREV filename "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" filename "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PREV 是上一版本,也可以写具体版本号,这样输出结果是可以提交的"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);