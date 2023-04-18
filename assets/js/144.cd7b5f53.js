(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{416:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"维护环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#维护环境"}},[t._v("#")]),t._v(" 维护环境")]),t._v(" "),a("p",[t._v("在开始本节之前，请确保您已阅读 "),a("RouterLink",{attrs:{to:"/en/guide/user-guide/main-process.html"}},[t._v("主体流程")]),t._v(" 章节，了解部署应用的主体流程和相关术语。")],1),t._v(" "),a("p",[t._v("环境是使用集群（目前只支持 Kubernetes集群）来承载产品中各个项目的集成和部署的管理单元。一个产品包含多个环境，如：开发环境、测试环境、预生产环境和生产环境等。")]),t._v(" "),a("p",[t._v("支持通过 "),a("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#准备运行环境"}},[t._v("命令行")]),t._v(" 和 API 两种方式维护环境。")],1),t._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),a("h3",{attrs:{id:"创建-access-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-access-token"}},[t._v("#")]),t._v(" 创建 access token")]),t._v(" "),a("p",[t._v("您需要创建一个 access token，作为请求 API 的请求头。详情参考"),a("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#注册-gitlab-账号"}},[t._v("注册 GitLab 账号")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"导入证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入证书"}},[t._v("#")]),t._v(" 导入证书")]),t._v(" "),a("p",[t._v("如果您想使用 https 协议访问 Nautes API Server，请"),a("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#导入证书"}},[t._v("导入证书")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"创建产品"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建产品"}},[t._v("#")]),t._v(" 创建产品")]),t._v(" "),a("p",[t._v("由于环境归属于产品，您需要创建至少一个"),a("RouterLink",{attrs:{to:"/en/guide/user-guide/product.html"}},[t._v("产品")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"注册运行时集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册运行时集群"}},[t._v("#")]),t._v(" 注册运行时集群")]),t._v(" "),a("p",[t._v("由于环境需要关联运行时集群才能负载产品的运行时环境，您需要注册至少一个"),a("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#注册运行时集群"}},[t._v("运行时集群")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"创建和更新环境-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建和更新环境-api"}},[t._v("#")]),t._v(" 创建和更新环境（API）")]),t._v(" "),a("ol",[a("li",[t._v("通过接口定义 "),a("code",[t._v("Environment_SaveEnvironment")]),t._v("  生成 API 请求示例，并添加 access token 作为请求头。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $api-server-address 为 Nautes API Server 的访问地址")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $gitlab-access-token 为 GitLab 访问令牌")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $product_name，环境所属产品的名称")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $environment_name，环境名称    ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/products/$product_name/environments/$environment_name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n      # 环境关联的运行时集群\n      "cluster": $cluster_name,\n      # 环境类型\n      "env_type": $env_type\n    }\'')]),t._v("\n")])])]),a("p",[t._v("替换变量后的请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n      "cluster": "cluster-dev",\n      "env_type": "development"\n    }\'')]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用 curl 命令或者其他工具执行 API 请求，以新增环境。"),a("br"),t._v("\n请求成功后，将在指定产品的 "),a("code",[t._v("default.project")]),t._v(" 代码库中生成环境的资源文件。环境的资源文件示例如下：")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nautes.resource.nautes.io/v1alpha1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Environment\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nautes\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cluster-dev"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("envType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("product")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nautes-labs"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("相同产品内，相同的运行时集群不能重复关联不同的环境。")]),t._v(" "),a("p",[t._v("当环境已经负载了产品的部署运行时环境，暂不支持变更环境的关联集群。")]),t._v(" "),a("p",[t._v("请求 API 更新环境也将更新环境的资源文件。")]),t._v(" "),a("p",[t._v("只有当您的账号是 GitLab 的 group 成员，并且有 "),a("code",[t._v("default.project")]),t._v("  代码库的 main 分支的写入权限，才可以创建或者更新环境。")])]),t._v(" "),a("h2",{attrs:{id:"删除环境-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除环境-api"}},[t._v("#")]),t._v(" 删除环境（API）")]),t._v(" "),a("blockquote",[a("p",[t._v("在删除环境之前，请先删除与环境关联的所有相关实体和资源，例如：部署运行时等，否则将不能执行删除。")])]),t._v(" "),a("ol",[a("li",[t._v("通过接口定义 "),a("code",[t._v("Environment_DeleteEnvironment")]),t._v(" 生成 API 请求示例，并添加 access token 作为请求头。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/products/$product_name/environments/$environment_name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v("\n")])])]),a("p",[t._v("替换变量后的请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用 curl 命令或者其他工具执行 API 请求，以删除环境。"),a("br"),t._v("\n请求成功后，将删除在指定产品的 "),a("code",[t._v("default.project")]),t._v("  代码库中的环境资源文件。")])]),t._v(" "),a("blockquote",[a("p",[t._v("只有当您的账号是 GitLab 的 group 成员，并且有 "),a("code",[t._v("default.project")]),t._v("  代码库的 main 分支的写入权限，才可以删除环境。")])]),t._v(" "),a("h2",{attrs:{id:"查询环境列表-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询环境列表-api"}},[t._v("#")]),t._v(" 查询环境列表（API）")]),t._v(" "),a("ol",[a("li",[t._v("通过接口定义 "),a("code",[t._v("Environment_ListEnvironments")]),t._v(" 生成 API 请求示例，并添加 access token 作为请求头。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/products/$product_name/environments'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v("\n")])])]),a("p",[t._v("替换变量后的请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用 curl 命令或者其他工具执行 API 请求，以查询环境列表。"),a("br"),t._v("\n请求成功后，将返回环境列表。环境列表的返回值示例如下：")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"items"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"product"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nautes-labs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env-dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"cluster"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cluster-dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"env_type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("只有当您的账号是 GitLab 的 group 成员，并且有 "),a("code",[t._v("default.project")]),t._v("  代码库的 main 分支的读取权限，才可以查询环境列表。")])]),t._v(" "),a("h2",{attrs:{id:"查询环境详情-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询环境详情-api"}},[t._v("#")]),t._v(" 查询环境详情（API）")]),t._v(" "),a("ol",[a("li",[t._v("通过接口定义 "),a("code",[t._v("Environment_GetEnvironment")]),t._v(" 生成 API 请求示例，并添加 access token 作为请求头。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/products/$product_name/environments/$enviroment_name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v("\n")])])]),a("p",[t._v("替换变量后的请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用 curl 命令或者其他工具执行 API 请求，以查询环境详情。"),a("br"),t._v("\n请求成功后，将返回指定产品的环境详情。环境详情的返回值示例与"),a("a",{attrs:{href:"#%E6%9F%A5%E8%AF%A2%E7%8E%AF%E5%A2%83%E5%88%97%E8%A1%A8"}},[t._v("查询环境列表")]),t._v("类似，不再赘述。")])]),t._v(" "),a("blockquote",[a("p",[t._v("只有当您的账号是 GitLab 的 group 成员，并且有 "),a("code",[t._v("default.project")]),t._v("  代码库的 main 分支的读取权限，才可以查看环境详情。")])]),t._v(" "),a("h2",{attrs:{id:"强制创建-更新-删除环境-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制创建-更新-删除环境-api"}},[t._v("#")]),t._v(" 强制创建/更新/删除环境（API）")]),t._v(" "),a("p",[t._v("适用于需要跳过 API 校验的特殊场景，详情参见"),a("RouterLink",{attrs:{to:"/en/guide/user-guide/code-repo.html#强制创建更新删除代码库api"}},[t._v("强制创建/更新/删除代码库")]),t._v("。")],1),t._v(" "),a("p",[t._v("以创建环境为例，将 cluster 属性设置为不存在的 cluster，启用 "),a("code",[t._v("insecure_skip_check")]),t._v(" 查询参数并设置其值为 true，可以强制提交环境的资源文件。 请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-demo?insecure_skip_check=true'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n      "cluster": "cluster-invalid",\n      "env_type": "development"\n    }\'')]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);