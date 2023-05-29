(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{515:function(s,a,t){"use strict";t.r(a);var r=t(2),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sql-select-case-when"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-select-case-when"}},[s._v("#")]),s._v(" SQL:select case when")]),s._v(" "),a("blockquote",[a("p",[s._v("CASE 可能是 SQL 中被误用最多的关键字之一。虽然你可能以前用过这个关键字来创建字段，但是它还具有更多用法。例如，你可以在 WHERE 子句中使用 CASE。\n首先让我们看一下 CASE 的语法。在一般的 SELECT 中，其语法如下：")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("myColumnSpec"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("somethingA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("B"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("somethingB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("somethingE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("在上面的代码中需要用具体的参数代替尖括号中的内容。下面是一个简单的例子：")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USE")]),s._v(" pubs\nGO\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n    Title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Price Range'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Unpriced'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Bargain'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("BETWEEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Average'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Gift to impress relatives'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" titles\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" price\nGO  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("blockquote",[a("p",[s._v("这是 CASE 的典型用法，但是使用 CASE 其实可以做更多的事情。比方说下面的 GROUP BY 子句中的 CASE：")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Number of Titles'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" titles\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Unpriced'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Bargain'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("BETWEEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Average'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Gift to impress relatives'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\nGO  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("blockquote",[a("p",[s._v("你甚至还可以组合这些选项，添加一个 ORDER BY 子句，如下所示：")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USE")]),s._v(" pubs\nGO\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Unpriced'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Bargain'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("BETWEEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Average'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Gift to impress relatives'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" Range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    Title\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" titles\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Unpriced'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Bargain'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("BETWEEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Average'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Gift to impress relatives'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    Title\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Unpriced'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Bargain'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("BETWEEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Average'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Gift to impress relatives'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    Title\nGO  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("blockquote",[a("p",[s._v("注意，为了在 GROUP BY 块中使用 CASE，查询语句需要在 GROUP BY 块中重复 SELECT 块中的 CASE 块。\n除了选择自定义字段之外，在很多情况下 CASE 都非常有用。再深入一步，你还可以得到你以前认为不可能得到的分组排序结果集")])])])}),[],!1,null,null,null);a.default=e.exports}}]);