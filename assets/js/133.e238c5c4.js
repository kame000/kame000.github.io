(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{541:function(a,s,t){"use strict";t.r(s);var i=t(2),r=Object(i.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"jira-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jira-安装"}},[a._v("#")]),a._v(" JIRA  安装")]),a._v(" "),s("h2",{attrs:{id:"环境要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[a._v("#")]),a._v(" 环境要求")]),a._v(" "),s("ul",[s("li",[a._v("Centos7")]),a._v(" "),s("li",[a._v("java 1.8")]),a._v(" "),s("li",[a._v("mysql 5.7")])]),a._v(" "),s("h2",{attrs:{id:"安装基础环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装基础环境"}},[a._v("#")]),a._v(" 安装基础环境")]),a._v(" "),s("p",[a._v("Centos7 安装 略过")]),a._v(" "),s("p",[s("strong",[a._v("注意事项")])]),a._v(" "),s("ul",[s("li",[a._v("关闭 selinux")]),a._v(" "),s("li",[a._v("关闭 firewalld 和 iptables")])]),a._v(" "),s("h3",{attrs:{id:"java-1-8-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-1-8-安装"}},[a._v("#")]),a._v(" java 1.8 安装")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" java-1.8.0-openjdk.x86_64 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"mysql-5-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-5-7"}},[a._v("#")]),a._v(" mysql 5.7")]),a._v(" "),s("p",[a._v("参考地址")]),a._v(" "),s("p",[a._v("https://blog.csdn.net/offbeatmine/article/details/50925229")]),a._v(" "),s("p",[a._v("https://www.cnblogs.com/OnlyDreams/p/5698415.html")]),a._v(" "),s("p",[a._v("安装完成后：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("创建jira 数据库")]),a._v(" "),s("p",[s("code",[a._v("create database jira")])])]),a._v(" "),s("li",[s("p",[a._v("创建 数据库连接用户")]),a._v(" "),s("p",[s("code",[a._v("create user jira@'%' identified by 'jira'")])])]),a._v(" "),s("li",[s("p",[a._v("用户赋权")]),a._v(" "),s("p",[s("code",[a._v("grant all privileges on jira.* to jira@'%'")])]),a._v(" "),s("p",[s("code",[a._v("flush privileges")])])])]),a._v(" "),s("p",[s("strong",[a._v("至此基础环境已经准备完成")])]),a._v(" "),s("h2",{attrs:{id:"安装-jira"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-jira"}},[a._v("#")]),a._v(" 安装 jira")]),a._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[a._v("到官网地址下载"),s("br"),a._v("\nhttps://www.atlassian.com/software/jira/download")]),a._v(" "),s("p",[s("strong",[a._v("选择对应版本")]),a._v(" "),s("img",{attrs:{src:"http://img.liuwenqi.com/jira-1.png",alt:"version"}})]),a._v(" "),s("p",[a._v("下载完成后")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./atlassian-jira-software-7.10.1-x64.bin\n默认安装即可， 按照提示填写\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"破解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#破解"}},[a._v("#")]),a._v(" 破解")]),a._v(" "),s("p",[a._v("下载破解安装包：\nhttps://page00.ctfile.com/fs/15323800-217438995")]),a._v(" "),s("p",[a._v("解压后\n"),s("img",{attrs:{src:"http://img.liuwenqi.com/jira-2.png",alt:""}})]),a._v(" "),s("p",[s("strong",[a._v("停止jira")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("/opt/atlassian/jira/bin/catalina.sh stop\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("把如图上两个文件copy到 /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/")]),a._v(" "),s("p",[s("strong",[a._v("启动jira")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("/opt/atlassian/jira/bin/catalina.sh start\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("浏览器打开对应IP\nhttp://IP:8080")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.liuwenqi.com/jira-3.png",alt:""}})]),a._v(" "),s("p",[s("strong",[a._v("填写对应数据库信息 之前创建的用户和密码")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.liuwenqi.com/jira-4.png",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.liuwenqi.com/jira-5.png",alt:""}})]),a._v(" "),s("p",[s("strong",[a._v("最后一步")])]),a._v(" "),s("blockquote",[s("p",[a._v("需要在jira 官网注册一个账号 然后申请一个秘钥")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.liuwenqi.com/jira-6.png",alt:""}}),a._v("\n官网注册地址: https://id.atlassian.com/signup?application=mac&continue=https://my.atlassian.com")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.liuwenqi.com/jira-7.png",alt:""}})]),a._v(" "),s("p",[s("strong",[a._v("注册账号的时候可能需要翻墙，账户最好使用gmail邮箱")])]),a._v(" "),s("p",[a._v("使用service ID  创建对应的 30天 license")]),a._v(" "),s("p",[a._v("填入 license")]),a._v(" "),s("p",[s("strong",[a._v("至此 破解完成。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);