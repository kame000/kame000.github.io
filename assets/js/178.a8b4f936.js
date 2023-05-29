(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{581:function(s,e,a){"use strict";a.r(e);var t=a(2),r=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"git笔记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git笔记"}},[s._v("#")]),s._v(" Git笔记")]),s._v(" "),e("h3",{attrs:{id:"_1-工作区-working-directory-和版本库-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-工作区-working-directory-和版本库-repository"}},[s._v("#")]),s._v(" 1. 工作区（Working Directory）和版本库（Repository）")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/michaelliao/learngit/blob/master/Git%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/git.jpeg",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-09-25-083513.jpg",alt:""}}),e("OutboundLink")],1)]),s._v(" "),e("p",[e("strong",[s._v("说明：")])]),s._v(" "),e("ul",[e("li",[s._v("工作区就是创建仓库的文件夹如（learngit文件夹就是一个工作区）")]),s._v(" "),e("li",[s._v("版本库就是工作区的隐藏目录"),e("code",[s._v(".git")]),s._v(",版本库中有暂存区（stage/index）和分支（master）")]),s._v(" "),e("li",[s._v("git add 实际是把文件添加到暂存区， git commit 把暂存区的内容提交到当前分支")])]),s._v(" "),e("h3",{attrs:{id:"_2-创建版本库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建版本库"}},[s._v("#")]),s._v(" 2.创建版本库")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("创建git仓库文件夹，名为："),e("code",[s._v("learngit")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" learngit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("进入leadngit文件夹")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" learngit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("初始化git仓库")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"_3-添加文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加文件"}},[s._v("#")]),s._v(" 3. 添加文件")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("在"),e("code",[s._v("leangit")]),s._v("下添加一个"),e("code",[s._v("readme.txt")]),s._v("文件，并编辑一些内容")])]),s._v(" "),e("li",[e("p",[s._v("添加到仓库暂存区（）在暂存区 文件会变绿")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme.txt    \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v('提交readme.txt文件到当前分支, -m "提交说明"(只有进行 git add 后 go commit 命令才有效)')]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add readme.txt"')]),s._v("   \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"_4-修改文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改文件"}},[s._v("#")]),s._v(" 4. 修改文件")]),s._v(" "),e("h4",{attrs:{id:"_4-1-当文件在工作区时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-当文件在工作区时"}},[s._v("#")]),s._v(" 4.1 当文件在工作区时")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("查看readme.txt文件内容")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" readme.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("修改readme.txt文件内容")])]),s._v(" "),e("li",[e("p",[s._v("查看仓库状态")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("添加到仓库暂存区，并提交到分支")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme.txt\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"modify readme.txt"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])]),s._v(" "),e("h4",{attrs:{id:"_4-2-当文件在暂存区时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-当文件在暂存区时"}},[s._v("#")]),s._v(" 4.2 当文件在暂存区时")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("修改文件内容")])]),s._v(" "),e("li",[e("p",[s._v("添加到仓库暂存区")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("提交到分支")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"modify readme.txt at the stage"')]),s._v("   \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"_5-撤销修改文件-未提交到分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-撤销修改文件-未提交到分支"}},[s._v("#")]),s._v(" 5. 撤销修改文件（未提交到分支）")]),s._v(" "),e("h4",{attrs:{id:"_5-1-当文件在工作区时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-当文件在工作区时"}},[s._v("#")]),s._v(" 5.1 当文件在工作区时")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("执行撤销命令")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- readme.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h4",{attrs:{id:"_5-2-当文件在暂存区时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-当文件在暂存区时"}},[s._v("#")]),s._v(" 5.2 当文件在暂存区时")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("令文件回到工作区")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset HEAD readme.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("执行撤销命令")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- readme.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"_6-版本控制-无限次后悔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-版本控制-无限次后悔"}},[s._v("#")]),s._v(" 6. 版本控制（无限次后悔）")]),s._v(" "),e("p",[s._v("说明：在Git中，"),e("code",[s._v("HEAD")]),s._v("表示当前版本，"),e("code",[s._v("HEAD^")]),s._v("表示上一版本 "),e("code",[s._v("HEAD^^")]),s._v("表示上上一个版本")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("查看提交日志输出(完整版)")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看提交日志输出（精简版）")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pretty")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("noline\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("回到上一版本")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" HEAD^\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("回到指定版本（hard 后面添加版本号）")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" ea34578\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看命令历史")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"_7-远程仓库-github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-远程仓库-github"}},[s._v("#")]),s._v(" 7. 远程仓库（github）")]),s._v(" "),e("h4",{attrs:{id:"_7-1-添加到远程库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-添加到远程库"}},[s._v("#")]),s._v(" 7.1 添加到远程库")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("在github上创建一个名为"),e("code",[s._v("learngit")]),s._v("的空仓库")])]),s._v(" "),e("li",[e("p",[s._v("在本地"),e("code",[s._v("learngit")]),s._v("仓库下运行命令")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@github.com:iphone5solo/learngit.git\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("把本地内容推送到github远程库上(第一次push 参数带 "),e("code",[s._v("-u")]),s._v(" 关联远程仓库)")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("p",[s._v("注意：如果在git push -u origin master时出现以下错误，证明电脑没有修改远程仓库的公钥，")]),s._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[s._v("Permission denied (publickey).\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fatal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("解决方法：")]),s._v(" "),e("ol",[e("li",[s._v("在github上点击"),e("code",[s._v("Edit profile")]),s._v(" --\x3e "),e("code",[s._v("SSH and GPG keys")]),s._v(" --\x3e "),e("code",[s._v("new SSH key")]),s._v(" 添加SHH公钥")]),s._v(" "),e("li",[s._v("打开"),e("code",[s._v("id_rsa.pub")]),s._v("文件（/Users/iphone5solo/.ssh/id.rsa.pub）")]),s._v(" "),e("li",[s._v("将"),e("code",[s._v("id_rsa.pub")]),s._v("文件内容拷贝到key就可以了，title随便填。")])]),s._v(" "),e("h4",{attrs:{id:"_7-2-从远程库克隆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-从远程库克隆"}},[s._v("#")]),s._v(" 7.2 从远程库克隆")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("在github上创建一个名为"),e("code",[s._v("clonegit")]),s._v("的仓库")])]),s._v(" "),e("li",[e("p",[s._v("使用命令克隆仓库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$  git clone git@github.com:iphone5solo/clonegit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h4",{attrs:{id:"_7-3-从远程仓库更新本地仓库-已关联"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-从远程仓库更新本地仓库-已关联"}},[s._v("#")]),s._v(" 7.3 从远程仓库更新本地仓库（已关联）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" $ git pull origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_8-分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-分支管理"}},[s._v("#")]),s._v(" 8. 分支管理")]),s._v(" "),e("p",[e("strong",[s._v("图文说明：")])]),s._v(" "),e("p",[e("code",[s._v("master")]),s._v("分支是一条线，git用"),e("code",[s._v("master")]),s._v("指向最新的提交，在用"),e("code",[s._v("HEAD")]),s._v("指向"),e("code",[s._v("master")]),s._v("，以此才确定当前分支，和提交点。")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/michaelliao/learngit/blob/master/Git%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/master.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-09-25-083934.jpg",alt:""}}),e("OutboundLink")],1)]),s._v(" "),e("p",[e("strong",[s._v("1. 创建分支")])]),s._v(" "),e("p",[s._v("当我们创建新的分支，例如"),e("code",[s._v("newBranch")]),s._v(",git就会新建一个指针"),e("code",[s._v("newBranch")]),s._v(",指向"),e("code",[s._v("master")]),s._v("相同的提交，再把"),e("code",[s._v("HEAD")]),s._v("指向"),e("code",[s._v("newBranch")]),s._v(",就表示当前分支在"),e("code",[s._v("newBrach")]),s._v("上")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/michaelliao/learngit/blob/master/Git%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/newBranch.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-09-25-083953.jpg",alt:""}}),e("OutboundLink")],1)]),s._v(" "),e("p",[e("strong",[s._v("2. 新分支的修改和提交")])]),s._v(" "),e("p",[s._v("现在对工作区的修改和提交就是针对"),e("code",[s._v("newBranch")]),s._v("分支了，比如新提交一次后，"),e("code",[s._v("newBranch")]),s._v("指针就向前移动一步，指向最新提交，而"),e("code",[s._v("master")]),s._v("指针指向不变。")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-09-25-084012.jpg",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("3. 分支的合并")])]),s._v(" "),e("p",[s._v("把"),e("code",[s._v("newBranch")]),s._v("合并到"),e("code",[s._v("master")]),s._v("上，直接把"),e("code",[s._v("master")]),s._v("指向"),e("code",[s._v("newBranch")]),s._v("的当前提交，就完成了合并。")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-09-25-084035.jpg",alt:""}}),s._v(" "),e("strong",[s._v("4. 合并完成删除分支")])]),s._v(" "),e("p",[s._v("删除分支"),e("code",[s._v("newBranch")]),s._v("，就剩下一个"),e("code",[s._v("master")]),s._v("分支")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-09-25-084046.jpg",alt:""}}),s._v(" "),e("strong",[s._v("5. 查看分支合并图解")])]),s._v(" "),e("p",[e("img",{attrs:{src:"http://img.liuwenqi.com/blog/2019-09-25-084113.jpg",alt:""}}),s._v(" "),e("strong",[s._v("关于分支的主要命令如下")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("查看分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git branch\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("创建"),e("code",[s._v("newBranch")]),s._v("分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git branch newBranch\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("切换"),e("code",[s._v("HEAD")]),s._v("指向"),e("code",[s._v("newBranch")]),s._v("分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git checkout newBranch\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("创建+切换分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git checkout -b newBranck\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("合并某分支到当前分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git merge newBranch\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("普通删除"),e("code",[s._v("newBranch")]),s._v("分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git branch -d newBranch\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("强行删除"),e("code",[s._v("newBranch")]),s._v("分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git branch -D newBranch\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看分支合并状况")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git log --graph --pretty=oneline --abbrev-commit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"_9-藏匿当前未提交的分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-藏匿当前未提交的分支"}},[s._v("#")]),s._v(" 9. 藏匿当前未提交的分支")]),s._v(" "),e("p",[s._v("如： 当前在修改自己的分支"),e("code",[s._v("dev")]),s._v(",突然项目经理要求修复一个bug-07")]),s._v(" "),e("p",[s._v("解决方法：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("藏匿当前"),e("code",[s._v("dev")]),s._v("分支的工作状态")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git stash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("新建一个"),e("code",[s._v("bug-07")]),s._v("分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git branch -b bug-07\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("修复bug并提交，合并"),e("code",[s._v("bug-07")]),s._v("到"),e("code",[s._v("master")]),s._v("分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('$ git commit -m "fix the bug-07"\n$ git checkout master\n$ git merge --no-ff -m "merge  bug-07" bug-07\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("删除"),e("code",[s._v("bug-07")]),s._v("分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git branch -d  bug-07\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看当前"),e("code",[s._v("stash")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git stash list\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("恢复"),e("code",[s._v("dev")]),s._v("分支的工作状态，并删除stash内容")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git stash pop \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"_10-多人协作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-多人协作"}},[s._v("#")]),s._v(" 10. 多人协作")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("查看远程库信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git remote\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("详细查看远程信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git remote -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("推送分支到远程库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git remote origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("抓取远程分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git pull origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])])]),s._v(" "),e("h3",{attrs:{id:"_11-标签管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-标签管理"}},[s._v("#")]),s._v(" 11. 标签管理")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("创建一个标签，默认为"),e("code",[s._v("HEAD")]),s._v("当前分支添加标签")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git tag v1.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("为版本号为"),e("code",[s._v("e8b8ef6")]),s._v("添加"),e("code",[s._v("v2.0")]),s._v("标签")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git tag v2.0 e8b8ef6\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("为版本号为"),e("code",[s._v("6cb5a9e")]),s._v("添加带有说明的标签，"),e("code",[s._v("-a")]),s._v("指定标签名,"),e("code",[s._v("-m")]),s._v("指定说明文字")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('$ git tag -a v3.0 -m "version 0.2 released" 6cb5a9e\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("根据标签查看指定分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git show v0.2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看所有标签")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git tag\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("删除"),e("code",[s._v("v1.0")]),s._v("标签")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git tag -d v1.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("把"),e("code",[s._v("v0.9")]),s._v("标签推送到远程")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git push origin v0.9\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("推送所有尚未推送到远程的本地标签")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git push origin --tags\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("删除远程标签, 先删除本地标签，再删除远程标签")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git tag -d v0.9\n$ git push origin :refs/tags/v0.9\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);