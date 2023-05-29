(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{440:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"基本介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍"}},[s._v("#")]),s._v(" 基本介绍")]),s._v(" "),a("h2",{attrs:{id:"没有使用函数式编程之前带来的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有使用函数式编程之前带来的问题"}},[s._v("#")]),s._v(" 没有使用函数式编程之前带来的问题")]),s._v(" "),a("ol",[a("li",[s._v("代码的组织结构不清晰，可读性差")]),s._v(" "),a("li",[s._v("实现重复的功能时，你只能重复编写实现功能的代码，导致代码冗余，白白耗费精力")]),s._v(" "),a("li",[s._v("假如某一部分功能需要扩展或更新时，需要找出所有实现此功能的地方，一一修改，无法统一管理，加大了维护难度")])]),s._v(" "),a("h2",{attrs:{id:"函数是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数是什么"}},[s._v("#")]),s._v(" 函数是什么")]),s._v(" "),a("ol",[a("li",[s._v("函数是对实现某一功能的代码的封装")]),s._v(" "),a("li",[s._v("函数可以实现代码的复用，从而减少代码的重复编写")])]),s._v(" "),a("h1",{attrs:{id:"一、定义函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、定义函数"}},[s._v("#")]),s._v(" 一、定义函数")]),s._v(" "),a("h2",{attrs:{id:"_1-函数的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-函数的分类"}},[s._v("#")]),s._v(" 1. 函数的分类")]),s._v(" "),a("p",[s._v("函数分为内置函数和自定义函数")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("内置函数  是自带的，直接可以调用。比如 : "),a("code",[s._v("id()")]),s._v(" "),a("code",[s._v("type()")]),s._v(" "),a("code",[s._v("list()")])])]),s._v(" "),a("li",[a("p",[s._v("自定义函数 是我们自己在代码中编写定义的")])])]),s._v(" "),a("h2",{attrs:{id:"_2-定义函数的语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-定义函数的语法"}},[s._v("#")]),s._v(" 2. 定义函数的语法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def 函数名(参数1,参数2,参数3,...):\n    '''注释'''\n    函数体\n    return 返回值\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("ul",[a("li",[a("code",[s._v("def")]),s._v(" 是定义函数的关键字")]),s._v(" "),a("li",[s._v("函数名  和变量名的定义规则一样，要能体现出函数的功能含有")]),s._v(" "),a("li",[a("code",[s._v("()")]),s._v(" 小括号是必须的")]),s._v(" "),a("li",[a("code",[s._v(":")]),s._v(" 小括号后面的英文的冒号 "),a("code",[s._v(":")]),s._v(" 也是必须的")]),s._v(" "),a("li",[s._v("参数  不是必须的，多个参数使用英文逗号 "),a("code",[s._v(",")]),s._v(" 隔开")]),s._v(" "),a("li",[s._v("函数体  可以写任意合法的 Python 代码，需要缩进 4 个空格")]),s._v(" "),a("li",[a("code",[s._v("retrurn")]),s._v("  是用于返回数据的，这个是可选的。")]),s._v(" "),a("li",[s._v("返回值 也是可选的")])])]),s._v(" "),a("h3",{attrs:{id:"定义函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义函数"}},[s._v("#")]),s._v(" 定义函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('def foo():\n    print("hello everyone")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"调用函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用函数"}},[s._v("#")]),s._v(" 调用函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("foo()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("h3",{attrs:{id:"注意-函数必须先定义-才能调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意-函数必须先定义-才能调用"}},[s._v("#")]),s._v(" 注意：函数必须先定义，才能调用")])]),s._v(" "),a("h1",{attrs:{id:"二、函数的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、函数的参数"}},[s._v("#")]),s._v(" 二、函数的参数")]),s._v(" "),a("blockquote",[a("p",[s._v("函数的参数可以是python 中的任意数据类型，并且参数的数量可以是零个或多个。")])]),s._v(" "),a("p",[s._v("函数的参数分为：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("形参"),a("br"),s._v("\n形参就是形式上的参数，是在定义函数时使用的概念，其实就是一个变量名")])]),s._v(" "),a("li",[a("p",[s._v("实参\n实参就是实际的数据，是在调用（使用）函数时的概念。")])])]),s._v(" "),a("h2",{attrs:{id:"_1-形参中位置参数和默认参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-形参中位置参数和默认参数"}},[s._v("#")]),s._v(" 1. 形参中位置参数和默认参数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def say(msg):\n    print(msg)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("调用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('s = "告诉你，一想到你，我这张丑脸上就泛起微笑。"\nsay(s)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v("say")]),s._v(" 就是位置参数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def func(x, y):\n    n = x - y\n    print(n)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("调用函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("func(3, 2)\n\n输出： 1\n\nfunc(2, 3)\n\n输出： -1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("blockquote",[a("p",[s._v("位置参数有几个，调用函数时就要传递几个。并且有位置顺序的区分")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('def conn_ospf(ip="192.168.1.1"):\n    print(ip)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v('ip="192.168.1.1")')]),s._v(" 是定义了一个默认参数 "),a("code",[s._v("ip")]),s._v(" ，这个参数在定义函数的时后就有了一个值 "),a("code",[s._v("192.168.1.1")]),s._v("。\n默认参数在调用函数时可以不用传递实参，就是使用默认值。\n也可以传递实参, 传递时，就使用传递的参数。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('conn_ospf()\n输出： 192.168.1.1\n\nconn_ospf("192.168.1.254")\n输出: 192.168.1.254\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"_2-实参中的位置参数和关键字参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-实参中的位置参数和关键字参数"}},[s._v("#")]),s._v(" 2. 实参中的位置参数和关键字参数")]),s._v(" "),a("blockquote",[a("p",[s._v("在函数调用的时候，给函数传递的参数，称为实参。\n实参可以简单分为 位置参数 和 关键字参数")]),s._v(" "),a("ul",[a("li",[s._v("位置参数就是 一个一个的数据对象，传递的时候是有位置顺序区分的。\n如： "),a("code",[s._v("(18, 'kame')")])]),s._v(" "),a("li",[s._v("关键字参数是变量名和变量值的组合，传递的时候没有位置顺序之分。\n如："),a("code",[s._v("(name=shark")]),s._v(", "),a("code",[s._v("age=18)")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('def say_me(name, age=20):\n    print("昵称:", name)\n    print("年龄:", age)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('say_me("kame", 18)\n\n# 错误示例\nsay_me(18, "kame")\n\nsay_me(age=18, name="kame")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("关键字参数的变量名必须 和定义函数时的参数名称一致。")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"_3-和-实现接收任意参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-和-实现接收任意参数"}},[s._v("#")]),s._v(" 3. * 和 ** 实现接收任意参数")]),s._v(" "),a("p",[a("code",[s._v("*")]),s._v(" 可以接收所有的位置参数， "),a("code",[s._v("**")]),s._v(" 可以接收所有的关键字参数。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def some_arg(*args,  **kwargs):\n      print(args)\n      print(kwargs)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("调用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("some_arg(1,3,a=10)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("(1, 3)\n{'a': 10}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h1",{attrs:{id:"三、感受返回值的强大之处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、感受返回值的强大之处"}},[s._v("#")]),s._v(" 三、感受返回值的强大之处")]),s._v(" "),a("blockquote",[a("p",[s._v("函数也可以通过关键字 "),a("code",[s._v("return")]),s._v(" 返回任何数量的 Python 中的任意数据类型，作为结果")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def foo():\n    s = 'lenovo'\n    li = [1,2,3]\n    retrue s, li\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("调用函数并且接收返回值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("name, l3 = foo()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("hr"),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"四、函数的高级用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、函数的高级用法"}},[s._v("#")]),s._v(" 四、函数的高级用法")]),s._v(" "),a("h2",{attrs:{id:"_1-作为参数传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-作为参数传递"}},[s._v("#")]),s._v(" 1. 作为参数传递")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("调用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("foo(f1)  # 会输出 2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("注意这里传递的是 函数名，后面不要加小括号。\n本质上是传递了 函数对象本身")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"_2-作为返回值返回"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-作为返回值返回"}},[s._v("#")]),s._v(" 2. 作为返回值返回")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" f2\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# f 和 f2 都指向了同一个函数对象")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);