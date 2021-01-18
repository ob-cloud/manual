(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{387:function(t,s,a){"use strict";a.r(s);var _=a(43),e=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"github-和-gitlab-共同使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-和-gitlab-共同使用"}},[t._v("#")]),t._v(" "),a("code",[t._v("GitHub")]),t._v(" 和 "),a("code",[t._v("GitLab")]),t._v(" 共同使用")]),t._v(" "),a("p",[t._v("说明")]),t._v(" "),a("blockquote",[a("p",[t._v("公司 "),a("code",[t._v("GitLab")]),t._v(" 私服与个人 "),a("code",[t._v("GitHub")]),t._v(" 服务，因使用邮箱不同，产生的 "),a("code",[t._v("SSH key")]),t._v(" 不同，从而导致冲突。")])]),t._v(" "),a("h1",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("h2",{attrs:{id:"方案一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[t._v("#")]),t._v(" 方案一")]),t._v(" "),a("p",[a("code",[t._v("Gitlab")]),t._v(" 与 "),a("code",[t._v("Github")]),t._v(" 邮箱地址保持一致！")]),t._v(" "),a("h2",{attrs:{id:"方案二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[t._v("#")]),t._v(" 方案二")]),t._v(" "),a("h3",{attrs:{id:"基于-config-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-config-文件"}},[t._v("#")]),t._v(" 基于 "),a("code",[t._v("config")]),t._v(" 文件")]),t._v(" "),a("h4",{attrs:{id:"_1-配置-git-用户名、邮箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置-git-用户名、邮箱"}},[t._v("#")]),t._v(" 1.  配置 "),a("code",[t._v("Git")]),t._v(" 用户名、邮箱")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("window")]),t._v(" 系统，"),a("code",[t._v("ssh")]),t._v(" 的路径为："),a("code",[t._v("C:\\Users\\Administrator\\.ssh")])])]),t._v(" "),a("p",[t._v("用户 "),a("code",[t._v("onbright")]),t._v(" 的配置如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局配置，Github仓库中默认使用此配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onbright'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onbright@gmail.com'")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# *团队项目配置，每次新创建一个项目，需要执行下")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onbright'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onbright@on-bright.cn'")]),t._v(" \n")])])]),a("h4",{attrs:{id:"_2-生成-ssh-key-上传到-github-gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成-ssh-key-上传到-github-gitlab"}},[t._v("#")]),t._v(" 2. 生成 "),a("code",[t._v("ssh key")]),t._v(" 上传到 "),a("code",[t._v("Github/Gitlab")])]),t._v(" "),a("p",[a("code",[t._v("ssh key")]),t._v(" 默认生成后保存在 "),a("code",[t._v("~/.ssh/")]),t._v(" 目录下 ，默认为 "),a("code",[t._v("id_rsa 和 id_rsa.pub")]),t._v(" 两个文件，由于我们需要分开配置，所以这么做：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成公钥、密钥的同时指定文件名，Gitlab使用")]),t._v("\nssh-keygen -t rsa -f ~/.ssh/id_rsa.gitlab -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onbright@on-bright.cn"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成默认，Github使用")]),t._v("\nssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onbright@gmail.com"')]),t._v("\n")])])]),a("p",[t._v("命令执行完成后，这时 "),a("code",[t._v("~/.ssh")]),t._v(" 目录下会多出 "),a("code",[t._v("id_rsa.gitlab")]),t._v(" 和 "),a("code",[t._v("id_rsa.gitlab.pub")]),t._v(" 两个文件，"),a("code",[t._v("id_rsa.gitlab.pub")]),t._v(" 里保存的就是我们要使用的 "),a("code",[t._v("key")]),t._v(" ，这个 "),a("code",[t._v("key")]),t._v(" 就是用来上传到 "),a("code",[t._v("Gitlab")]),t._v("上的。")]),t._v(" "),a("h4",{attrs:{id:"_3-配置-config-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置-config-文件"}},[t._v("#")]),t._v(" 3. 配置 "),a("code",[t._v("config")]),t._v(" 文件")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("~/.ssh")]),t._v("目录下，如果不存在，则新建 "),a("code",[t._v("touch ~/.ssh/config")]),t._v(" 文件**("),a("code",[t._v("window")]),t._v("系统在 "),a("code",[t._v("ssh")]),t._v(" 目录下右键创建 "),a("code",[t._v("config")]),t._v(" 文件)** ，文件内容添加如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Host *.myonbright.com\n     IdentityFile ~/.ssh/id_rsa.gitlab\n     User onbright\n")])])]),a("p",[t._v("配置完成后，符合 "),a("code",[t._v("*.onbright.com")]),t._v(" 后缀的 "),a("code",[t._v("Git")]),t._v(" 仓库，均采取"),a("code",[t._v("~/.ssh/id_rsa.gitlab")]),t._v(" 密钥进行验证，其它的采取默认的。")]),t._v(" "),a("h4",{attrs:{id:"_4-上传-public-key-到-github-gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-上传-public-key-到-github-gitlab"}},[t._v("#")]),t._v(" 4. 上传 "),a("code",[t._v("public key")]),t._v(" 到 "),a("code",[t._v("Github/Gitlab")])]),t._v(" "),a("p",[t._v("以 "),a("code",[t._v("Github")]),t._v(" 为例，过程如下：")]),t._v(" "),a("ol",[a("li",[t._v("登录 "),a("code",[t._v("github")])]),t._v(" "),a("li",[t._v("点击右上方的 "),a("code",[t._v("Accounting settings")]),t._v(" 图标")]),t._v(" "),a("li",[t._v("选择 "),a("code",[t._v("SSH key")])]),t._v(" "),a("li",[t._v("点击 "),a("code",[t._v("Add SSH key")])])]),t._v(" "),a("p",[t._v("在出现的界面中填写"),a("code",[t._v("SSH key")]),t._v("的名称，填一个你自己喜欢的名称即可，然后将上面拷贝的"),a("code",[t._v("~/.ssh/id_rsa.pub")]),t._v("文件内容粘帖到 "),a("code",[t._v("key")]),t._v(" 一栏，在点击 “"),a("code",[t._v("add key")]),t._v("” 按钮就可以了。")]),t._v(" "),a("p",[t._v("添加过程"),a("code",[t._v("github")]),t._v("会提示你输入一次你的 "),a("code",[t._v("github")]),t._v(" 密码 ，确认后即添加完毕。 上传"),a("code",[t._v("Gitlab")]),t._v("的过程一样，请自己操作。")]),t._v(" "),a("h4",{attrs:{id:"_5-验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证"}},[t._v("#")]),t._v(" 5. 验证")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("➜  ~  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -T git@github.com\nHi onbright"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" You've successfully authenticated, but GitHub does not provide shell access.\n➜  ~  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -T git@gitlab.myonbright.com\nWelcome to GitLab, onbright"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);