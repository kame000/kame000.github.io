(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{580:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ansible-hosts文件命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible-hosts文件命令"}},[s._v("#")]),s._v(" ansible    hosts文件命令")]),s._v(" "),a("h2",{attrs:{id:"命令说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令说明"}},[s._v("#")]),s._v(" 命令说明：")]),s._v(" "),a("p",[s._v("ansible_ssh_host\n将要连接的远程主机名.与你想要设定的主机的别名不同的话,可通过此变量设置.")]),s._v(" "),a("p",[s._v("ansible_ssh_port\nssh端口号.如果不是默认的端口号,通过此变量设置.")]),s._v(" "),a("p",[s._v("ansible_ssh_user\n默认的 ssh 用户名")]),s._v(" "),a("p",[s._v("ansible_ssh_pass\nssh 密码(这种方式并不安全,我们强烈建议使用 --ask-pass 或 SSH 密钥)")]),s._v(" "),a("p",[s._v("ansible_sudo_pass\nsudo 密码(这种方式并不安全,我们强烈建议使用 --ask-sudo-pass)")]),s._v(" "),a("p",[s._v("ansible_sudo_exe (new in version 1.8)\nsudo 命令路径(适用于1.8及以上版本)")]),s._v(" "),a("p",[s._v("ansible_connection\n与主机的连接类型.比如:local, ssh 或者 paramiko. Ansible 1.2 以前默认使用 paramiko.1.2 以后默认使用 'smart','smart' 方式会根据是否支持 ControlPersist, 来判断'ssh' 方式是否可行.")]),s._v(" "),a("p",[s._v("ansible_ssh_private_key_file\nssh 使用的私钥文件.适用于有多个密钥,而你不想使用 SSH 代理的情况.")]),s._v(" "),a("p",[s._v("ansible_shell_type\n目标系统的shell类型.默认情况下,命令的执行使用 'sh' 语法,可设置为 'csh' 或 'fish'.")]),s._v(" "),a("p",[s._v('ansible_python_interpreter\n目标主机的 python 路径.适用于的情况: 系统中有多个 Python, 或者命令路径不是"/usr/bin/python",比如  *BSD, 或者 /usr/bin/python\n不是 2.X 版本的 Python.我们不使用 "/usr/bin/env" 机制,因为这要求远程用户的路径设置正确,且要求 "python" 可执行程序名不可为 python以外的名字(实际有可能名为python26).')]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("    与 ansible_python_interpreter 的工作方式相同,可设定如 ruby 或 perl 的路径....\n")])])]),a("h2",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子：")]),s._v(" "),a("p",[s._v("web1    ansible_ssh_user=manager    ansible_ssh_pass=密码")]),s._v(" "),a("p",[s._v("some_host         ansible_ssh_port=2222     ansible_ssh_user=manager\naws_host          ansible_ssh_private_key_file=/home/example/.ssh/aws.pem\nfreebsd_host      ansible_python_interpreter=/usr/local/bin/python\nruby_module_host  ansible_ruby_interpreter=/usr/bin/ruby.1.9.3")]),s._v(" "),a("h2",{attrs:{id:"创建目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建目录"}},[s._v("#")]),s._v(" 创建目录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("  ansible dbserver "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dest=/tmp/ss mode=755 owner=root group=root state=directory"')]),s._v("\n\n  修改文件权限\n  ansible dbserver "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dest=/tmp/a.txt mode=600"')]),s._v("\n  拷贝文件\n  ansible dbserver "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" copy "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src=/etc/hosts dest=/etc/hosts"')]),s._v("\n  系统状态检查\n  ansible dbserver "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name=iptables state=started"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);