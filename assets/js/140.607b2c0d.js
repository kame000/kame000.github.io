(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{545:function(t,e,a){"use strict";a.r(e);var s=a(2),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"记一次tcp-连接超时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记一次tcp-连接超时"}},[t._v("#")]),t._v(" 记一次TCP 连接超时")]),t._v(" "),e("h3",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("用户反馈 >>  有出现支付超时、页面问题  （部分情况会出现）")]),t._v(" "),e("p",[e("strong",[t._v("分析")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("检查最近是否有上线导致  (并没有上线)  排除")])]),t._v(" "),e("li",[e("p",[t._v("对接第三方平台  API接口是否有上线 (没有)  排除")])]),t._v(" "),e("li",[e("p",[t._v("是否网络延迟导致 （从前端 到后端 内网检测没问题ICMP包）,检查从外网到第三方接口（ICMP没有问题） 排除网络问题导致")])]),t._v(" "),e("li",[e("p",[t._v("没有办法只能上tcpdump  抓包   (抓取双方服务器 网络通讯数据包)\n发现 ICMP，http协议均无问题，只有TCP 出现问题,如图所示：\n"),e("a",{attrs:{"data-fancybox":"",title:"",href:"http://img.liuwenqi.com/blog/2019-07-03-021736.jpg"}},[e("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-03-021736.jpg",alt:""}})])])])]),t._v(" "),e("p",[e("strong",[t._v("难道是TCP连接跑满了？")])]),t._v(" "),e("p",[t._v("检查本机机房并没有，检查对方服务器也没有。")]),t._v(" "),e("p",[t._v("我擦 一头雾水  怎么搞。。。。。。")]),t._v(" "),e("p",[t._v("冷静分析一波。。。。。。。抽个烟想想。。。")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"http://img.liuwenqi.com/blog/2019-07-03-022139.jpg"}},[e("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-03-022139.jpg",alt:""}})])]),t._v(" "),e("p",[t._v("从TCP 抓包上看吧   问题描述："),e("code",[t._v("TCP Retransmission")])]),t._v(" "),e("p",[e("code",[t._v("SYN")]),t._v("重传，第三次握手被重传了，没有收到服务器放的"),e("code",[t._v("ACK")]),t._v("确认\n在服务器上抓包能捕获"),e("code",[t._v("SYN")]),t._v("的请求，那就说明服务器端接收到了请求但是没有回应"),e("code",[t._v("ACK")]),t._v("包，于是想起了以前"),e("code",[t._v("nat")]),t._v("环境下"),e("code",[t._v("tw_recyle``的坑，当多个客户端使用同一个外网IP通过NAT访问内网服务器的时候，服务器如果在内核参数中打开了")]),t._v("net.ipv4.tcp_tw_recycle = 1`")]),t._v(" "),e("p",[t._v("就有可能导致服务器收到SYN但是不会向客户端发送SYN+ACK包。因为打开recyle参数后会识别这些包的时间戳（"),e("code",[t._v("net.ipv4.tcp_timestamps = 1")]),t._v("），但是nat过来的数据包又因为时间戳有可能不是顺序的，导致服务器认为包不可信而丢弃。")]),t._v(" "),e("p",[t._v("故当我们在使用阿里云的VPC虚拟专网的时候，使用弹性IP接入，一定要注意NAT的问题，在服务器参数上关闭"),e("code",[t._v("net.ipv4.tcp_tw_recycle")]),t._v("。 否则从一个ip来的不同客户端请求很有可能导致大量请求失败")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://ju.outofmemory.cn/entry/333718",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("测试验证是否是这问题。")])]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("修改 linux /etc/sysctl.conf   \n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sysctl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("验证一波，然并卵的感觉")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"http://img.liuwenqi.com/blog/2019-07-03-022217.jpg"}},[e("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-03-022217.jpg",alt:""}})]),t._v(" "),e("a",{attrs:{"data-fancybox":"",title:"",href:"http://img.liuwenqi.com/blog/2019-07-03-022233.jpg"}},[e("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-03-022233.jpg",alt:""}})])]),t._v(" "),e("p",[e("code",[t._v("Timestamp value")]),t._v("  成功的值都比较小")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("改/etc/sysctl.conf文件里面得\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("net.ipv4.tcp_timestamps")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("再次 抓包测试  TCP 连接没有再出现 超时")]),t._v(" "),e("p",[t._v("搞定收工")]),t._v(" "),e("h2",{attrs:{id:"timestamp扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timestamp扩展"}},[t._v("#")]),t._v(" timestamp扩展：")]),t._v(" "),e("p",[t._v("同时开启"),e("code",[t._v("timestamp")]),t._v("（时间戳）和"),e("code",[t._v("tw_recycle")]),t._v("（快速回收）,会导致在一个MSL时间内只响应timestamp递增的请求，对于时间戳较小的请求都抛弃了（不响应ack）")]),t._v(" "),e("p",[e("code",[t._v("MSL")]),t._v("扩展： RFC793中规定MSL为2分钟，也就是说2分钟内同一个ip的请求的时间戳要求递增，不是递增的话服务器不予响应。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://m.aliyun.com/yunqi/articles/103188",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);