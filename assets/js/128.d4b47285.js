(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{533:function(a,r,t){"use strict";t.r(r);var s=t(2),i=Object(s.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"elasticsearch-水平扩容过程与容错机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-水平扩容过程与容错机制"}},[a._v("#")]),a._v(" Elasticsearch 水平扩容过程与容错机制")]),a._v(" "),r("h3",{attrs:{id:"水平扩容过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#水平扩容过程"}},[a._v("#")]),a._v(" 水平扩容过程")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("扩容后 "),r("code",[a._v("primary shard")]),a._v("和 "),r("code",[a._v("replica shard")]),a._v(" 会自动的负载均衡。")])]),a._v(" "),r("li",[r("p",[a._v("扩容后每一个节点上的 "),r("code",[a._v("shard")]),a._v(" 会减少，那么分配给每个 "),r("code",[a._v("shard")]),a._v("的CPU、内存、IO资源会更多，性能将会提高。\n"),r("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-09-25-092717.jpg",alt:""}})])]),a._v(" "),r("li",[r("p",[a._v("扩容的极限，如果有6个 shard，扩容的极限就是6个节点，每个节点上一个 shard，如果想超出扩容的极限，比如说扩容到9个节点，那么可以增加 "),r("code",[a._v("replica shard")]),a._v("的个数.")])])]),a._v(" "),r("p",[r("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-09-25-092757.jpg",alt:""}})]),a._v(" "),r("ul",[r("li",[a._v("6个 shard，3个节点，最多能承受几个节点所在的服务器宕机？（容错性）任何一台服务器宕机都会丢失部分数据。为了提高容错性，增加 shard 的个数：9个 shard（3个 primary shard ，6个 replica shard ），这样就可以容忍最多两台服务器宕机。")])]),a._v(" "),r("p",[r("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-09-25-092823.jpg",alt:""}})]),a._v(" "),r("p",[a._v("总结：扩容是为了提高系统的吞吐量，同时也要考虑容错性，也就是在尽可能多的服务器宕机的情况下，还可以保证数据不丢失。")]),a._v(" "),r("p",[a._v("Elasticsearch的容错机制\n以9个 "),r("code",[a._v("shard")]),a._v("，3个 "),r("code",[a._v("node")]),a._v("为例：")]),a._v(" "),r("p",[a._v("情况：如果 "),r("code",[a._v("master node")]),a._v("（主节点 ） 宕机，此时不是所有的 primary shard（主分片） 都是 Avtive Status（活跃状态），所以此时的集群状态是 red。\n容错处理：")]),a._v(" "),r("ul",[r("li",[a._v("第一步：选择一台服务器作为 master（选举产生）")])]),a._v(" "),r("p",[r("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-09-25-092853.jpg",alt:""}})]),a._v(" "),r("ul",[r("li",[r("p",[a._v("第二步：新 master 会把挂掉的 "),r("code",[a._v("primary shard")]),a._v(" 的某个 replica shard 提升为 primary shard ，此时集群状态为 yellow。因为少了一个 replica shard ，并不是所有的 replica shard 都是 Avtive Status （即并不是所有的副本分片都是活跃的）。")])]),a._v(" "),r("li",[r("p",[a._v("第三步：重启故障机，新 master 会把所有的副本都复制一份到该节点上（同步一下宕机后发生的修改），测试集群状态将变为 green，因为此时所有的 primary shard 和 replica shard 都是 Avtive Status。")])])]),a._v(" "),r("p",[r("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-09-25-092944.jpg",alt:""}})])])}),[],!1,null,null,null);r.default=i.exports}}]);