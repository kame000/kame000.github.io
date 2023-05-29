(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{459:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"crontab-格式详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crontab-格式详解"}},[s._v("#")]),s._v(" crontab 格式详解")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("*　　*　　*　　*　　*　　"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n分　时　日　月　周　命令\n第1列表示分钟1～59 每分钟用*或者 */1表示\n第2列表示小时1～23（0表示0点）\n第3列表示日期1～31\n第4列表示月份1～12\n第5列标识号星期0～6（0表示星期天）\n第6列要运行的命令\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("crontab文件的一些例子：\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" * * * /usr/local/etc/rc.d/lighttpd restart\n上面的例子表示每晚的21:30重启apache。\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,10")]),s._v(",22 * * /usr/local/etc/rc.d/lighttpd restart\n上面的例子表示每月1、10、22日的4 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),s._v("重启apache。\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6,0")]),s._v(" /usr/local/etc/rc.d/lighttpd restart\n上面的例子表示每周六、周日的1 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("重启apache。\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,30")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("-23 * * * /usr/local/etc/rc.d/lighttpd restart\n上面的例子表示在每天18 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 00至23 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 00之间每隔30分钟重启apache。\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" * * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" /usr/local/etc/rc.d/lighttpd restart\n上面的例子表示每星期六的11 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 00 pm重启apache。\n\n* */1 * * * /usr/local/etc/rc.d/lighttpd restart\n每一小时重启apache\n\n* "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("-7/1 * * * /usr/local/etc/rc.d/lighttpd restart\n晚上11点到早上7点之间，每隔一小时重启apache\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" * mon-wed /usr/local/etc/rc.d/lighttpd restart\n每月的4号与每周一到周三的11点重启apache\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" jan * /usr/local/etc/rc.d/lighttpd restart\n一月一号的4点重启apache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h2",{attrs:{id:"crontab-相关命令介绍使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crontab-相关命令介绍使用"}},[s._v("#")]),s._v(" crontab 相关命令介绍使用")]),s._v(" "),a("p",[s._v("名称 : crontab\n使用权限 : 所有使用者\n使用方式 :")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-u user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-用指定的文件替代目前的crontab。\ncrontab-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-u user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-用标准输入替代目前的crontab.\ncrontab-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-列出用户目前的crontab.\ncrontab-e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-编辑用户目前的crontab.\ncrontab-d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-删除用户目前的crontab.\ncrontab-c dir- 指定crontab的目录。\ncrontab文件的格式：M H D m d cmd.\nM: 分钟（0-59）。\nH：小时（0-23）。\nD：天（1-31）。\nm: 月（1-12）。\nd: 一星期内的天（0~6，0为星期天）。\ncmd要运行的程序，程序被送入sh执行，这个shell只有"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(","),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v(","),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHELL")]),s._v("这三个环境变量\n说明 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" 是用来让使用者在固定时间或固定间隔执行程序之用，换句话说，也就是类似使用者的时程表。-u user 是指设定指定\nuser 的时程表，这个前提是你必须要有其权限"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("比如说是 root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("才能够指定他人的时程表。如果不使用 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" user 的话，就是表示设\n定自己的时程表。\n参数 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 执行文字编辑器来设定时程表，内定的文字编辑器是 VI，如果你想用别的文字编辑器，则请先设定 VISUAL 环境变数\n来指定使用那个文字编辑器"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("比如说 setenv VISUAL joe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 删除目前的时程表\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 列出目前的时程表\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-u user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-用指定的文件替代目前的crontab。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[a("em",[a("strong",[s._v("时程表的格式如下")])]),s._v(" :")]),s._v(" "),a("p",[a("code",[s._v("f1 f2 f3 f4 f5 program")])]),s._v(" "),a("p",[s._v("其中 f1 是表示分钟，f2 表示小时，f3 表示一个月份中的第几日，f4 表示月份，f5 表示一个星期中的第几天。program 表示要执\n行的程序。")]),s._v(" "),a("p",[s._v("当 f1 为 * 时表示每分钟都要执行 program，f2 为 * 时表示每小时都要执行程序，其馀类推\n当 f1 为 a-b 时表示从第 a 分钟到第 b 分钟这段时间内要执行，f2 为 a-b 时表示从第 a 到第 b 小时都要执行，其馀类推\n当 f1 为 */n 时表示每 n 分钟个时间间隔执行一次，f2 为 */n 表示每 n 小时个时间间隔执行一次，其馀类推\n当 f1 为 a, b, c,... 时表示第 a, b, c,... 分钟要执行，f2 为 a, b, c,... 时表示第 a, b, c...个小时要执行，其馀类推")]),s._v(" "),a("p",[s._v("使用者也可以将所有的设定先存放在档案 file 中，用 crontab file 的方式来设定时程表。")]),s._v(" "),a("ul",[a("li",[s._v("例子1:")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("   每天早上7点执行一次 /bin/ls "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" * * * /bin/ls\n\n   在 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" 月内, 每天的早上 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" 点到 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" 点中，每隔3个小时执行一次 /usr/bin/backup "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("-12/3 * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" * /usr/bin/backup\n\n   周一到周五每天下午 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(":00 寄一封信给 alex@domain.name "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" * * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-5 mail "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hi"')]),s._v(" alex@domain.name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" /tmp/maildata\n\n   每月每天的午夜 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 点 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" 分, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 点 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" 分, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 点 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" 分"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("执行 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"haha"')]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-23/2 * * * "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"haha"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("blockquote",[a("p",[s._v("注意 :\n当程序在你所指定的时间执行后，系统会寄一封信给你，显示该程序执行的内容，若是你不希望收到这样的信，请在每一行空一格之后加上 > /dev/null 2>&1 即可")])]),s._v(" "),a("ul",[a("li",[s._v("例子2 :")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每天早上6点10分")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" * * * "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每两个小时")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" */2 * * * "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#晚上11点到早上8点之间每两个小时，早上8点")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("-7/2，8 * * * "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每个月的4号和每个礼拜的礼拜一到礼拜三的早上11点")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" * mon-wed "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1月份日早上4点")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" jan * "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n   范例\n   "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" 列出用户目前的crontab.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);