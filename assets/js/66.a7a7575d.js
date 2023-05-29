(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{474:function(_,v,e){"use strict";e.r(v);var t=e(2),c=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"查看linux中的tcp连接数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看linux中的tcp连接数"}},[_._v("#")]),_._v(" 查看linux中的TCP连接数")]),_._v(" "),v("h2",{attrs:{id:"查看哪些ip连接本机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看哪些ip连接本机"}},[_._v("#")]),_._v(" 查看哪些IP连接本机")]),_._v(" "),v("p",[v("code",[_._v("netstat -an")])]),_._v(" "),v("h2",{attrs:{id:"查看tcp连接数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看tcp连接数"}},[_._v("#")]),_._v(" 查看TCP连接数")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("统计80端口连接数")]),_._v(" "),v("p",[v("code",[_._v('netstat -nat|grep -i "80"|wc -l')])])]),_._v(" "),v("li",[v("p",[_._v("统计httpd协议连接数")]),_._v(" "),v("p",[v("code",[_._v("ps -ef|grep httpd|wc -l")])])]),_._v(" "),v("li",[v("p",[_._v("统计已连接上的，状态为“established")]),_._v(" "),v("p",[v("code",[_._v("netstat -na|grep ESTABLISHED|wc -l")])])]),_._v(" "),v("li",[v("p",[_._v("查出哪个IP地址连接最多,将其封了.")])])]),_._v(" "),v("p",[v("code",[_._v("netstat -na|grep ESTABLISHED|awk {print $5}|awk -F: {print $1}|sort|uniq -c|sort -r +0n")])]),_._v(" "),v("p",[v("code",[_._v("netstat -na|grep SYN|awk {print $5}|awk -F: {print $1}|sort|uniq -c|sort -r +0n")])]),_._v(" "),v("hr"),_._v(" "),v("ol",[v("li",[v("p",[_._v("查看apache当前并发访问数：")]),_._v(" "),v("p",[v("code",[_._v("netstat -an | grep ESTABLISHED | wc -l")])]),_._v(" "),v("p",[_._v("对比httpd.conf中MaxClients的数字差距多少。")])]),_._v(" "),v("li",[v("p",[_._v("查看有多少个进程数：")]),_._v(" "),v("p",[v("code",[_._v("ps aux|grep httpd|wc -l")])])]),_._v(" "),v("li",[v("p",[_._v("可以使用如下参数查看数据")]),_._v(" "),v("p",[v("code",[_._v("server-status?auto")])]),_._v(" "),v("p",[v("code",[_._v("ps -ef|grep httpd|wc -l")])]),_._v(" "),v("p",[v("code",[_._v("1388")])])])]),_._v(" "),v("p",[_._v("统计"),v("code",[_._v("httpd进程数")]),_._v("，连个请求会启动一个进程，使用于Apache服务器。\n表示Apache能够处理1388个并发请求，这个值Apache可根据负载情况自动调整。")]),_._v(" "),v("p",[v("code",[_._v('netstat -nat|grep -i "80"|wc -l')])]),_._v(" "),v("p",[v("code",[_._v("4341")])]),_._v(" "),v("p",[v("code",[_._v("netstat -an")]),_._v("会打印系统当前网络链接状态，而"),v("code",[_._v('grep -i "80"')]),_._v("是用来提取与80端口有关的连接的，"),v("code",[_._v("wc -l")]),_._v("进行连接数统计。\n最终返回的数字就是当前所有80端口的请求总数。")]),_._v(" "),v("p",[v("code",[_._v("netstat -na|grep ESTABLISHED|wc -l")])]),_._v(" "),v("p",[v("code",[_._v("376")]),_._v(" "),v("code",[_._v("netstat -an")]),_._v("会打印系统当前网络链接状态，而"),v("code",[_._v("grep ESTABLISHED")]),_._v(" 提取出已建立连接的信息。 然后"),v("code",[_._v("wc -l")]),_._v("统计。")]),_._v(" "),v("p",[_._v("最终返回的数字就是当前所有"),v("code",[_._v("80端口")]),_._v("的已建立连接的总数。")]),_._v(" "),v("p",[v("code",[_._v("netstat -nat||grep ESTABLISHED|wc -")]),_._v("可查看所有建立连接的详细记录")]),_._v(" "),v("h3",{attrs:{id:"查看apache的并发请求数及其tcp连接状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看apache的并发请求数及其tcp连接状态"}},[_._v("#")]),_._v(" 查看Apache的并发请求数及其TCP连接状态：")]),_._v(" "),v("p",[_._v("Linux命令：")]),_._v(" "),v("p",[v("code",[_._v("netstat -n | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'")])]),_._v(" "),v("p",[_._v("结果:")]),_._v(" "),v("p",[v("code",[_._v("TIME_WAIT 8947")]),_._v("  等待足够的时间以确保远程TCP接收到连接中断请求的确认\n"),v("code",[_._v("FIN_WAIT1 15")]),_._v(" 等待远程TCP连接中断请求，或先前的连接中断请求的确认\n"),v("code",[_._v("FIN_WAIT2 1")]),_._v("  从远程TCP等待连接中断请求\n"),v("code",[_._v("ESTABLISHED 55")]),_._v("  代表一个打开的连接\n"),v("code",[_._v("SYN_RECV 21")]),_._v(" 再收到和发送一个连接请求后等待对方对连接请求的确认\n"),v("code",[_._v("CLOSING 2")]),_._v(" 没有任何连接状态\n"),v("code",[_._v("LAST_ACK 4")]),_._v(" 等待原来的发向远程TCP的连接中断请求的确认")]),_._v(" "),v("h3",{attrs:{id:"tcp连接状态详解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接状态详解"}},[_._v("#")]),_._v(" TCP连接状态详解")]),_._v(" "),v("p",[v("code",[_._v("LISTEN:")]),_._v(" 侦听来自远方的TCP端口的连接请求\n"),v("code",[_._v("SYN-SENT：")]),_._v(" 再发送连接请求后等待匹配的连接请求\n"),v("code",[_._v("SYN-RECEIVED：")]),_._v("再收到和发送一个连接请求后等待对方对连接请求的确认\n"),v("code",[_._v("ESTABLISHED：")]),_._v(" 代表一个打开的连接\n"),v("code",[_._v("FIN-WAIT-1：")]),_._v(" 等待远程TCP连接中断请求，或先前的连接中断请求的确认\n"),v("code",[_._v("FIN-WAIT-2：")]),_._v(" 从远程TCP等待连接中断请求\n"),v("code",[_._v("CLOSE-WAIT：")]),_._v(" 等待从本地用户发来的连接中断请求\n"),v("code",[_._v("CLOSING：")]),_._v(" 等待远程TCP对连接中断的确认\n"),v("code",[_._v("LAST-ACK：")]),_._v(" 等待原来的发向远程TCP的连接中断请求的确认\n"),v("code",[_._v("TIME-WAIT：")]),_._v(" 等待足够的时间以确保远程TCP接收到连接中断请求的确认\n"),v("code",[_._v("CLOSED：")]),_._v(" 没有任何连接状态")]),_._v(" "),v("p",[v("strong",[_._v("输出结果:")])]),_._v(" "),v("p",[_._v("LAST_ACK 5\nSYN_RECV 30\nESTABLISHED 1597\nFIN_WAIT1 51\nFIN_WAIT2 504\nTIME_WAIT 1057")]),_._v(" "),v("p",[_._v("其中的\n"),v("code",[_._v("SYN_RECV")]),_._v("  表示正在等待处理的请求数；\n"),v("code",[_._v("ESTABLISHED")]),_._v("   表示正常数据传输状态；\n"),v("code",[_._v("TIME_WAIT")]),_._v(" 表示处理完毕，等待超时结束的请求数。")]),_._v(" "),v("hr"),_._v(" "),v("h3",{attrs:{id:"查看apache并发请求数及其tcp连接状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看apache并发请求数及其tcp连接状态"}},[_._v("#")]),_._v(" 查看Apache并发请求数及其TCP连接状态")]),_._v(" "),v("p",[_._v("查看"),v("code",[_._v("httpd")]),_._v("进程数（即"),v("code",[_._v("prefork")]),_._v("模式下"),v("code",[_._v("Apache")]),_._v("能够处理的并发请求数）：")]),_._v(" "),v("p",[_._v("Linux命令：")]),_._v(" "),v("p",[v("code",[_._v("ps -ef | grep httpd | wc -l")])]),_._v(" "),v("h3",{attrs:{id:"如发现系统存在大量time-wait状态的连接-通过调整内核参数解决"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如发现系统存在大量time-wait状态的连接-通过调整内核参数解决"}},[_._v("#")]),_._v(" 如发现系统存在大量TIME_WAIT状态的连接，通过调整内核参数解决")]),_._v(" "),v("p",[v("code",[_._v("vim /etc/sysctl.conf")])]),_._v(" "),v("p",[_._v("编辑文件，加入以下内容：")]),_._v(" "),v("div",{staticClass:"language-yml line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-yml"}},[v("code",[_._v("net.ipv4.tcp_syncookies = 1\nnet.ipv4.tcp_tw_reuse = 1\nnet.ipv4.tcp_tw_recycle = 1\nnet.ipv4.tcp_fin_timeout = 30\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br"),v("span",{staticClass:"line-number"},[_._v("3")]),v("br"),v("span",{staticClass:"line-number"},[_._v("4")]),v("br")])]),v("p",[_._v("然后执行 "),v("code",[_._v("/sbin/sysctl -p")]),_._v(" 让参数生效。")]),_._v(" "),v("p",[v("code",[_._v("net.ipv4.tcp_syncookies = 1")]),_._v(" 表示开启"),v("code",[_._v("SYN cookies")]),_._v("。当出现SYN等待队列溢出时，启用"),v("code",[_._v("cookies")]),_._v("来处理，可防范少量SYN攻击，默认为0，表示关闭；\n"),v("code",[_._v("net.ipv4.tcp_tw_reuse = 1")]),_._v(" 表示开启重用。允许将"),v("code",[_._v("TIME-WAIT sockets")]),_._v("重新用于新的TCP连接，默认为0，表示关闭；\n"),v("code",[_._v("net.ipv4.tcp_tw_recycle = 1")]),_._v(" 表示开启TCP连接中"),v("code",[_._v("TIME-WAIT sockets")]),_._v("的快速回收，默认为0，表示关闭。\n"),v("code",[_._v("net.ipv4.tcp_fin_timeout")]),_._v(" 修改系統默认的 "),v("code",[_._v("TIMEOUT")]),_._v(" 时间")]),_._v(" "),v("p",[_._v("下面附上"),v("code",[_._v("TIME_WAIT")]),_._v("状态的意义：")]),_._v(" "),v("p",[_._v("客户端与服务器端建立"),v("code",[_._v("TCP/IP")]),_._v("连接后关闭"),v("code",[_._v("SOCKET")]),_._v("后，服务器端连接的端口\n状态为"),v("code",[_._v("TIME_WAIT")])]),_._v(" "),v("p",[_._v("是不是所有执行主动关闭的"),v("code",[_._v("socket")]),_._v("都会进入"),v("code",[_._v("TIME_WAIT")]),_._v("状态呢？\n有没有什么情况使主动关闭的"),v("code",[_._v("socket")]),_._v("直接进入"),v("code",[_._v("CLOSED")]),_._v("状态呢？")]),_._v(" "),v("p",[_._v("主动关闭的一方在发送最后一个 "),v("code",[_._v("ack")]),_._v("后\n就会进入 "),v("code",[_._v("TIME_WAIT")]),_._v(" 状态 停留"),v("code",[_._v("2MSL（max segment lifetime）")]),_._v("时间\n这个是"),v("code",[_._v("TCP/IP")]),_._v("必不可少的，也就是“解决”不了的。")]),_._v(" "),v("blockquote",[v("p",[_._v("也就是TCP/IP设计者本来是这么设计的")])]),_._v(" "),v("p",[v("strong",[_._v("主要有两个原因")])]),_._v(" "),v("ol",[v("li",[_._v("防止上一次连接中的包，迷路后重新出现，影响新连接")])]),_._v(" "),v("p",[_._v("（经过2MSL，上一次连接中所有的重复包都会消失）")]),_._v(" "),v("ol",[v("li",[_._v("可靠的关闭TCP连接")])]),_._v(" "),v("p",[_._v("在主动关闭方发送的最后一个 "),v("code",[_._v("ack(fin)")]),_._v(" ，有可能丢失，这时被动方会重新发\nfin, 如果这时主动方处于 "),v("code",[_._v("CLOSED")]),_._v(" 状态 ，就会响应 rst 而不是 ack。所以\n主动方要处于 "),v("code",[_._v("TIME_WAIT")]),_._v(" 状态，而不能是 "),v("code",[_._v("CLOSED")]),_._v(" 。")]),_._v(" "),v("p",[v("code",[_._v("TIME_WAIT")]),_._v(" 并不会占用很大资源的，除非受到攻击。")]),_._v(" "),v("p",[_._v("还有，如果一方 "),v("code",[_._v("send")]),_._v(" 或 "),v("code",[_._v("recv")]),_._v(" 超时，就会直接进入 "),v("code",[_._v("CLOSED")]),_._v(" 状态")]),_._v(" "),v("p",[_._v("如何合理设置"),v("code",[_._v("apache httpd")]),_._v("的最大连接数？")]),_._v(" "),v("p",[_._v("手头有一个网站在线人数增多，访问时很慢。初步认为是服务器资源不足了，但经反复测试，一旦连接上，不断点击同一个页面上不同的链接，都能迅速打开，这种 现象就是说明apache最大连接数已经满了，新的访客只能排队等待有空闲的链接，而如果一旦连接上，在keeyalive 的存活时间内（KeepAliveTimeout，默认5秒）都不用重新打开连接，因此解决的方法就是加大apache的最大连接数。")])])}),[],!1,null,null,null);v.default=c.exports}}]);