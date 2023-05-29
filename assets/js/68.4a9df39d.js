(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{473:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"linux文件比对"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux文件比对"}},[s._v("#")]),s._v(" linux文件比对")]),s._v(" "),n("h2",{attrs:{id:"一、文本文件比较"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、文本文件比较"}},[s._v("#")]),s._v(" 一、文本文件比较")]),s._v(" "),n("h3",{attrs:{id:"_1、如果想对两个有序的文件进行比较-可以使用comm命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、如果想对两个有序的文件进行比较-可以使用comm命令"}},[s._v("#")]),s._v(" 1、如果想对两个有序的文件进行比较，可以使用comm命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("语法：comm "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" file1 file2\n说明：该命令是对两个已经排好序的文件进行比较。其中file1和file2是已排序的文件。comm读取这两个文件，然后生成\n三列输出：仅在file1中出现的行；仅在file2中出现的行；在两个文件中都存在的行。如果文件名用“- ”，则表示从标准输入读取。\n选项1、2或3抑制相应的列显示。例如\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("comm")]),s._v(" - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("就只显示在两个文件中都存在的行；\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("comm")]),s._v(" - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("只显示在第一个文件中出现而未在第二个文件中出现的行；\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("comm")]),s._v(" - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("则什么也不显示。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("hr"),s._v(" "),n("h3",{attrs:{id:"_2、如果文本文件没有排序-可以使用diff命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、如果文本文件没有排序-可以使用diff命令"}},[s._v("#")]),s._v(" 2、如果文本文件没有排序，可以使用Diff命令")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[s._v("该命令的功能为逐行比较两个文本文件，列出其不同之处。它比comm命令完成更复杂的检查。它对给出的文件进行系统的\n检查，并显示出两个文件中所有不同的行，不要求事先对文件进行排序。\n语法：diff "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" file1 file2\n说明：该命令告诉用户，为了使两个文件file1和file2一致，需要修改它们的哪些行。如果用“"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ”表示file1或fiie2，\n则表示标准输入。如果file1或file2是目录，那么diff将使用该目录中的同名文件进行比较。例如：\ndiff /usr/xu mine\n把目录/usr/xu 中名为mine的文件与当前目录中的mine文件进行比较。\n通常输出由下述形式的行组成：\nn1 a n3，n4\nn1，n2 d n3\nn1，n2 c n3，n4\n这些行类似ed命令把filel转换成file2。字母（a、d和c）之前的行号（n1，n2）是针对file1的，其后面的行号（n3，n4）\n是针对file2的。字母a、d和c分别表示附加、删除和修改操作。\n在上述形式的每一行的后面跟随受到影响的若干行，以“＜”打头的行属于第一个文件，以“＞”打头的行属于第二个文件。\ndiff能区别块和字符设备文件以及FIFO（管道文件），不会把它们与普通文件进行比较。\n如果file1和file2都是目录，则diff会产生很多信息。如果一个目录中只有一个文件，则产生一条信息，指出该目录路径名和其中的文件名。\ndiff各选项的含义如下：\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" b 忽略行尾的空格，而字符串中的一个或多个空格符都视为相等。如How are you与How are you被视为相同的字符串。\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" c 采用上下文输出格式（提供三行上下文）。\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" C n 采用上下文输出格式（提供n行上下文）。\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" e 产生一个合法的ed脚本作为输出。\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" r 当file1和file2是目录时，递归作用到各文件和目录上。3、比较二进制文件，cmp命令\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h3",{attrs:{id:"_3、比较二进制文件-cmp命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、比较二进制文件-cmp命令"}},[s._v("#")]),s._v(" 3、比较二进制文件，cmp命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("用途\n比较两个文件的内容并报告不同的第一个字符。\n语法\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cmp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" File1 File2\n描述\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cmp")]),s._v(" 命令比较 File1 和 File2 参数指定的文件，并将结果写到标准输出。如果为 File1 或 File2 参数指定 -（减号），\n则 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cmp")]),s._v(" 命令读取该文件的标准输入。只可以从标准输入读取一个文件。在缺省条件下，如果文件相同，则 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cmp")]),s._v(" 命令不显示任何内容。\n如果它们不同，则 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cmp")]),s._v(" 命令显示发生不同的第一个字节数和行数。如果指定了 "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" 标志，\n并且如果一个文件是另一文件的初始后继（即，如果在查找任何差别之前，cmp 命令读取文件中的文件结束符），则 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cmp")]),s._v(" 命令记下它。\n通常，使用 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cmp")]),s._v(" 命令比较非文本文件，使用 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" 命令比较文本文件。\n标志\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("     对于每个不同，（小写字母 L）显示十进制的字节数和八进制的不同字节。\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v("     只返回退出值。值 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 指示相同的文件；值 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 指示不同的文件；值 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 指示不可访问的文件或缺少选项。\n退出状态\n\n该命令返回以下退出值：\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     文件相同。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     文件不同。即使一个文件是另一个文件的初始后继（一个文件与另一个文件的第一个部分相同），也给出该值。\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     发生错误。\n示例\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);