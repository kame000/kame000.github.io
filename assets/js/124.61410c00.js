(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{529:function(v,_,a){"use strict";a.r(_);var t=a(2),s=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"集中式日志管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集中式日志管理"}},[v._v("#")]),v._v(" 集中式日志管理")]),v._v(" "),_("h2",{attrs:{id:"简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),_("blockquote",[_("p",[v._v("日常工作中会面临很多问题，处理问题时候。怎么解决问题？")])]),v._v(" "),_("ul",[_("li",[v._v("通过工作经验，迅速判断问题出在哪。")]),v._v(" "),_("li",[v._v("通过日志\n"),_("ul",[_("li",[v._v("系统日志：/var/log  目录下的问题的文件")]),v._v(" "),_("li",[v._v("程序日志：\n"),_("strong",[v._v("代码日志（项目代码输出的日志）")])])])]),v._v(" "),_("li",[v._v("服务应用日志\n"),_("ul",[_("li",[_("code",[v._v("nginx、HAproxy、lvs")])]),v._v(" "),_("li",[_("code",[v._v("tomcat、php-fpm")])]),v._v(" "),_("li",[_("code",[v._v("redis、mysql、mongo")])]),v._v(" "),_("li",[_("code",[v._v("RabbitMq、kafka")])]),v._v(" "),_("li",[_("code",[v._v("Glusterfs、HDFS、NFS")]),v._v("等等")])])])]),v._v(" "),_("p",[_("strong",[v._v("通过日志排除，发现问题根源解决问题")])]),v._v(" "),_("p",[v._v("如果1台或者几台服务器，我们可以通过 linux命令，"),_("code",[v._v("tail、cat，通过grep、awk等")]),v._v("过滤去查询定位日志查问题")]),v._v(" "),_("p",[v._v("但是如果几十台、甚至几百台。通过这种方式肯定不现实。")]),v._v(" "),_("p",[_("strong",[v._v("怎么办？")])]),v._v(" "),_("p",[v._v("一些聪明人就提出了建立一套集中式的方法，把不同来源的数据集中整合到一个地方。")]),v._v(" "),_("p",[v._v("一个完整的集中式日志系统，是离不开以下几个主要特点的。")]),v._v(" "),_("ul",[_("li",[v._v("收集－能够采集多种来源的日志数据")]),v._v(" "),_("li",[v._v("传输－能够稳定的把日志数据传输到中央系统")]),v._v(" "),_("li",[v._v("存储－如何存储日志数据")]),v._v(" "),_("li",[v._v("分析－可以支持 UI 分析")]),v._v(" "),_("li",[v._v("警告－能够提供错误报告，监控机制")])]),v._v(" "),_("h2",{attrs:{id:"市场上的产品"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#市场上的产品"}},[v._v("#")]),v._v(" 市场上的产品")]),v._v(" "),_("blockquote",[_("p",[v._v("基于上述思路，于是许多产品或方案就应运而生了")])]),v._v(" "),_("ul",[_("li",[v._v("简单的 "),_("code",[v._v("Rsyslog，Syslog-ng")])]),v._v(" "),_("li",[v._v("商业化的 Splunk")]),v._v(" "),_("li",[v._v("开源的\n"),_("ul",[_("li",[v._v("FaceBook 公司的 Scribe，")]),v._v(" "),_("li",[v._v("Apache 的 Chukwa，")]),v._v(" "),_("li",[v._v("Linkedin 的 Kafak，")]),v._v(" "),_("li",[v._v("Cloudera 的 Fluentd，")]),v._v(" "),_("li",[_("code",[v._v("ELK")])])])])]),v._v(" "),_("p",[_("code",[v._v("Splunk")]),v._v("是一款非常优秀的产品，但是它是商业产品，价格昂贵，让许多人望而却步.")]),v._v(" "),_("p",[v._v("本文重点介绍 ELK")]),v._v(" "),_("h2",{attrs:{id:"elk-协议栈介绍及体系结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#elk-协议栈介绍及体系结构"}},[v._v("#")]),v._v(" ELK 协议栈介绍及体系结构")]),v._v(" "),_("p",[_("code",[v._v("ELK")]),v._v("其实并不是一款软件，而是一整套解决方案，是三个软件产品的首字母缩写，"),_("code",[v._v("Elasticsearch")]),v._v("，"),_("code",[v._v("Logstash")]),v._v(" 和 "),_("code",[v._v("Kibana")]),v._v("。这三款软件都是开源软件，通常是配合使用，而且又先后归于 Elastic.co 公司名下，故被简称为"),_("code",[v._v("ELK")]),v._v("协议栈")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-09-063527.jpg",alt:""}})]),v._v(" "),_("h3",{attrs:{id:"elasticsearch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[v._v("#")]),v._v(" Elasticsearch")]),v._v(" "),_("p",[_("code",[v._v("Elasticsearch")]),v._v(" 是一个实时的分布式搜索和分析引擎，它可以用于全文搜索，结构化搜索以及分析。它是一个建立在全文搜索引擎 "),_("code",[v._v("Apache Lucene")]),v._v("基础上的搜索引擎，使用"),_("code",[v._v("Java")]),v._v("语言编写")]),v._v(" "),_("p",[_("strong",[v._v("主要特点")])]),v._v(" "),_("ul",[_("li",[v._v("实时分析")]),v._v(" "),_("li",[v._v("分布式实时文件存储，并将每一个字段都编入索引")]),v._v(" "),_("li",[v._v("文档导向，所有的对象全部是文档")]),v._v(" "),_("li",[v._v("高可用性，易扩展，支持集群（Cluster）、分片和复制（Shards 和 Replicas）。见图 2 和图 3")]),v._v(" "),_("li",[v._v("接口友好，支持 JSON")])]),v._v(" "),_("p",[_("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-09-063746.jpg",alt:"图2"}})]),v._v(" "),_("p",[_("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-09-063759.jpg",alt:""}})]),v._v(" "),_("h3",{attrs:{id:"logstash"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#logstash"}},[v._v("#")]),v._v(" Logstash")]),v._v(" "),_("p",[_("code",[v._v("Logstash")]),v._v(" 是一个具有实时渠道能力的数据收集引擎。使用 JRuby 语言编写。其作者是世界著名的运维工程师乔丹西塞 (JordanSissel)")]),v._v(" "),_("p",[_("strong",[v._v("主要特点")])]),v._v(" "),_("ul",[_("li",[v._v("几乎可以访问任何数据")]),v._v(" "),_("li",[v._v("可以和多种外部应用结合")]),v._v(" "),_("li",[v._v("支持弹性扩展")])]),v._v(" "),_("p",[_("em",[_("strong",[v._v("它由三个主要部分组成")])]),v._v("，见图 4：")]),v._v(" "),_("ul",[_("li",[v._v("Shipper－发送日志数据")]),v._v(" "),_("li",[v._v("Broker－收集数据，缺省内置 Redis")]),v._v(" "),_("li",[v._v("Indexer－数据写入")])]),v._v(" "),_("p",[_("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-09-063933.jpg",alt:""}})]),v._v(" "),_("h3",{attrs:{id:"kibana"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kibana"}},[v._v("#")]),v._v(" Kibana")]),v._v(" "),_("p",[_("code",[v._v("Kibana")]),v._v("是一款基于 "),_("code",[v._v("Apache")]),v._v("开源协议，使用 "),_("code",[v._v("JavaScript")]),v._v("语言编写，为 "),_("code",[v._v("Elasticsearch")]),v._v("提供分析和可视化的 Web 平台。它可以在"),_("code",[v._v("Elasticsearch")]),v._v("的索引中查找，交互数据，并生成各种维度的表图.")]),v._v(" "),_("h3",{attrs:{id:"filebeat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#filebeat"}},[v._v("#")]),v._v(" Filebeat")]),v._v(" "),_("p",[_("code",[v._v("ELK")]),v._v(" 协议栈的新成员，一个轻量级开源日志文件数据搜集器，基于 "),_("code",[v._v("Logstash-Forwarder")]),v._v("源代码开发，是对它的替代。在需要采集日志数据的 "),_("code",[v._v("server")]),v._v(" 上安装"),_("code",[v._v("Filebea")]),v._v("t，并指定日志目录或日志文件后，"),_("code",[v._v("Filebeat")]),v._v("就能读取数据，迅速发送到"),_("code",[v._v("Logstash")]),v._v("进行解析，亦或直接发送到 "),_("code",[v._v("Elasticsearch")]),v._v("进行集中式存储和分析。")]),v._v(" "),_("h2",{attrs:{id:"elk-协议栈体系结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#elk-协议栈体系结构"}},[v._v("#")]),v._v(" ELK 协议栈体系结构")]),v._v(" "),_("h3",{attrs:{id:"elk-常用架构及使用场景介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#elk-常用架构及使用场景介绍"}},[v._v("#")]),v._v(" ELK 常用架构及使用场景介绍")]),v._v(" "),_("h3",{attrs:{id:"最简单架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最简单架构"}},[v._v("#")]),v._v(" 最简单架构")]),v._v(" "),_("blockquote",[_("p",[v._v("在这种架构中，只有一个 Logstash、Elasticsearch 和 Kibana 实例。Logstash 通过输入插件从多种数据源（比如日志文件、标准输入 Stdin 等）获取数据，再经过滤插件加工数据，然后经 Elasticsearch 输出插件输出到 Elasticsearch，通过 Kibana 展示")])]),v._v(" "),_("p",[_("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-09-090709.jpg",alt:""}})]),v._v(" "),_("h3",{attrs:{id:"logstash-作为日志搜集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#logstash-作为日志搜集器"}},[v._v("#")]),v._v(" Logstash 作为日志搜集器")]),v._v(" "),_("p",[v._v("这种架构是对上面架构的扩展，把一个 Logstash 数据搜集节点扩展到多个，分布于多台机器，将解析好的数据发送到 Elasticsearch server 进行存储，最后在 Kibana 查询、生成日志报表等")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-09-091956.jpg",alt:""}})]),v._v(" "),_("p",[v._v("这种结构因为需要在各个服务器上部署 Logstash，而它比较消耗 CPU 和内存资源，所以比较适合计算资源丰富的服务器，否则容易造成服务器性能下降，甚至可能导致无法正常工作。")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://doc.yonyoucloud.com/doc/logstash-best-practice-cn/get_start/index.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("logstash 最佳实践"),_("OutboundLink")],1)]),v._v(" "),_("h3",{attrs:{id:"beats-作为日志搜集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#beats-作为日志搜集器"}},[v._v("#")]),v._v(" Beats 作为日志搜集器")]),v._v(" "),_("p",[v._v("这种架构引入 "),_("code",[v._v("Beats")]),v._v(" 作为日志搜集器。目前 "),_("code",[v._v("Beats")]),v._v("包括四种：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("Packetbeat")]),v._v("（搜集网络流量数据）；")]),v._v(" "),_("li",[_("code",[v._v("Topbeat")]),v._v("（搜集系统、进程和文件系统级别的 CPU 和内存使用情况等数据）；")]),v._v(" "),_("li",[_("code",[v._v("Filebeat")]),v._v("（搜集文件数据）；")]),v._v(" "),_("li",[_("code",[v._v("Winlogbeat")]),v._v("（搜集 Windows 事件日志数据）。")])]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("Beats")]),v._v(" 将搜集到的数据发送到 "),_("code",[v._v("Logstash")]),v._v("，经 "),_("code",[v._v("Logstash")]),v._v(" 解析、过滤后，将其发送到 "),_("code",[v._v("Elasticsearch")]),v._v("存储，并由 "),_("code",[v._v("Kibana")]),v._v(" 呈现给用户。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-09-092331.jpg",alt:""}})]),v._v(" "),_("p",[v._v("这种架构解决了 "),_("code",[v._v("Logstash")]),v._v(" 在各服务器节点上占用系统资源高的问题。相比 "),_("code",[v._v("Logstash，Beats")]),v._v(" 所占系统的 "),_("code",[v._v("CPU")]),v._v(" 和内存几乎可以忽略不计。另外，"),_("code",[v._v("Beats")]),v._v(" 和 "),_("code",[v._v("Logstash")]),v._v(" 之间支持 "),_("code",[v._v("SSL/TLS")]),v._v(" 加密传输，客户端和服务器双向认证，保证了通信安全。")]),v._v(" "),_("p",[v._v("因此这种架构适合对数据安全性要求较高，同时各服务器性能比较敏感的场景。")]),v._v(" "),_("h4",{attrs:{id:"基于-filebeat-架构的配置部署详解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基于-filebeat-架构的配置部署详解"}},[v._v("#")]),v._v(" 基于 Filebeat 架构的配置部署详解")]),v._v(" "),_("p",[v._v("前面提到 Filebeat 已经完全替代了 Logstash-Forwarder 成为新一代的日志采集器，同时鉴于它轻量、安全等特点，越来越多人开始使用它。这个章节将详细讲解如何部署基于 Filebeat 的 ELK 集中式日志解决方案，具体架构见图 5。")]),v._v(" "),_("p",[v._v("图 5. 基于 Filebeat 的 ELK 集群架构")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-09-093209.jpg",alt:""}})]),v._v(" "),_("h4",{attrs:{id:"引入消息队列机制的架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#引入消息队列机制的架构"}},[v._v("#")]),v._v(" 引入消息队列机制的架构")]),v._v(" "),_("p",[v._v("Beats 还不支持输出到消息队列，所以在消息队列前后两端只能是 Logstash 实例。这种架构使用 Logstash 从各个数据源搜集数据，然后经消息队列输出插件输出到消息队列中。目前 Logstash 支持 Kafka、Redis、RabbitMQ 等常见消息队列。然后 Logstash 通过消息队列输入插件从队列中获取数据，分析过滤后经输出插件发送到 Elasticsearch，最后通过 Kibana 展示。详见图 4。")]),v._v(" "),_("p",[_("strong",[v._v("图 4. 引入消息队列机制的架构")]),v._v(" "),_("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-07-09-092714.jpg",alt:""}})]),v._v(" "),_("blockquote",[_("p",[v._v("这种架构适合于日志规模比较庞大的情况。但由于 "),_("code",[v._v("Logstash")]),v._v(" 日志解析节点和 "),_("code",[v._v("Elasticsearch")]),v._v(" 的负荷比较重，可将他们配置为集群模式，以分担负荷。引入消息队列，均衡了网络传输，从而降低了网络闭塞，尤其是丢失数据的可能性，但依然存在 "),_("code",[v._v("Logstash")]),v._v(" 占用系统资源过多的问题。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);