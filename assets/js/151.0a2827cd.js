(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{554:function(v,_,a){"use strict";a.r(_);var p=a(2),e=Object(p.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"cdn基础知识-来自互联网"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cdn基础知识-来自互联网"}},[v._v("#")]),v._v(" CDN基础知识——来自互联网")]),v._v(" "),_("p",[v._v("《CDN技术详解》纯粹的重点抄录,有些不懂，先放到这，日后慢慢研究。")]),v._v(" "),_("h2",{attrs:{id:"第一章-引言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一章-引言"}},[v._v("#")]),v._v(" 第一章    引言")]),v._v(" "),_("p",[v._v("“第一公里”是指万维网流量向用户传送的第一个出口，是网站服务器接入互联网的链路所能提供的带宽。这个带宽决定了一个网站能为用户提供的访问速度和并发访问量。如果业务繁忙，用户的访问数越多，拥塞越严重，网站会在最需要向用户提供服务时失去用户。（还有“中间一公里”和“最后一公里”分别代表互联网传输传输和万维网流量向用户传送的最后一段接入链路）")]),v._v(" "),_("p",[v._v("从互联网的架构来看，不同网络之间的互联互通带宽，对任何一个运营商网络的流量来说，占比都比较小，收敛比是非常高的，因此这里通常都是互联网传输中的拥堵点（运营商互联互通的问题）")]),v._v(" "),_("p",[v._v("其次是骨干网堵塞问题，由于互联网上的绝大部分流量都要通过骨干网络进行传输，这就要求骨干网络的承载能力必须与互联网的应用同步发展，但实际上两者并不是同步的，当骨干网络的升级和扩容滞后于互联网之上的应用的发展时，就会阶段性地使得大型骨干网的承载能力成为影响互联网性能的瓶颈（区域互联互通问题，骨干网带宽瓶颈）")]),v._v(" "),_("p",[v._v("在互联网领域有一个“8秒定律”，用户访问一个网站时，如果等待网页打开的时间超过8秒，会有超过30%的用户放弃等待")]),v._v(" "),_("p",[v._v("使用CDN会极大简化网站的系统维护工作量，网站维护人员只需将网站内容注入CDN的系统，通过CDN部署在各个物理位置的服务器进行全网分发，就可以实现跨运营商、跨地域的用户覆盖")]),v._v(" "),_("p",[v._v("对于电信运营商，CDN是真正体现管道智能化的技术")]),v._v(" "),_("h2",{attrs:{id:"第二章-cdn技术概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二章-cdn技术概述"}},[v._v("#")]),v._v(" 第二章    CDN技术概述")]),v._v(" "),_("h3",{attrs:{id:"cdn关键技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cdn关键技术"}},[v._v("#")]),v._v(" CDN关键技术")]),v._v(" "),_("ol",[_("li",[v._v("缓存算法[Squid]；")]),v._v(" "),_("li",[v._v("分发能力；")]),v._v(" "),_("li",[v._v("负载均衡[Nginx]")]),v._v(" "),_("li",[v._v("基于DNS[BIND]）；")]),v._v(" "),_("li",[v._v("支持协议；")])]),v._v(" "),_("ul",[_("li",[v._v("缓存算法决定命中率、源服务器压力、POP节点存储能力")]),v._v(" "),_("li",[v._v("分发能力取决于IDC能力和IDC策略性分布")]),v._v(" "),_("li",[v._v("负载均衡（智能调度）决定最佳路由、响应时间、可用性、服务质量")]),v._v(" "),_("li",[v._v("基于DNS的负载均衡以CNAME实现[to cluster]，智取最优节点服务，")]),v._v(" "),_("li",[v._v("缓存点有客户端浏览器缓存、本地DNS服务器缓存")]),v._v(" "),_("li",[v._v("缓存内容有DNS地址缓存、客户请求内容缓存、动态内容缓存")]),v._v(" "),_("li",[v._v("支持协议如静动态加速（图片加速、https带证书加速）、下载加速、流媒体加速、企业应用加速、手机应用加速")])]),v._v(" "),_("blockquote",[_("p",[v._v("CDN提供一种机制，当用户请求内容时，该内容能够由以最快速度交付的Cache来向用户提供，这个挑选“最优”的过程就叫做负载均衡")])]),v._v(" "),_("p",[v._v("从功能上看，典型的CDN系统由分发服务系统，负载均衡系统和运营管理系统组成")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("分发服务系统：最基本的工作单元就是Cache设备，cache（边缘cache）负责直接响应最终用户的访问请求，把缓存在本地的内容快速地提供给用户。同时cache还负责与源站点进行内容同步，把更新的内容以及本地没有的内容从源站点获取并保存在本地。Cache设备的数量、规模、总服务能力是衡量一个CDN系统服务能力的最基本的指标")])]),v._v(" "),_("li",[_("p",[v._v("负载均衡系统：主要功能是负责对所有发起服务请求的用户进行访问调度，确定提供给用户的最终实际访问地址。两级调度体系分为全局负载均衡（GSLB）和本地负载均衡（SLB）。GSLB主要根据用户就近性原则，通过对每个服务节点进行“最优”判断，确定向用户提供服务的cache的物理位置。SLB主要负责节点内部的设备负载均衡")])]),v._v(" "),_("li",[_("p",[v._v("运营管理系统：分为运营管理和网络管理子系统，负责处理业务层面的与外界系统交互所必须的收集、整理、交付工作，包含客户管理、产品管理、计费管理、统计分析等功能。")])])]),v._v(" "),_("p",[v._v("负责为用户提供内容服务的cache设备应部署在物理上的网络边缘位置，即CDN边缘层。CDN系统中负责全局性管理和控制的设备组成中心层（二级缓存），中心层同时保存着最多的内容副本，当边缘层设备未命中时，会向中心层请求，如果在中心层仍未命中，则需要中心层向源站回源（如果是流媒体，代价很大）")]),v._v(" "),_("p",[v._v("CDN骨干点和CDN POP点在功能上不同，中心和区域节点一般称为骨干点，主要作为内容分发和边缘未命中时的服务点；边缘节点又被称为POP（point of presence）节点，CDN POP点主要作为直接向用户提供服务的节点")]),v._v(" "),_("p",[v._v("应用协议加速：企业应用加速主要是动态加速和SSL加速")]),v._v(" "),_("p",[v._v("广域网应用加速：")]),v._v(" "),_("p",[v._v("SSL应用加速：由于需要大量的加密解密运算，SSL应用对服务器端的资源消耗是非常巨大的。CDN提供SSL应用加速后，由CDN的专用SSL加速硬件来完成加密解密运算工作")]),v._v(" "),_("p",[v._v("网页压缩：HTTP1.1提出对网页压缩的支持。在服务器端可以先对网页数据进行压缩，然后将压缩后的文件提供给访问用户，最后在用户浏览器端解压显示（但要衡量加解压时间）")]),v._v(" "),_("h2",{attrs:{id:"第三章-内容缓存工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三章-内容缓存工作原理"}},[v._v("#")]),v._v(" 第三章 内容缓存工作原理")]),v._v(" "),_("p",[v._v("有CDN前的网站服务技术")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("硬件扩展：高成本，灵活性和可扩展性比较差")])]),v._v(" "),_("li",[_("p",[v._v("镜像技术（mirroring）：镜像服务器安装有一个可以进行自动远程备份的软件，每隔一定时间，各个镜像服务器就会到网站的源服务器上去获取最新的内容")])]),v._v(" "),_("li",[_("p",[v._v("缓存技术（caching）：缓存代理缓存被访问过的内容，后续的相同内容访问直接通过缓存代理获得服务")])]),v._v(" "),_("li",[_("p",[v._v("CDN：是缓存技术的基础上发展起来的，是缓存的分布式集群实现")])])]),v._v(" "),_("p",[v._v("从技术层面看，Web架构的精华有三处：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("超文本技术HTML实现信息与信息的连接；")])]),v._v(" "),_("li",[_("p",[v._v("统一资源标志符URI实现全球信息的精确定位")])]),v._v(" "),_("li",[_("p",[v._v("应用层协议HTTP实现分布式的信息共享")])])]),v._v(" "),_("p",[v._v("TCP连接在每一次HTTP（HTTP 1.0）请求和响应完成后就关闭，如果客户端还要请求其他对象，需要重新为每个对象建立TCP连接。当一个Web页面内包含多个对象并全部显示时，客户端需要与服务器建立的TCP连接数较多，对整个时延和网络流量造成了较大的影响")]),v._v(" "),_("p",[v._v("HTTP1.1采用了效率更高的持续连接机制，即客户端和服务器端建立TCP连接后，后续相关联的HTTP请求可以重复利用已经建立起来的TCP连接，不仅整个Web页面（包括基本的HTML文件和其他对象）可以使用这个持续的TCP连接来完成HTTP请求和响应，而且同一个服务器内的多个Web页面也可以通过同一个持续TCP连接来请求和响应。通常情况下，这个持续的TCP连接会在空闲一段特定的时间后关闭，而这个最大空闲时间时可以设置的（连接复用）。")]),v._v(" "),_("p",[v._v("HTTP协议中的缓存技术：新鲜度（时间值）和验证（验证信息如ETag或last-modified）时确定内容可否直接提供服务的最重要依据。如果缓存内容足够新鲜，缓存的内容就能直接满足HTTP访问的需求了；如果内容过期，而经源服务器验证后发现内容没有发生变化，缓存服务器也会避免将内容从源服务器重新传输一遍")]),v._v(" "),_("p",[v._v("如果要通过META标签来控制页面不缓存，一般情况下会在Web页面的/")]),_("head"),v._v("区域中增加”pragma:no-cache”"),_("p"),v._v(" "),_("p",[v._v("验证的目的就是检验缓存内容是否可用。当中间缓存存在一个过期的缓存内容，并且对应的访问请求到达时，缓存应该首先向源服务器或者其他保存有未过期的缓存服务器请求验证来确定本地的缓存内容是否可用。（缓存内容过期，但源服务器没有更新内容，即缓存内容仍可用）")]),v._v(" "),_("p",[v._v("HTTP1.1介绍了cache-control显示指令来让网站发布者可以更全面地控制他们的内容，并对过期时间进行限制（控制是否缓存，怎么缓存）")]),v._v(" "),_("p",[v._v("HTTP gzip压缩：大多数情况需要压缩的文件时网页中出现最频繁的HTML、CSS、javascript、XML等文件，这类本身是没有经过压缩的文本文件，可以取得较好的压缩效果")]),v._v(" "),_("p",[v._v("Web缓存代理软件：Squid")]),v._v(" "),_("p",[v._v("负载均衡软件：Nginx")]),v._v(" "),_("p",[v._v("DNS服务器软件：BIND")]),v._v(" "),_("h2",{attrs:{id:"第四章-集群服务与负载均衡"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第四章-集群服务与负载均衡"}},[v._v("#")]),v._v(" 第四章 集群服务与负载均衡")]),v._v(" "),_("h2",{attrs:{id:"第五章-全局负载均衡-gslb"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第五章-全局负载均衡-gslb"}},[v._v("#")]),v._v(" 第五章 全局负载均衡 （GSLB）")]),v._v(" "),_("p",[v._v("负载均衡就是智能调度")]),v._v(" "),_("p",[v._v("全局负载均衡（GSLB）的负载均衡主要是在多个节点之间进行均衡，其结果可能直接终结负载均衡过程，也可能将用户访问交付下一层次的（区域或本地）负载均衡系统进行处理。GSLB最通用的是基于DNS解析方式，还有HTTP重定向、IP路由等方法")]),v._v(" "),_("p",[v._v("DNS就是IP地址和网址互换")]),v._v(" "),_("p",[v._v("当需要访问abc.com这个站点时，实际上我们想要浏览的网页内容都存放在互联网中对应某个IP的服务器上，而浏览器的任务就是找到我们想要访问的这台服务器的IP地址，然后向它请求内容。")]),v._v(" "),_("p",[v._v("本地DNS服务器（local DNS server）是用户所在局域网或ISP网络中的域名服务器。当客户端在浏览器里请求abc.com时，浏览器会首先向本地DNS服务器请求将abc.com解析成IP地址，本地DNS服务器再向整个DNS系统查询，直到找到解析结果。客户端可以配置DNS服务器或通过DHCP来分配")]),v._v(" "),_("p",[v._v("DNS给使用它的互联网应用带来额外的时延，有时时延还比较大，为了解决问题，需要引入“缓存”机制。缓存是指DNS查询结果在主机（local DNS server）中缓存。在区内主机对某个域名发起第一次查询请求时，负责处理递归查询的DNS服务器要发送好几次查询（先查.root，再查.com之类，再定位IP地址等）才能找到结果，不过在这过程中它也得到了许多信息，比如各区域权威DNS服务器（就是告诉你最终abc.com在哪里的DNS服务器）和它们的地址、域名解析最终结果。他会把这些信息保存起来，当其他主机向它发起查询请求时，它就直接向主机返回缓存中能够找到的结果，直到数据过期。")]),v._v(" "),_("p",[v._v("客户端浏览器也可以缓存DNS响应信息。")]),v._v(" "),_("p",[v._v("Internet类资源记录分为")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("A记录（address）：域名->多个IP的映射。对同一个域名，可以有多条A记录")])]),v._v(" "),_("li",[_("p",[v._v("NS记录（name server）：指定由哪台DNS服务器来解析")])]),v._v(" "),_("li",[_("p",[v._v("SOA记录（start of authority）：指定该区域的权威域名服务器")])]),v._v(" "),_("li",[_("p",[v._v("CNAME记录（canonical name）：多个域名->服务器的映射")])]),v._v(" "),_("li",[_("p",[v._v("PTR记录（pointer record）：IP->域名的映射")])])]),v._v(" "),_("p",[v._v("DNS系统本身是具备简单负载分配能力的，这是基于DNS的轮询机制。如果有多台Web服务器（多源）同时为站点abc.com提供服务，abc.com的权威服务器可能会解析出一个或多个IP地址。权威域名服务器还可以调整响应中IP地址的排列方式，即在每次响应中将不同的IP地址置于首位（取决于可服务能力和服务质量），通过这种方式实现对这些Web服务器的负载均衡")]),v._v(" "),_("p",[v._v("通过CNAME方式实现负载均衡：域名服务器获得CNAME记录后，就会用记录中的别名来替换查找的域名或主机名（实现多个域名->服务器映射）。后面会查询这个别名的A记录来获取相应的IP地址。")]),v._v(" "),_("p",[v._v("具体操作为：先将GSLB的主机名定义为所查询域名的权威DNS服务器的别名，然后将GSLB主机名添加多条A记录，分别对应多个服务器的IP地址。这样，本地DNS服务器会向客户端返回多个IP地址作为域名的查询结果，并且这些IP地址的排列顺序是轮换的。客户端一般会选择首个IP地址进行访问")]),v._v(" "),_("p",[v._v("负载均衡器作为权威DNS服务器：负载均衡器就会接收所有对这个域名的DNS请求，从而能够根据预先设置的一些策略来提供对域名的智能DNS解析。F5的3DNS具有完整的DNS功能以及增强的GSLB特性，Foundry、Nortel、Cisco和Radware的产品能实现部分DNS功能")]),v._v(" "),_("p",[v._v("负载均衡作为代理DNS服务器：负载均衡器被注册为一个域名空间的权威DNS服务器，而真正的权威域名服务器则部署在负载均衡器后面。所有的DNS请求都会先到达负载均衡器，由负载均衡器转发到真正的权威DNS服务器，然后修改权威DNS服务器返回的响应信息。真正的权威DNS服务器正常响应浏览器的DNS请求，返回域名解析结果列表，这个响应会先发送到负载均衡器，而负载均衡器会根据自己的策略选择一个性能最好的服务器IP并修改需要实现GSLB的域名的DNS查询响应，对其他请求透明转发，这样就不会影响整个域名空间的解析性能。")]),v._v(" "),_("p",[v._v("在基于DNS方式下无论采用何种工作方式，都会有一些请求不会到达GSLB，这是DNS系统本身的缓存机制在起作用。当用户请求的域名在本地DNS或本机（客户端浏览器）得到了解析结果，这些请求就不会达到GSLB。Cache更新时间越短，用户请求达到GSLB的几率越大。由于DNS的缓存机制屏蔽掉相当一部分用户请求，从而大大减轻了GSLB处理压力，使得系统抗流量冲击能力显著提升，这也是很多商业CDN选择DNS机制做全局负载均衡的原因之一。但弊端在于，如果在DNS缓存刷新间隔之内系统发生影响用户服务的变化，比如某个节点故障，某个链路拥塞等，用户依然会被调度到故障部位去")]),v._v(" "),_("h3",{attrs:{id:"智能dns功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#智能dns功能"}},[v._v("#")]),v._v(" 智能DNS功能")]),v._v(" "),_("p",[_("strong",[v._v("智能DNS功能")]),v._v("，它在向本地DNS返回应答之前会先根据一些静态或动态策略进行智能计算。")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("服务器的“健康状况”")])]),v._v(" "),_("li",[_("p",[v._v("地理区域距离")])]),v._v(" "),_("li",[_("p",[v._v("会话保持")])]),v._v(" "),_("li",[_("p",[v._v("响应时间")])]),v._v(" "),_("li",[_("p",[v._v("IP地址权重")])]),v._v(" "),_("li",[_("p",[v._v("会话能力阈值")])]),v._v(" "),_("li",[_("p",[v._v("往返时间（TTL）")])]),v._v(" "),_("li",[_("p",[v._v("其他信息，包括服务器当前可用会话数、最少选择次数、轮询等")])])]),v._v(" "),_("p",[v._v("关于GSLB的部署问题")]),v._v(" "),_("p",[v._v("关于内容的缓存问题（如何智能调度最有效）和配置")]),v._v(" "),_("p",[v._v("在有些CDN中（用于视频网站加速的情况较多），网站需要加速的内容全部先缓存在OCS（内容中心），然后再将一部分（通常是热门的内容）分发到个POP节点（Cache边缘集群），所以POP节点在某些时候会出现本地不命中而需要回OCS取内容或者从其他POP节点取内容的情况")]),v._v(" "),_("p",[v._v("纯粹基于DNS方式的GSLB只能完成就近性判断。为实现智能调度，大多数解决方案需要在GSLB设备附近以旁路的方式部署一台辅助设备（为方便描述，我们可称之为GRM——全局资源管理设备），用以实现和各POP节点的本地资源管理设备进行通信，完成CDN对各POP节点的状态检查，并根据POP节点的状态和流量情况，重新制订用户调度策略，将策略实时发送到GSLB中去执行")]),v._v(" "),_("p",[v._v("因为DNS服务采用以UDP为基础的、默认无连接的访问方式，给分布式攻击（DDoS）带来了更大的便利。")]),v._v(" "),_("p",[v._v("隐藏节点的存在很大程度上可以避免GSLB被攻击致瘫痪的机会，实际隐藏节点的实现方法就是在实际组网时除了部署正常工作的GSLB以外，再部署一台备份的GSLB设备，并将这一备份GSLB设备隐藏起来，不对外公布。")]),v._v(" "),_("p",[v._v("HTTP重定向（CDN GSLB用302重定向）：在HTTP协议中，有三类重定向状态吗：301永久性转移（permanently moved）、302暂时转移（temporarily moved）、meta fresh在特定时间后重定向到新的网页")]),v._v(" "),_("p",[v._v("HTTP重定向只适用于HTTP应用，不适用于任何其他应用。比如微软的MMS协议，RTSP协议，就不能使用这种方式进行重定向。其次，由于HTTP重定向过程需要额外解析域名URL，还需要与URL建立TCP连接并且发送HTTP请求，使得响应时间加长。第三，不同于DNS方式，没有任何用户请求能被外部系统终结（不能缓存），所有请求都必须进入GSLB系统，这将成为性能和可靠性的瓶颈。（流媒体用的比较多）")]),v._v(" "),_("p",[v._v("基于IP路由的GSLB")]),v._v(" "),_("p",[v._v("基于路由协议算法选择一条路由到达这两个本地均衡器中的一个。因为每次访问请求的终端IP地址不同，路由条件也不同，所以在多个路由器上优选的路由不同，从统计复用的角度来看基本是在负载均衡器1和2之间均匀分布的。")]),v._v(" "),_("p",[v._v("IP路由在多个POP点之间实现的负载均衡是一种概率上的均衡，而不是真正的均衡（没做智能调度）。")]),v._v(" "),_("p",[v._v("比较项")]),v._v(" "),_("p",[v._v("基于DNS解析方式")]),v._v(" "),_("p",[v._v("基于HTTP重定向方式")]),v._v(" "),_("p",[v._v("基于IP路由方式")]),v._v(" "),_("p",[v._v("性能")]),v._v(" "),_("p",[v._v("本地DNS服务器和用户终端DNS缓存能力使GSLB的负载得到有效分担")]),v._v(" "),_("p",[v._v("GSLB处理压力大，容易成为系统性能的瓶颈")]),v._v(" "),_("p",[v._v("借助IP网络设备完成负载均衡，没有单点性能瓶颈")]),v._v(" "),_("p",[v._v("准确度")]),v._v(" "),_("p",[v._v("定位准确度取决于本地DNS覆盖范围，本地DNS设置错误会造成定位不准确")]),v._v(" "),_("p",[v._v("在对用户IP地址数据进行有效维护的前提下，定位准确且精度高")]),v._v(" "),_("p",[v._v("就近性调度准确，但对设备健康性等动态信息响应会有延迟")]),v._v(" "),_("p",[v._v("效率")]),v._v(" "),_("p",[v._v("效率约等于DNS系统本身处理效率")]),v._v(" "),_("p",[v._v("依靠服务器做处理，对硬件资源的要求高")]),v._v(" "),_("p",[v._v("效率约等于IP设备本身效率")]),v._v(" "),_("p",[v._v("扩展性")]),v._v(" "),_("p",[v._v("扩展性和通用性好")]),v._v(" "),_("p",[v._v("扩展性较差，需对各种应用协议进行定制开发")]),v._v(" "),_("p",[v._v("通用性好，但适用范围有限")]),v._v(" "),_("p",[v._v("商用性")]),v._v(" "),_("p",[v._v("在Web加速领域使用较多")]),v._v(" "),_("p",[v._v("国内流媒体CDN应用较多")]),v._v(" "),_("p",[v._v("尚无商用案例")]),v._v(" "),_("h2",{attrs:{id:"第六章-流媒体cdn系统的组成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第六章-流媒体cdn系统的组成"}},[v._v("#")]),v._v(" 第六章 流媒体CDN系统的组成")]),v._v(" "),_("p",[v._v("流媒体业务是一种对实时性、连续性、时序性要求非常高的业务，无论从带宽消耗上还是质量保障上来说，对best-effort的IP网络都是一个不小的冲击")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("高带宽要求")])]),v._v(" "),_("li",[_("p",[v._v("高QoS要求")])]),v._v(" "),_("li",[_("p",[v._v("组播、广播要求（目前IP网络无法实现端到端的组播业务）")])])]),v._v(" "),_("p",[v._v("播放一个视频分为以下四个步骤")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Access")])]),v._v(" "),_("li",[_("p",[v._v("Demux（音视频分离）")])]),v._v(" "),_("li",[_("p",[v._v("Decode（解码解压缩）")])]),v._v(" "),_("li",[_("p",[v._v("Output")])])]),v._v(" "),_("p",[v._v("RTP、RTCP、RTSP、RTMP的关系：RTSP协议用来实现远程播放控制，RTP用来提供时间信息和实现流同步，RTCP协助RTP完成传输质量控制<=（播放控制），")]),v._v(" "),_("p",[v._v("=>（传输控制）RTMP和HTTP streaming则是将流同步、播放控制、质量控制集成起来的企业自有流媒体传送协议")]),v._v(" "),_("p",[v._v("RTMP是adobe的传输协议。RTMP的基本通信单元：消息块（chunk）和消息（message）")]),v._v(" "),_("p",[v._v("RTMP协议架构在TCP层之上，但RTMP消息并不是直接封装在TCP中，而是通过一个被称为消息块的封装单元进行传输。消息在网络上发送之前往往需要分割成多个较小的部分，这样较小的部分就是消息块，属于不同消息流的消息块可以在网络上交叉发送。")]),v._v(" "),_("p",[v._v("RTSP/RTP和HTTP streaming是目前应用最广泛的流化协议，目前电信运营商在IPTV（特殊通道的基于IP的流媒体播放）的流化上主要以RTSP/RTP技术为主，而互联网视频网站（点播/直播）则多倾向于使用HTTP streaming的流化技术。")]),v._v(" "),_("p",[v._v("HTTP streaming前身是progressive download（渐进式下载：边下载边播放，直到下载完）。HTTP streaming首先会将视频数据（包括直播的视频流和点播的视频文件）在服务器上进行编码，然后将编码后的数据进行更细粒度的分片，再把每个分片通过HTTP协议传输到客户端。HTTP streaming的客户端需要对视频文件的每个分片都发出一个HTTP请求，这样，在视频播放速度低于下载速度的情况下，客户端可以灵活控制HTTP请求的发出速度，从而保证用户在中途退出时不会出现下载浪费。另外，因为采用分片的特点，HTTP streaming还可以实现媒体播放过程中的码率切换（码率自适应），结合网络带宽资源，为用户提供更好的体验。")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("HTTP streaming\n\nProgressive download\n\n支持点播、直播\n\n仅支持点播\n\n可对分片文件加密，保证数字版权\n\n直接把媒体文件分割成多个小文件分片，无法保障版权所有\n\n因为分片传输，故支持码率自适应\n\n只支持固定码率\n\nHTTP streaming\n\nRTSP/RTP\n\n基于TCP，更高可靠性，也可以直接利用TCP的流控机制来适应带宽的变化\n\n基于UDP\n\n可将播放过的内容保存在客户端\n\n不能保存在客户端\n\n使用80端口，能穿越防火墙\n\n使用特殊端口\n\n采用标准的HTTP协议来传输，只需要标准的HTTP服务器支撑\n\n需要特殊的流媒体服务器\n")])])]),_("h3",{attrs:{id:"http-streaming的几个主流阵营"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-streaming的几个主流阵营"}},[v._v("#")]),v._v(" HTTP streaming的几个主流阵营：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("3GPP adaptive HTTP Streaming")])]),v._v(" "),_("li",[_("p",[v._v("Microsoft IIS Smooth Streaming")])]),v._v(" "),_("li",[_("p",[v._v("Adobe HTTP Dynamic Streaming (HDS)")])]),v._v(" "),_("li",[_("p",[v._v("Apple HTTP Live Streaming (HLS)")])])]),v._v(" "),_("blockquote",[_("p",[v._v("HLS流化技术主要分三个部分：服务器组件、分发组件和客户端软件")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("服务器组件主要负责从原始的音视频设备捕捉相应的音视频流，并对这些输入的媒体流进行编码，然后进行封装和分片，最后交付给分发组件来进行传送；")])]),v._v(" "),_("li",[_("p",[v._v("分发组件主要负责接收客户端发送的请求，然后将封装的流媒体分片文件连同相关的索引文件一起发送给客户端。对于没有采用CDN服务的源服务器，标准的Web服务器就是一个分发组件，而对于大型的视频网站或者类似的大规模应用平台，分发组件还应包括支持RTMP协议的CDN；")])]),v._v(" "),_("li",[_("p",[v._v("客户端软件负责确定应该请求的具体媒体流，下载相关资源，并在下载后通过拼接分片将流媒体重新展现给用户")])])]),v._v(" "),_("p",[v._v("HLS音视频流或流媒体文件在经过编码、封装和分片后，变成多个以.ts结尾的分片文件。流分割器产生的索引文件是以.M3U8为后缀的，用户可以直接通过Web访问来获取")]),v._v(" "),_("p",[v._v("分发组件负责将分片文件和索引文件通过HTTP的方式发送给客户端，无须对现有的Web服务器和Cache设备进行额外的扩展、配置和升级")]),v._v(" "),_("p",[v._v("客户端组件根据URL来获取这个视频的索引文件。索引文件包含了可提供分片文件的具体位置、解密密钥以及可用的替换流。")]),v._v(" "),_("p",[v._v("HDS，点播内容是通过一个简单的预编码生成MP4片段以及Manifest清单文件；直播的内容准备工作流程相对复杂一点，在播放的过程中生成MP4.（直播推荐用RTMP，使用FMS推流器）")]),v._v(" "),_("p",[v._v("MPEG-2 TS是指TS格式封装的、MPEG-2编码格式的媒体流。大多数IPTV系统使用这种内容源。H.264这一层完成原始文件的压缩编码，TS这一层负责音视频的复用以及同步，RTP这一层负责流的顺序传输，UDP这一层负责数据包的交付，IP层负责传输路由选择")]),v._v(" "),_("p",[v._v("流媒体加速的回源要求：因为流媒体文件传送带宽需求高，而且往往需要维持TCP长连接，所以一旦CDN回源比例过高，源站服务器I/O将不堪负荷。CDN对内容采取分发方式分为pull和push两种。Pull是被动下拉的方式，push是主动推送的方式。对于流媒体内容，系统一般会选择对热点内容采取push方式的预分发，而普通的网页内容几乎100%是pull方式的。")]),v._v(" "),_("p",[v._v("在流媒体CDN系统中，用户访问的调度会更多考虑内容命中，主要是因为流媒体内容文件体积大，业务质量要求高，如果从其他节点拉内容再向用户提供服务会带来额外的延迟，影响用户体验。为进一步提高命中率，流媒体CDN系统普遍采用了对热点内容实施预先push的内容分发策略")]),v._v(" "),_("p",[v._v("在流媒体服务系统中，主要关注的技术是对不同流媒体协议、不同编码格式、不同播放器、不同业务质量要求等的适应。")]),v._v(" "),_("p",[v._v("流媒体CDN与Web CDN的对比（业务差异）")]),v._v(" "),_("p",[_("strong",[v._v("主要差异点")])]),v._v(" "),_("p",[v._v("流媒体CDN")]),v._v(" "),_("p",[v._v("Web CDN")]),v._v(" "),_("p",[v._v("内容类型")]),v._v(" "),_("p",[v._v("大文件、实时流、QoS要求高")]),v._v(" "),_("p",[v._v("小文件、固定大小、QoS要求低")]),v._v(" "),_("p",[v._v("用户行为")]),v._v(" "),_("p",[v._v("拖曳、暂停等播放控制")]),v._v(" "),_("p",[v._v("下载后浏览")]),v._v(" "),_("p",[v._v("内容管理")]),v._v(" "),_("p",[v._v("内容冷热度差异明显（对命中率要求高），内容生命周期长")]),v._v(" "),_("p",[v._v("内容冷热度差异不明显，内容生命周期短")]),v._v(" "),_("p",[v._v("回源要求")]),v._v(" "),_("p",[v._v("回源比例小")]),v._v(" "),_("p",[v._v("回源比例大")]),v._v(" "),_("p",[v._v("现在已经投入商用的CDN系统，基本都是同时提供Web CDN能力和流媒体CDN能力的，而且这两种能力的实现在系统内部几乎都是互相隔离的，从调度系统到节点设备都没有交叉互用")]),v._v(" "),_("p",[v._v("流媒体CDN与Web CDN的设计差异（设计差异）")]),v._v(" "),_("p",[v._v("主要差异点")]),v._v(" "),_("p",[v._v("流媒体CDN")]),v._v(" "),_("p",[v._v("Web CDN")]),v._v(" "),_("p",[v._v("Cache")]),v._v(" "),_("p",[v._v("支持多种流化协议，硬件配置大存储、高I/O")]),v._v(" "),_("p",[v._v("支持多协议（HTTP、FTP等）硬件配置小存储、高性能CPU")]),v._v(" "),_("p",[v._v("负载均衡")]),v._v(" "),_("p",[v._v("DNS+HTTP重定向方式")]),v._v(" "),_("p",[v._v("DNS方式")]),v._v(" "),_("p",[v._v("内容分发方式")]),v._v(" "),_("p",[v._v("热片PUSH，冷片PULL")]),v._v(" "),_("p",[v._v("全PULL方式")]),v._v(" "),_("p",[v._v("组网")]),v._v(" "),_("p",[v._v("多级组网，可能要求组播、单播混合组网")]),v._v(" "),_("p",[v._v("两级组网")]),v._v(" "),_("p",[v._v("流媒体CDN的Cache设备与Web Cache无论在软件实现还是硬件要求上差异都很大，我们很少看到这两种业务共用同一台设备")]),v._v(" "),_("p",[v._v("当用户请求的内容在Cache上命中时，Cache直接向用户提供流服务，此时Cache设备充当流媒体服务器的角色；当用户请求内容未能在Cache上命中时，Cache会从上一级Cache（二级缓存设备或中间缓存设备）或者源站服务器获取内容，再提供给用户。Cache在用户与另一个流媒体服务器之间扮演代理的角色")]),v._v(" "),_("p",[v._v("分布式存储技术因其大容量、低成本的特点，目前也被业界关注和研究作为流媒体CDN系统的存储解决方案之一。常用的分布式存储技术包括分布式文件系统和分布式数据库，由于采用了数据副本冗余（每份数据复制2~3份）、磁盘冗余（Raid1、Raid10、Raid5）等技术，通常可以提供良好的数据容错机制，当单台存储设备断电或者单个存储磁盘失效时，整个存储系统仍能正常工作")]),v._v(" "),_("p",[v._v("负载均衡设备在进行用户访问调度时，会综合考虑很多静态的、动态的参数，包括IP就近性、连接保持、内容命中、响应速度、连接数等。但没有哪个CDN会考虑所有参数，而是会根据业务特点进行一些取舍，否则均衡系统就太复杂了。而流媒体CDN在进行用户访问调度时，会更多考虑内容命中这一参数")]),v._v(" "),_("p",[v._v("有两种GSLB实现方式，一种是基于DNS的，一种是基于应用层重定向的")]),v._v(" "),_("p",[v._v("PUSH方式适合内容访问比较集中的情况，如热点的影视流媒体内容，PULL方式比较适合内容访问分散的情况")]),v._v(" "),_("p",[v._v("对使用CDN服务的SP来说，CDN的作用在于尽量就近为用户提供服务，帮助SP解决长距离IP传输和跨域传输带来的种种业务质量问题（通过空间换取时间）。因此，为用户提供服务的Cache设备一定部署在离用户比较近的地方。另一方面，CDN的建设者从成本角度考虑，又不能把所有内容都存放在这些离用户最近的节点中，这会消耗大量存储成本，所以这些提供服务的Cache设备会根据需要从源站服务器或者其他Cache获取内容。这样就形成了CDN网络分层部署的概念。")]),v._v(" "),_("p",[v._v("从网络分层上看，Web CDN通常是两级架构（也有三级架构以减少回源），即中心-边缘。而流媒体CDN通常有三级以上架构，即中心-区域-边缘。产生这种区别的原因在于流媒体回源成本比较高，源站服务器响应一次流媒体内容回源请求，要比Web内容回源消耗更多资源。尤其对于流媒体直播业务来说，只要直播节目没结束，服务器就需要长时间持续吐流，如果没有第二层节点作为中继，那么中心节点的压力将是不可想象的。")]),v._v(" "),_("p",[v._v("分层部署的方式，对点播业务而言的主要意义是节省存储成本，对直播业务而言在于减少带宽成本。在点播业务中，边缘Cache只需存储用户访问量大的内容或者内容片断，其余内容存储在区域Cache中。")]),v._v(" "),_("p",[v._v("在直播业务中，边缘Cache从区域中心获取直播流，而不需要直接向中心节点（源站）获取，从而节省了区域中心到中心节点这一段的大部分带宽。因为直播流在各个Cache中都不需要占用很大的存储空间，只需少量缓存空间即可，所以直播业务方面并不用注重考虑存储成本")]),v._v(" "),_("p",[v._v("考虑到电信运营商的IP拓扑和流量模型，区域中心Cache通常部署在重点城市的城域网出口的位置，以保障向各个边缘Cache的链路通畅。边缘Cache的位置选择则以整个节点能够提供的并发能力为主要依据，依据业务并发数收敛比，计算出单个Cache需要覆盖的用户规模，从而选择一个合适的部署位置。当然，边缘Cache离用户越近，服务质量越好，但覆盖的用户数越少，部署成本越高。")]),v._v(" "),_("p",[v._v("内容文件预处理")]),v._v(" "),_("p",[v._v("是指视频内容进入CDN以后，进入内容分发流程之前，CDN系统对内容进行的一系列处理过程。这个预处理过程的目的有几个：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("为全网内容管理提供依据，比如对内容进行全网唯一标识，对内容基础信息进行记录等")])]),v._v(" "),_("li",[_("p",[v._v("为提高CDN服务效率或降低系统成本提供手段，比如内容切片")])]),v._v(" "),_("li",[_("p",[v._v("为满足业务要求提供能力，比如对同一内容进行多种码率的转换以满足动态带宽自适应或三屏互动业务要求")])])]),v._v(" "),_("p",[v._v("视频转码(video transcoding)")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("码率转换")])]),v._v(" "),_("li",[_("p",[v._v("空间分辨率转换")])]),v._v(" "),_("li",[_("p",[v._v("时间分辨率转换")])]),v._v(" "),_("li",[_("p",[v._v("编码格式转换。编码格式主要包括H.264、MPEG-4、MPEG-2、VC-1、REAL、H.263、WMV。通常是把其他编码格式转换成H.264")])])]),v._v(" "),_("p",[v._v("文件切片")]),v._v(" "),_("p",[v._v("是指按照一定的规则把一个完整的文件切成大小一致的若干个小文件；由于流媒体CDN需要提供的内容体积越来越大，传统整片存储带来的成本消耗超出了CDN服务商的承受范围；切片的另一个目的是，使边缘Cache能够支持自适应码率业务")]),v._v(" "),_("h4",{attrs:{id:"防盗链机制和实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#防盗链机制和实现"}},[v._v("#")]),v._v(" 防盗链机制和实现")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("基于IP的黑白名单")])]),v._v(" "),_("li",[_("p",[v._v("利用HTTP header的referer字段")])]),v._v(" "),_("li",[_("p",[v._v("使用动态密钥（随机生成的key通过算法生成新的url）")])]),v._v(" "),_("li",[_("p",[v._v("在内容中插入数据（对有版权内容进行加密（DRM），如Microsoft的playready，Google的Widevine）")])]),v._v(" "),_("li",[_("p",[v._v("打包下载：在原文件的基础上进一步封装，使得资源的hash 值改变")])])]),v._v(" "),_("p",[v._v("–")]),v._v(" "),_("h2",{attrs:{id:"第七章-动态内容加速服务的实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第七章-动态内容加速服务的实现"}},[v._v("#")]),v._v(" 第七章 动态内容加速服务的实现")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("随着Web2.0的兴起，产生了动态网页、个性化内容、电子交易数据等内容的加速，这些就涉及了动态内容加速技术。\n\n静态内容的加速，都是对于表现层的加速，对于动态页面等内容的加速，则要涉及逻辑层和数据访问层的加速技术\n\n动态内容的提供不仅仅是HTML页面的设计及编辑，它还需要有后台数据库、应用逻辑程序的支持，以实现与用户的动态交互。\n\nWeb系统由表现层、业务逻辑层、数据访问层+用户数据层\n\n表现层是Web系统与外部系统的交互界面，这一层通常由HTTP服务器组成，负责接收用户端的HTTP内容访问请求，从文件系统中读取静态文件\n\n业务逻辑层负责处理所有业务逻辑和动态内容的生成\n\n数据访问层位于系统的后端，负责管理Web系统的主要信息和数据存储，通常由数据库服务器和存储设备组成\n\n用户数据层负责存储用户信息数据和关联关系，内容来自用户提供和用户行为分析结果\n\nWeb网站借助CDN技术能够获得更好的扩展性和高性能，核心在于CDN采用的缓存（caching）和复制（replication）机制，其中缓存是将最近经常被访问的源服务器拥有的内容复制到边缘服务器上，可被视为具有特定策略的复制。\n\nCDN的复制机制是指将源Web系统逻辑架构的各个层次的相应功用复制到边缘服务器上实现，以缓解源系统的处理压力。\n")])])]),_("ul",[_("li",[_("p",[v._v("Web系统表现层的复制，就是静态内容的复制。边缘服务器又被称为代理服务器，通过反向代理加速静态文件的交付")])]),v._v(" "),_("li",[_("p",[v._v("Web系统业务逻辑层的复制。CDN被用于改进动态生成内容的交付性能。即将应用程序和业务组件直接在CDN的边缘服务器中计算，从而直接在靠近用户的地方生成动态Web内容")])]),v._v(" "),_("li",[_("p",[v._v("Akamai边缘计算部署模型，包括用户（使用浏览器）、企业J2EE应用系统（运行业务逻辑、原有系统、数据库等）、分布式网络服务器（Edge computing平台）运行支持J2EE应用编程模型的WebSphere或者Tomcat应用服务器")])]),v._v(" "),_("li",[_("p",[v._v("Web系统数据访问层复制。CDN边缘服务器能够具备生成动态内容和掌管内容生成数据的能力")])]),v._v(" "),_("li",[_("p",[v._v("利用边缘服务器代替源钻Web系统的后台数据访问层中的数据库系统，及时响应业务逻辑层提出的数据查询需求。")])]),v._v(" "),_("li",[_("p",[v._v("Web系统用户文件的复制。")]),v._v(" "),_("p",[v._v("（PS：暂时来说，网宿还没有实现真正意义的动态加速，虽然现在已经实现一部分，如搜索结果动态缓存，重用的动态页面智能缓存。其他更多的是通过智能管道来加快用户与源钻的访问效率）")]),v._v(" "),_("p",[v._v("（应用加速技术实际上是传统的网络负载均衡的升级和扩展，综合使用了负载均衡（智能调度）、TCP优化管理（TCP keep-alive connection，更激进的TCP窗口策略，基于HTTP1.1），链接管理（routing）、SSL VPN、压缩优化（代码压缩，图片压缩）、智能网络地址（NAT-公私网IP转换）、高级路由、智能端口镜像等技术。）")])])]),v._v(" "),_("h4",{attrs:{id:"tcp的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp的问题"}},[v._v("#")]),v._v(" TCP的问题")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("TCP窗口大小的限制（TCP窗口大小随传输成功而变大，而一旦发生传输失败，其窗口大小会立即缩小）")])]),v._v(" "),_("li",[_("p",[v._v("TCP协议慢启动（三握手）和拥塞控制")])])]),v._v(" "),_("h4",{attrs:{id:"广域网加速关键技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#广域网加速关键技术"}},[v._v("#")]),v._v(" 广域网加速关键技术")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("针对层次\n\n优化技术\n\n优化原理\n\n传输发起端\n\n原始数据优化\n\n通过压缩、重复数据删除和字典等技术，可节省绝大多数传输数据量，节约带宽，提高服务器性能\n\n数据缓存技术\n\n将类HTTP的业务、图片、文字等缓存在本地，只传输动态内容，减少带宽占用\n\n物理层（硬件）\n\n提升设备性能\n\n基于现有TCP/IP，通过硬件方式提高性能，提高大量TCP并发连接和会话重组等处理能力\n\n网络层（IP）\n\nQoS和流量控制\n\n通过协议识别，实现在同一端口中不同应用的真正区分，进而通过分流实现时延敏感应用的带宽保障\n")])])]),_("p",[_("strong",[v._v("传输层")]),v._v("（TCP）")]),v._v(" "),_("p",[_("strong",[v._v("代理设备")])]),v._v(" "),_("p",[v._v("在传输两端各架设代理设备，所有的响应报文都在本地完成，只有真正发起请求时才通过链路，相当于同时在服务器和客户端进行协议欺骗")]),v._v(" "),_("p",[_("strong",[v._v("TCP协议优化")])]),v._v(" "),_("p",[v._v("通过在广域网两端部署专用设备，在不影响基本传输情况下，通过各种手段对TCP窗口、响应、启动等机制进行改进，从而提高协议机制的效率")]),v._v(" "),_("h3",{attrs:{id:"应用层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[v._v("#")]),v._v(" 应用层")]),v._v(" "),_("h4",{attrs:{id:"应用代理-缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用代理-缓存"}},[v._v("#")]),v._v(" 应用代理（缓存）")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("将常用的应用程序缓存在本地并配置好，用户可不用在本地等待类似于认证等会话过程，而是直接开始下一个应用，实现流水作业\n\n数据碎片化，就是在应用层将数据分成一个个小的数据块，便于后续的数据比对使用。广域网加速设备在传输数据前会将缓存中的数据与数据切块进行对比，从而找出那些数据是重复数据，不再发送，哪些数据是新鲜的、需要传输的数据。\n\n数据压缩和指针技术一般是放在一起使用的，在对数据分段后，会对每一段数据生成一个数据指针，对于重复内容，只传输指针。在压缩算法设计上，要求同时兼顾数据压缩比和压缩/解压缩时间。\n")])])]),_("h4",{attrs:{id:"高速tcp传输技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高速tcp传输技术"}},[v._v("#")]),v._v(" 高速TCP传输技术")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("自适应拥塞窗口")])]),v._v(" "),_("li",[_("p",[v._v("有限制地快速重传")])]),v._v(" "),_("li",[_("p",[v._v("连接池：通过维护一个预先建立好的TCP连接池，当有数据传输需求时，从连接池中挑选一条可用连接今次那个传输。")])])]),v._v(" "),_("h4",{attrs:{id:"ssl加速技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssl加速技术"}},[v._v("#")]),v._v(" SSL加速技术")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("SSL加密是一种处理器密集型加密算法，如果用服务器软件处理会消耗大量CPU资源，一般会在提供业务能力的服务器外围部署专门的SSL加速设备，采用硬解密方式实现")])]),v._v(" "),_("li",[_("p",[v._v("SSL加密分对称秘钥和非对称秘钥（计算资源消耗更大）")])])]),v._v(" "),_("h4",{attrs:{id:"ssl的基本原理和实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssl的基本原理和实现"}},[v._v("#")]),v._v(" SSL的基本原理和实现")]),v._v(" "),_("p",[v._v("可认证性（authentication）")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("隐私性（privacy）")])]),v._v(" "),_("li",[_("p",[v._v("完整性（integrity）")])]),v._v(" "),_("li",[_("p",[v._v("不可抵赖性（undeniability）：发送者不能自称没有发出过接受者从他那里收到的内容")])])]),v._v(" "),_("h4",{attrs:{id:"ssl加速"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssl加速"}},[v._v("#")]),v._v(" SSL加速")]),v._v(" "),_("ul",[_("li",[v._v("通常是基于硬件的SSL加速")]),v._v(" "),_("li",[v._v("通过在服务器上安装一块SSL加速板卡，可有效分担服务器CPU处理SSL事务的压力")])])])}),[],!1,null,null,null);_.default=e.exports}}]);