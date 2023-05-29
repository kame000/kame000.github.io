(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{479:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("#　原理")]),s._v(" "),t("h2",{attrs:{id:"limits-conf工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limits-conf工作原理"}},[s._v("#")]),s._v(" limits.conf工作原理")]),s._v(" "),t("blockquote",[t("p",[s._v("limits.conf是pam_limits.so的配置文件，然后/etc/pam.d/下的应用程序调用pam_***.so模块。譬如说，当用户访问服务器，服务程序将请求发送到PAM模块，PAM模块根据服务名称在/etc/pam.d目录下选择一个对应的服务文件，然后根据服务文件的内容选择具体的PAM模块进行处理。")])]),s._v(" "),t("p",[t("strong",[s._v("limits.conf文件格式")])]),s._v(" "),t("p",[t("code",[s._v("username|@groupname type resource limit")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("username|@groupname")])])]),s._v(" "),t("p",[s._v("设置需要被限制的用户名，组名前面加@和用户名区别。也可用通配符*来做所有用户的限制")]),s._v(" "),t("ul",[t("li",[s._v("type")])]),s._v(" "),t("p",[s._v("类型有"),t("code",[s._v("soft，hard")]),s._v(" 和 -，其中 "),t("code",[s._v("soft")]),s._v(" 指的是当前系统生效的设置值。"),t("code",[s._v("hard")]),s._v(" 表明系统中所能设定的最大值。"),t("code",[s._v("soft")]),s._v(" 的限制不能比 "),t("code",[s._v("hard")]),s._v(" 限制高。用 - 就表明同时设置了 soft 和 hard 的值")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("resource")]),s._v("： 表示要限制的资源")])]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[s._v("      nofile "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 打开文件的最大数目\n      noproc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 进程的最大数目\n      ulimit命令\n      ulimit命令用来限制系统用户对shell资源的访问，常用参数解释如下\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[s._v("  ulimit(选项)\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("a：显示目前资源限制的设定；\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c <core文件上限"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("：设定core文件的最大值，单位为区块；\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("d <数据节区大小"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("：程序数据节区的最大值，单位为KB；\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("f <文件大小"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("：shell所能建立的最大文件，单位为区块；\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("H：设定资源的硬性限制，也就是管理员所设下的限制；\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("m <内存大小"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("：指定可使用内存的上限，单位为KB；\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("n <文件数目"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("：指定同一时间最多可开启的文件数；\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("p <缓冲区大小"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("：指定管道缓冲区的大小，单位512字节；\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("s <堆叠大小"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("：指定堆叠的上限，单位为KB；\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("S：设定资源的弹性限制；\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("t <CPU时间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("：指定CPU使用时间的上限，单位为秒；\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("u <程序数目"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("：用户最多可开启的程序数目；\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("v <虚拟内存大小"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("：指定可使用的虚拟内存上限，单位为KB。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"sysctl-conf工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sysctl-conf工作原理"}},[s._v("#")]),s._v(" sysctl.conf工作原理")]),s._v(" "),t("blockquote",[t("p",[s._v("sysctl命令被用于在内核运行时动态地修改内核的运行参数，可用的内核参数在目录/proc/sys中。它包含一些TCP/IP堆栈和虚拟内存系统的高级选项， 这可以让有经验的管理员提高引人注目的系统性能。用sysctl可以读取设置超过五百个系统变量。")])]),s._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("h3",{attrs:{id:"limits-conf设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limits-conf设置"}},[s._v("#")]),s._v(" limits.conf设置")]),s._v(" "),t("ul",[t("li",[s._v("暂时生效，适用于通过 ulimit 命令登录 shell 会话期间\n"),t("code",[s._v("ulimit -SHn 65535")])]),s._v(" "),t("li",[s._v("永久生效，通过将一个相应的 ulimit 语句添加到由登录 shell 读取的文件之一（例如 ~/.profile），即特定于 shell 的用户资源文件；或者通过编辑/etc/security/limits.conf")])]),s._v(" "),t("p",[t("strong",[s._v("比如添加到/etc/profile")])]),s._v(" "),t("p",[t("code",[s._v("echo ulimit -SHn 65535 >> /etc/profile")]),s._v(" "),t("code",[s._v("source /etc/profile")])]),s._v(" "),t("p",[t("strong",[s._v("修改最大进程和最大文件打开数限制")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/security/limits.conf\n* soft nproc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11000")]),s._v("\n* hard nproc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11000")]),s._v("\n* soft nofile "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("655350")]),s._v("\n* hard nofile "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("655350")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"sysctl-conf设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sysctl-conf设置"}},[s._v("#")]),s._v(" sysctl.conf设置")]),s._v(" "),t("blockquote",[t("p",[s._v("这是一个在网络上流传依旧的sysctl.conf优化配置")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#优化TCP")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysctl.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁用包过滤功能")]),s._v("\nnet.ipv4.ip_forward "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用源路由核查功能")]),s._v("\nnet.ipv4.conf.default.rp_filter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁用所有IP源路由")]),s._v("\nnet.ipv4.conf.default.accept_source_route "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用sysrq组合键是了解系统目前运行情况，为安全起见设为0关闭")]),s._v("\nkernel.sysrq "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#控制core文件的文件名是否添加pid作为扩展")]),s._v("\nkernel.core_uses_pid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启SYN Cookies，当出现SYN等待队列溢出时，启用cookies来处理")]),s._v("\nnet.ipv4.tcp_syncookies "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每个消息队列的大小（单位：字节）限制")]),s._v("\nkernel.msgmnb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#整个系统最大消息队列数量限制")]),s._v("\nkernel.msgmax "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#单个共享内存段的大小（单位：字节）限制，计算公式64G*1024*1024*1024(字节)")]),s._v("\nkernel.shmmax "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("68719476736")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#所有内存大小（单位：页，1页 = 4Kb），计算公式16G*1024*1024*1024/4KB(页)")]),s._v("\nkernel.shmall "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4294967296")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#timewait的数量，默认是180000")]),s._v("\nnet.ipv4.tcp_max_tw_buckets "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启有选择的应答")]),s._v("\nnet.ipv4.tcp_sack "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#支持更大的TCP窗口. 如果TCP窗口最大超过65535(64K), 必须设置该数值为1")]),s._v("\nnet.ipv4.tcp_window_scaling "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#TCP读buffer")]),s._v("\nnet.ipv4.tcp_rmem "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("131072")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1048576")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#TCP写buffer")]),s._v("\nnet.ipv4.tcp_wmem "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("131072")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1048576")]),s._v("   \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#为TCP socket预留用于发送缓冲的内存默认值（单位：字节）")]),s._v("\nnet.core.wmem_default "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8388608")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#为TCP socket预留用于发送缓冲的内存最大值（单位：字节）")]),s._v("\nnet.core.wmem_max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16777216")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#为TCP socket预留用于接收缓冲的内存默认值（单位：字节）  ")]),s._v("\nnet.core.rmem_default "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8388608")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#为TCP socket预留用于接收缓冲的内存最大值（单位：字节）")]),s._v("\nnet.core.rmem_max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16777216")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每个网络接口接收数据包的速率比内核处理这些包的速率快时，允许送到队列的数据包的最大数目")]),s._v("\nnet.core.netdev_max_backlog "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#web应用中listen函数的backlog默认会给我们内核参数的net.core.somaxconn限制到128，而nginx定义的NGX_LISTEN_BACKLOG默认为511，所以有必要调整这个值")]),s._v("\nnet.core.somaxconn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#系统中最多有多少个TCP套接字不被关联到任何一个用户文件句柄上。这个限制仅仅是为了防止简单的DoS攻击，不能过分依靠它或者人为地减小这个值，更应该增加这个值(如果增加了内存之后)")]),s._v("\nnet.ipv4.tcp_max_orphans "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3276800")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#记录的那些尚未收到客户端确认信息的连接请求的最大值。对于有128M内存的系统而言，缺省值是1024，小内存的系统则是128")]),s._v("\nnet.ipv4.tcp_max_syn_backlog "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#时间戳可以避免序列号的卷绕。一个1Gbps的链路肯定会遇到以前用过的序列号。时间戳能够让内核接受这种“异常”的数据包。这里需要将其关掉")]),s._v("\nnet.ipv4.tcp_timestamps "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#为了打开对端的连接，内核需要发送一个SYN并附带一个回应前面一个SYN的ACK。也就是所谓三次握手中的第二次握手。这个设置决定了内核放弃连接之前发送SYN+ACK包的数量")]),s._v("\nnet.ipv4.tcp_synack_retries "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在内核放弃建立连接之前发送SYN包的数量")]),s._v("\nnet.ipv4.tcp_syn_retries "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启TCP连接中time_wait sockets的快速回收")]),s._v("\nnet.ipv4.tcp_tw_recycle "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启TCP连接复用功能，允许将time_wait sockets重新用于新的TCP连接（主要针对time_wait连接）")]),s._v("\nnet.ipv4.tcp_tw_reuse "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1st低于此值,TCP没有内存压力,2nd进入内存压力阶段,3rdTCP拒绝分配socket(单位：内存页)")]),s._v("\nnet.ipv4.tcp_mem "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("94500000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("915000000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("927000000")]),s._v("   \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果套接字由本端要求关闭，这个参数决定了它保持在FIN-WAIT-2状态的时间。对端可以出错并永远不关闭连接，甚至意外当机。缺省值是60 秒。2.2 内核的通常值是180秒，你可以按这个设置，但要记住的是，即使你的机器是一个轻载的WEB服务器，也有因为大量的死套接字而内存溢出的风险，FIN- WAIT-2的危险性比FIN-WAIT-1要小，因为它最多只能吃掉1.5K内存，但是它们的生存期长些。")]),s._v("\nnet.ipv4.tcp_fin_timeout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#表示当keepalive起用的时候，TCP发送keepalive消息的频度（单位：秒）")]),s._v("\nnet.ipv4.tcp_keepalive_time "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对外连接端口范围")]),s._v("\nnet.ipv4.ip_local_port_range "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#表示文件句柄的最大数量")]),s._v("\nfs.file-max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("102400")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br")])]),t("blockquote",[t("p",[s._v("实际生产系统自动化部署中用的配置")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Kernel sysctl configuration file for Red Hat Linux")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For binary values, 0 is disabled, 1 is enabled.  See sysctl(8) and")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sysctl.conf(5) for more details.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls IP packet forwarding")]),s._v("\nnet.ipv4.ip_forward "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls source route verification")]),s._v("\nnet.ipv4.conf.default.rp_filter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Do not accept source routing")]),s._v("\nnet.ipv4.conf.default.accept_source_route "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls the System Request debugging functionality of the kernel")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls whether core dumps will append the PID to the core filename.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Useful for debugging multi-threaded applications.")]),s._v("\nkernel.core_uses_pid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls the use of TCP syncookies")]),s._v("\nnet.ipv4.tcp_syncookies "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Disable netfilter on bridges.")]),s._v("\nnet.bridge.bridge-nf-call-ip6tables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.bridge.bridge-nf-call-iptables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.bridge.bridge-nf-call-arptables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls the default maxmimum size of a mesage queue")]),s._v("\nkernel.msgmnb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls the maximum size of a message, in bytes")]),s._v("\nkernel.msgmax "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls the maximum shared segment size, in bytes")]),s._v("\nkernel.shmmax "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("68719476736")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls the maximum number of shared memory segments, in pages")]),s._v("\nkernel.shmall "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4294967296")]),s._v("\nnet.ipv4.conf.all.send_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.default.send_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.all.secure_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.default.secure_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.all.accept_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.default.accept_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.all.send_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.default.send_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.all.secure_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.default.secure_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.all.accept_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.default.accept_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.netfilter.nf_conntrack_max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000000")]),s._v("\nkernel.unknown_nmi_panic "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nkernel.sysrq "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nfs.file-max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000000")]),s._v("\nvm.swappiness "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nfs.inotify.max_user_watches "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000000")]),s._v("\nnet.core.wmem_max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("327679")]),s._v("\nnet.core.rmem_max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("327679")]),s._v("\nnet.ipv4.conf.all.send_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.default.send_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.all.secure_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.default.secure_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.all.accept_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnet.ipv4.conf.default.accept_redirects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br")])]),t("blockquote",[t("p",[s._v("即时生效")])]),s._v(" "),t("p",[t("code",[s._v("/sbin/sysctl -p")])])])}),[],!1,null,null,null);t.default=e.exports}}]);