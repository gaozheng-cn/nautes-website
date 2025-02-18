---
footerLink: /guide/user-guide/environment
title: 维护环境
---
# 维护环境

在开始本节之前，请确保您已阅读 [主体流程](main-process.md) 章节，了解部署应用的主体流程和相关术语。

环境是使用集群（目前只支持 Kubernetes集群）来承载产品中各个项目的集成和部署的管理单元。一个产品包含多个环境，如：开发环境、测试环境、预生产环境和生产环境等。

支持通过 [命令行](deploy-an-application.md#准备运行环境) 和 API 两种方式维护环境。

## 前提条件
### 创建 access token
您需要创建一个 access token，作为请求 API 的请求头。详情参考[注册 GitLab 账号](deploy-an-application.md#注册-gitlab-账号)。

### 导入证书
如果您想使用 https 协议访问 Nautes API Server，请[导入证书](deploy-an-application.md#导入证书)。

### 创建产品
由于环境归属于产品，您需要创建至少一个[产品](product.md)。

### 注册运行时集群
由于环境需要关联运行时集群才能负载产品的运行时环境，您需要注册至少一个[运行时集群](deploy-an-application.md#注册运行时集群)。

## 创建和更新环境（API）
1. 通过接口定义 `Environment_SaveEnvironment`  生成 API 请求示例，并添加 access token 作为请求头。
```Shell
	# 替换变量 $api-server-address 为 Nautes API Server 的访问地址
	# 替换变量 $gitlab-access-token 为 GitLab 访问令牌
	# $product_name，环境所属产品的名称
	# $environment_name，环境名称    
    curl -X 'POST' \
      'HTTP://$api-server-address/api/v1/products/$product_name/environments/$environment_name' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token' \
      -d '{
      # 环境关联的运行时集群
      "cluster": $cluster_name,
      # 环境类型
      "env_type": $env_type
    }'
```
替换变量后的请求示例如下：
```Shell
    curl -X 'POST' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' \
      -d '{
      "cluster": "cluster-dev",
      "env_type": "development"
    }'
```

2. 使用 curl 命令或者其他工具执行 API 请求，以新增环境。  
请求成功后，将在指定产品的 `default.project` 代码库中生成环境的资源文件。环境的资源文件示例如下：
```yaml
    apiVersion: nautes.resource.nautes.io/v1alpha1
    kind: Environment
    metadata:
        name: env-dev
        namespace: nautes
    spec:
        cluster: "cluster-dev"
        envType: "development"
        product: "nautes-labs"
```

> 相同产品内，相同的运行时集群不能重复关联不同的环境。  
>
> 当环境已经负载了产品的部署运行时环境，暂不支持变更环境的关联集群。  
>
> 请求 API 更新环境也将更新环境的资源文件。
>
> 只有当您的账号是 GitLab 的 group 成员，并且有 `default.project`  代码库的 main 分支的写入权限，才可以创建或者更新环境。  

## 删除环境（API）
> 在删除环境之前，请先删除与环境关联的所有相关实体和资源，例如：部署运行时等，否则将不能执行删除。

1. 通过接口定义 `Environment_DeleteEnvironment` 生成 API 请求示例，并添加 access token 作为请求头。
```Shell
    curl -X 'DELETE' \
      'HTTP://$api-server-address/api/v1/products/$product_name/environments/$environment_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：
```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

2. 使用 curl 命令或者其他工具执行 API 请求，以删除环境。  
请求成功后，将删除在指定产品的 `default.project`  代码库中的环境资源文件。  
> 只有当您的账号是 GitLab 的 group 成员，并且有 `default.project`  代码库的 main 分支的写入权限，才可以删除环境。 


## 查询环境列表（API）
1. 通过接口定义 `Environment_ListEnvironments` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product_name/environments' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments' \
      -H 'accept: application/json'
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```


2. 使用 curl 命令或者其他工具执行 API 请求，以查询环境列表。  
请求成功后，将返回环境列表。环境列表的返回值示例如下：

```yaml
{
    "items": [
        {
            "product": "nautes-labs",
            "name": "env-dev",
            "cluster": "cluster-dev",
            "env_type": "development"
        }
    ]
}
```

> 只有当您的账号是 GitLab 的 group 成员，并且有 `default.project`  代码库的 main 分支的读取权限，才可以查询环境列表。

## 查询环境详情（API）
1. 通过接口定义 `Environment_GetEnvironment` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product_name/environments/$enviroment_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：
```Shell
    curl -X 'GET' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

2. 使用 curl 命令或者其他工具执行 API 请求，以查询环境详情。  
    请求成功后，将返回指定产品的环境详情。环境详情的返回值示例与[查询环境列表](#查询环境列表)类似，不再赘述。
> 只有当您的账号是 GitLab 的 group 成员，并且有 `default.project`  代码库的 main 分支的读取权限，才可以查看环境详情。

## 强制创建/更新/删除环境（API）
适用于需要跳过 API 校验的特殊场景，详情参见[强制创建/更新/删除代码库](code-repo.md#强制创建更新删除代码库api)。

以创建环境为例，将 cluster 属性设置为不存在的 cluster，启用 `insecure_skip_check` 查询参数并设置其值为 true，可以强制提交环境的资源文件。 请求示例如下：

```Shell
    curl -X 'POST' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-demo?insecure_skip_check=true' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -d '{
      "cluster": "cluster-invalid",
      "env_type": "development"
    }'
```