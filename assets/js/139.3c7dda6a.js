(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{410:function(a,e,t){"use strict";t.r(e);var s=t(14),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"清理环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清理环境"}},[a._v("#")]),a._v(" 清理环境")]),a._v(" "),e("p",[a._v("本文档描述了如何清理掉在"),e("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html"}},[a._v("部署一个应用")]),a._v("章节中创建的所有资源、数据和环境。")],1),a._v(" "),e("blockquote",[e("p",[a._v("清理过程将删除应用相关的代码库，这会导致应用的所有版本记录被清空且无法恢复。请确保待清理的环境是可以被彻底删除或已做好备份。")])]),a._v(" "),e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[a._v("#")]),a._v(" 前提条件")]),a._v(" "),e("h3",{attrs:{id:"部署应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署应用"}},[a._v("#")]),a._v(" 部署应用")]),a._v(" "),e("p",[a._v("请确保运行时集群中成功部署了一个应用。")]),a._v(" "),e("h3",{attrs:{id:"注册-gitlab-账号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册-gitlab-账号"}},[a._v("#")]),a._v(" 注册 GitLab 账号")]),a._v(" "),e("p",[a._v("请确保您拥有 Nautes 的 GitLab 的账号，详情参考"),e("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#注册-gitlab-账号"}},[a._v("注册 GitLab 账号")]),a._v("。")],1),a._v(" "),e("h3",{attrs:{id:"导入证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入证书"}},[a._v("#")]),a._v(" 导入证书")]),a._v(" "),e("p",[a._v("如果您想使用 https 协议访问 Nautes API Server，需要"),e("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#导入证书"}},[a._v("导入证书")]),a._v("。")],1),a._v(" "),e("h2",{attrs:{id:"删除运行环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除运行环境"}},[a._v("#")]),a._v(" 删除运行环境")]),a._v(" "),e("p",[a._v("删除运行环境的相关实体，包括部署运行时、代码库、环境、项目和产品。")]),a._v(" "),e("ol",[e("li",[a._v("将命令行程序的代码库克隆到本地。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/nautes-labs/cli.git\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("替换位于相对路径 "),e("code",[a._v("examples/demo-product.yaml")]),a._v(" 下运行环境属性模板的变量，包括 "),e("code",[a._v("$suffix")]),a._v("，"),e("code",[a._v("$runtime-cluster")]),a._v("。")])]),a._v(" "),e("blockquote",[e("p",[a._v("运行环境属性模板的注释和示例，详情参考 "),e("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#准备运行环境"}},[a._v("准备运行环境")]),a._v("。")],1)]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("下载 "),e("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令行工具"),e("OutboundLink")],1),a._v("，执行以下命令，以销毁产品的运行环境。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("nautes remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-product.yaml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),e("h2",{attrs:{id:"删除运行时集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除运行时集群"}},[a._v("#")]),a._v(" 删除运行时集群")]),a._v(" "),e("p",[a._v("请您根据所注册的运行时集群的形态选择具体的删除步骤。")]),a._v(" "),e("h3",{attrs:{id:"删除物理集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除物理集群"}},[a._v("#")]),a._v(" 删除物理集群")]),a._v(" "),e("blockquote",[e("p",[a._v("请确保已成功注册物理集群。")])]),a._v(" "),e("ol",[e("li",[a._v("将命令行程序的代码库克隆到本地。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/nautes-labs/cli.git\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("替换位于相对路径 "),e("code",[a._v("examples/demo-cluster-physical-worker.yaml")]),a._v(" 下物理集群属性模板的变量，包括 "),e("code",[a._v("$suffix")]),a._v("、"),e("code",[a._v("$api-server")]),a._v(" 和 "),e("code",[a._v("$kubeconfig")]),a._v("。")])]),a._v(" "),e("blockquote",[e("p",[a._v("物理集群属性模板的注释和示例，详情参考 "),e("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#注册物理集群"}},[a._v("注册物理集群")]),a._v("。")],1)]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("下载 "),e("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令行工具"),e("OutboundLink")],1),a._v("，执行以下命令，以删除物理集群。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("nautes remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-cluster-physical-worker.yaml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),e("h3",{attrs:{id:"删除虚拟集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除虚拟集群"}},[a._v("#")]),a._v(" 删除虚拟集群")]),a._v(" "),e("blockquote",[e("p",[a._v("请确保已成功注册虚拟集群。")])]),a._v(" "),e("ol",[e("li",[a._v("将命令行程序的代码库克隆到本地。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/nautes-labs/cli.git\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("替换位于相对路径 "),e("code",[a._v("examples/demo-cluster-virtual-worker.yaml")]),a._v(" 下的虚拟集群属性模板的变量，包括 "),e("code",[a._v("$suffix")]),a._v("、"),e("code",[a._v("$api-server")]),a._v("、"),e("code",[a._v("$host-cluster")]),a._v(" 和 "),e("code",[a._v("$api-server-port")]),a._v("。")])]),a._v(" "),e("blockquote",[e("p",[a._v("虚拟集群属性模板的注释和示例，详情参考 "),e("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#注册虚拟集群"}},[a._v("注册虚拟集群")]),a._v(" 的第4步。")],1)]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("下载 "),e("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令行工具"),e("OutboundLink")],1),a._v("，执行以下命令，将删除虚拟集群。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("nautes remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-cluster-virtual-worker.yaml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("替换位于相对路径 "),e("code",[a._v("examples/demo-cluster-host.yaml")]),a._v(" 下的宿主集群属性模板的变量，包括 "),e("code",[a._v("$suffix")]),a._v("、"),e("code",[a._v("$api-server")]),a._v(" 和 "),e("code",[a._v("$kubeconfig")]),a._v("。")])]),a._v(" "),e("blockquote",[e("p",[a._v("宿主集群属性模板的注释和示例，详情参考 "),e("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#注册虚拟集群"}},[a._v("注册虚拟集群")]),a._v(" 的第2步。")],1)]),a._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[a._v("执行以下命令，以删除宿主集群。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("nautes remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-cluster-host.yaml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);