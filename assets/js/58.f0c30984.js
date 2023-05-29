(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{464:function(s,a,t){"use strict";t.r(a);var r=t(2),n=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git命令"}},[s._v("#")]),s._v(" git命令")]),s._v(" "),a("h2",{attrs:{id:"本地操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地操作"}},[s._v("#")]),s._v(" 本地操作")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init   初始化一个本地仓库  新建为 master主分支\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status  查看当前分支状态\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  将文件更改添加到分支状态中 相当于文件等待被提\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"描述信息"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  提交并添加描述信息\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch  查看分支   前面带*号的为当前所在分支\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  新建分支\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  切换分支\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  新建分支并切换到此分支\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   将指定分支名合并到当前分支  一般为切换到主分支使用此命令\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --no-ff "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"提交描述"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   合并分支并提交\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  有新建分支，那肯定有删除分支，假如这个分支新建错了，或者a分支的代码已经顺利合并到 master 分支来了，那么a分支没用了，需要删除，这个时候执行 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" a 就可以把a分支删除了\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  强制删除分支，不管分支是否有未提交合并的代码\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag 查看所有标签\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("标签名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 在当前状态下新建一个标签，可用来当作版本号使用\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("标签名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"标签描述"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("提交id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  在指定的提交状态下新建一个标签\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("标签名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   查看标签的详情\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("标签名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 删除标签\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("标签名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   推送标签到远程仓库\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--tags")]),s._v("  推送所有未推送的标签\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("标签名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   删除远程标签，本地要先删除后才可以\n\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("标签名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 切换到标签名指定的状态\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 查看文件修改内容\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log      查看提交日志   "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline  此参数减少输出信息  穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog   要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--graph")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit   查看分支合并图\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("HEAD^"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("提交ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 穿梭到指定提交版本\n    HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" commit_id。\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  将指定的文件恢复到最近一次 commit或add操作时候的状态\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset HEAD "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   将指定的文件从暂存区的修改撤销掉（unstage），重新放回工作区\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\t\t 删除指定的文件\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash  把当前工作现场“储藏”起来，等以后恢复现场后继续工作\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list 查看暂存状态\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply 恢复暂存状态\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash drop  删除暂存状态\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop   恢复并删除暂存状态\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  恢复指定的暂存状态\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("h2",{attrs:{id:"远征仓库操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远征仓库操作"}},[s._v("#")]),s._v(" 远征仓库操作:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  从远征仓库拷贝过来代码，相当于建立本地分支\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull 将最新的提交从远程仓库抓取下来\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push  将本地修改后的代码提交到远程仓库\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程仓库名，默认origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("本地分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  将指定的分支推送到远程分支上\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" 查看远程仓库  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" 为详细信息\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("本地支分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程仓库名，默认origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程支分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 拉取远程主分支下的支分支。。。\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --set-upstream "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("本地支分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程仓库名，默认origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程支分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  将本地分支与远程指定的分支关联起来\n\n    //以下为先有本地库，再建立远程库操作所用的命令\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("URL地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 本地库与远征库关联\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin master 关联后，使用命令第一次推送master分支的所有内容，   -u参数为推送当前分支所有内容\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);