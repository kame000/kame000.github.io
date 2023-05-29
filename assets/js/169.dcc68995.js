(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{571:function(t,_,v){"use strict";v.r(_);var a=v(2),r=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_1-什么是消息队列"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是消息队列"}},[t._v("#")]),t._v(" "),_("strong",[t._v("1.什么是消息队列？")])]),t._v(" "),_("p",[t._v("首先，我们来看看什么是消息队列，维基百科里的解释翻译过来如下：")]),t._v(" "),_("blockquote",[_("p",[t._v("队列提供了一种异步通信协议，这意味着消息的发送者和接收者不需要同时与消息保持联系，发送者发送的消息会存储在队列中，直到接收者拿到它。")])]),t._v(" "),_("p",[t._v("一般我们把消息的发送者称为"),_("strong",[t._v("生产者")]),t._v("，消息的接收者称为"),_("strong",[t._v("消费者")]),t._v("；注意定义中的那两个字“异步”，通常生产者的生产速度和消费者的消费速度是不相等的；如果两个程序始终保持同步沟通，那势必会有一方存在空等时间；如果两个程序一持续运行的话，消费者的平均速度一定要大于生产者，不然队列囤积会越来越多；当然，如果消费者没有时效性需求的话，也可以把消息囤积在队列中，集中消费。")]),t._v(" "),_("h2",{attrs:{id:"_2-why-消息队列-消息队列的应用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-why-消息队列-消息队列的应用场景"}},[t._v("#")]),t._v(" "),_("strong",[t._v("2.why 消息队列---消息队列的应用场景")])]),t._v(" "),_("h3",{attrs:{id:"为何使用消息系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为何使用消息系统"}},[t._v("#")]),t._v(" 为何使用消息系统")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("解耦")])]),t._v(" "),_("p",[t._v("​\t\t在项目启动之初来预测将来项目会碰到什么需求，是极其困难的。消息系统在处理过程中间插入了一个隐含的、基于数据的接口层，两边的处理过程都要实现这一接口。这允许你独立的扩展或修改两边的处理过程，只要确保它们遵守同样的接口约束。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("冗余")])]),t._v(" "),_("p",[t._v('​\t\t\t有些情况下，处理数据的过程会失败。除非数据被持久化，否则将造成丢失。消息队列把数据进行持久化直到它们已经被完全处理，通过这一方式规避了数据丢失风险。许多消息队列所采用的 " 插入 - 获取 - 删除 " 范式中，在把一个消息从队列中删除之前，需要你的处理系统明确的指出该消息已经被处理完毕，从而确保你的数据被安全的保存直到你使用完毕。')])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("扩展性")])]),t._v(" "),_("p",[t._v("​\t\t\t因为消息队列解耦了你的处理过程，所以增大消息入队和处理的频率是很容易的，只要另外增加处理过程即可。不需要改变代码、不需要调节参数。扩展就像调大电力按钮一样简单。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("灵活性 & 峰值处理能力")])]),t._v(" "),_("p",[t._v("​\t\t\t在访问量剧增的情况下，应用仍然需要继续发挥作用，但是这样的突发流量并不常见；如果为以能处理这类峰值访问为标准来投入资源随时待命无疑是巨大的浪费。使用消息队列能够使关键组件顶住突发的访问压力，而不会因为突发的超负荷的请求而完全崩溃。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("可恢复性")])]),t._v(" "),_("p",[t._v("​\t\t\t系统的一部分组件失效时，不会影响到整个系统。消息队列降低了进程间的耦合度，所以即使一个处理消息的进程挂掉，加入队列中的消息仍然可以在系统恢复后被处理。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("顺序保证")])]),t._v(" "),_("p",[t._v("​\t\t在大多使用场景下，数据处理的顺序都很重要。大部分消息队列本来就是排序的，并且能保证数据会按照特定的顺序来处理。Kafka 保证一个 Partition 内的消息的有序性。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("缓冲")])]),t._v(" "),_("p",[t._v("​\t\t在任何重要的系统中，都会有需要不同的处理时间的元素。例如，加载一张图片比应用过滤器花费更少的时间。消息队列通过一个缓冲层来帮助任务最高效率的执行———写入队列的处理会尽可能的快速。该缓冲有助于控制和优化数据流经过系统的速度。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("异步通信")])]),t._v(" "),_("p",[t._v("​\t\t很多时候，用户不想也不需要立即处理消息。消息队列提供了异步处理机制，允许用户把一个消息放入队列，但并不立即处理它。想向队列中放入多少消息就放多少，然后在需要的时候再去处理它们。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("削峰")])]),t._v(" "),_("p",[t._v("​\t\t通过在应用前端以消息队列接收请求来达到削峰的目的。请求超过队列长度直接不处理重定向至错误页面。")])])]),t._v(" "),_("p",[_("strong",[t._v("流量削锋")]),t._v("也是消息队列中的常用场景，一般在秒杀或团抢活动中使用广泛")]),t._v(" "),_("p",[t._v("应用场景：秒杀活动，一般会因为流量过大，导致流量暴增，应用挂掉。为解决这个问题，一般需要在应用前端加入消息队列。")]),t._v(" "),_("h2",{attrs:{id:"消息队列在秒杀活动中的应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息队列在秒杀活动中的应用"}},[t._v("#")]),t._v(" 消息队列在秒杀活动中的应用：")]),t._v(" "),_("ol",[_("li",[t._v("可以控制活动的人数")]),t._v(" "),_("li",[t._v("可以缓解短时间内高流量压垮应用")]),t._v(" "),_("li",[t._v("用户的请求，服务器接收后，首先写入消息队列。假如消息队列长度超过最大数量，则直接抛弃\t\t用户请求或跳转到错误页面")]),t._v(" "),_("li",[t._v("秒杀业务根据消息队列中的请求信息，再做后续处理")])]),t._v(" "),_("ul",[_("li",[t._v("提速：消息队列应用下，消息生产应用只管生产，不需要等待消费完就能处理其他事情。实际上起到了提速的作用。")])]),t._v(" "),_("h3",{attrs:{id:"_3-常用-message-queue-对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用-message-queue-对比"}},[t._v("#")]),t._v(" 3. 常用 Message Queue 对比")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("RabbitMQ")])]),t._v(" "),_("p",[t._v("RabbitMQ 是使用 Erlang 编写的一个开源的消息队列，本身支持很多的协议：AMQP，XMPP, SMTP, STOMP，也正因如此，它非常重量级，更适合于企业级的开发。同时实现了 Broker 构架，这意味着消息在发送给客户端时先在中心队列排队。对路由，负载均衡或者数据持久化都有很好的支持。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Redis")])]),t._v(" "),_("p",[t._v("Redis 是一个基于 Key-Value 对的 NoSQL 数据库，开发维护很活跃。虽然它是一个 Key-Value 数据库存储系统，但它本身支持 MQ 功能，所以完全可以当做一个轻量级的队列服务来使用。对于 RabbitMQ 和 Redis 的入队和出队操作，各执行 100 万次，每 10 万次记录一次执行时间。测试数据分为 128Bytes、512Bytes、1K 和 10K 四个不同大小的数据。实验表明：入队时，当数据比较小时 Redis 的性能要高于 RabbitMQ，而如果数据大小超过了 10K，Redis 则慢的无法忍受；出队时，无论数据大小，Redis 都表现出非常好的性能，而 RabbitMQ 的出队性能则远低于 Redis。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ZeroMQ")])]),t._v(" "),_("p",[t._v("ZeroMQ 号称最快的消息队列系统，尤其针对大吞吐量的需求场景。ZeroMQ 能够实现 RabbitMQ 不擅长的高级 / 复杂的队列，但是开发人员需要自己组合多种技术框架，技术上的复杂度是对这 MQ 能够应用成功的挑战。ZeroMQ 具有一个独特的非中间件的模式，你不需要安装和运行一个消息服务器或中间件，因为你的应用程序将扮演这个服务器角色。你只需要简单的引用 ZeroMQ 程序库，可以使用 NuGet 安装，然后你就可以愉快的在应用程序之间发送消息了。但是 ZeroMQ 仅提供非持久性的队列，也就是说如果宕机，数据将会丢失。其中，Twitter 的 Storm 0.9.0 以前的版本中默认使用 ZeroMQ 作为数据流的传输（Storm 从 0.9 版本开始同时支持 ZeroMQ 和 Netty 作为传输模块）。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ActiveMQ")])]),t._v(" "),_("p",[t._v("ActiveMQ 是 Apache 下的一个子项目。 类似于 ZeroMQ，它能够以代理人和点对点的技术实现队列。同时类似于 RabbitMQ，它少量代码就可以高效地实现高级应用场景。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Kafka/Jafka")])]),t._v(" "),_("p",[t._v("Kafka 是 Apache 下的一个子项目，是一个高性能跨语言分布式发布 / 订阅消息队列系统，而 Jafka 是在 Kafka 之上孵化而来的，即 Kafka 的一个升级版。具有以下特性：快速持久化，可以在 O(1) 的系统开销下进行消息持久化；高吞吐，在一台普通的服务器上既可以达到 10W/s 的吞吐速率；完全的分布式系统，Broker、Producer、Consumer 都原生自动支持分布式，自动实现负载均衡；支持 Hadoop 数据并行加载，对于像 Hadoop 的一样的日志数据和离线分析系统，但又要求实时处理的限制，这是一个可行的解决方案。Kafka 通过 Hadoop 的并行加载机制统一了在线和离线的消息处理。Apache Kafka 相对于 ActiveMQ 是一个非常轻量级的消息系统，除了性能非常好之外，还是一个工作良好的分布式系统。")])])])])}),[],!1,null,null,null);_.default=r.exports}}]);