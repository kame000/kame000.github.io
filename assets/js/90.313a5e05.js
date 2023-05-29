(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{497:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"nfs-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nfs-部署"}},[s._v("#")]),s._v(" NFS 部署")]),s._v(" "),t("h3",{attrs:{id:"nfs服务器端配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nfs服务器端配置"}},[s._v("#")]),s._v(" NFS服务器端配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" software"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nfs-utils\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" software"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /sharedir/game /sharedir/user\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" software"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /sharedir\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" software"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/exports "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#填入如下内容")]),s._v("\n/sharedir/game "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.80")]),s._v(".8.0/24"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw,no_root_squash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n/sharedir/user "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.80")]),s._v(".8.0/24"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw,no_root_squash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" software"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" rpcbind start\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" software"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nfs start\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" software"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" rpcbind on\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" software"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" nfs on\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"nfs客户端配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nfs客户端配置"}},[s._v("#")]),s._v(" NFS客户端配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" software"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nfs-utils\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" software"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/fstab "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#末尾追加如下内容")]),s._v("\napbackup:/sharedir/game /data/www/game/web/static/uploadsnfsnodev,rw,rsize"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(",wsize"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\napbackup:/sharedir/user /data/www/user/web/static/uploadsnfsnodev,rw,rsize"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(",wsize"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" software"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /data/www/game/web/static/uploads\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" software"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" mount/data/www/user/web/static/uploads\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);