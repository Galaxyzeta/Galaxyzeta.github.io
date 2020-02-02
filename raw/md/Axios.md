# Axios 跨域访问教程

<configuration tag='456'>

1. 创建一个 vue 项目 `vue init webpack [项目名称]`
2. 安装axios，在项目根目录下，运行 `npm install axios`
3. config 下的 index.js 中的 proxytable 按如下方式配置：

```js
proxyTable: {
    //api表示处理api开头的请求
      '/api': {
        //访问的目标是老王的个人网站，端口8080
        target:'http://hades300.top:8080',
        //允许跨域访问
        changeOrigin:true,
        //路径重写
        pathRewrite:{
          '^/api': ''
        }
      }
    },
```

4. main.js 中，`import axios from 'axios'`
5. main.js 中，在 `new vue({...})` 下面写：

```js
axios.defaults.baseURL = '/api'		//默认的axios请求路径为/api
axios.get("/deal")
.then(function(response){console.log(response)})
.catch(function(error){console.log(error)})
/*
过程：
/deal 转化为 /api/deal
由于配置文件中，proxytable 配置了 /api 的处理方式是把 /api 重写为空白，所以转化为
http://hades300.top:8080/deal
由于发出请求方域名localhost 收到方域名为hades300.top 存在 跨域 现象
设置changeOrigin为true后，可以进行跨域访问
在浏览器F12看控制台，可以看到反馈的响应response，说明访问已经成功！
*/
```

