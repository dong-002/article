### 介绍

这个案例使用了uniapp的云服务，里面有云数据库和云存储，可以通过云函数控制云数据库，不用后端也可以开发完一个完整的项目。

学习来源：[https://gitee.com/qingnian8/uniall/tree/master/uniCloudBase]

主要是使用了uniapp原来的form表单和unifilepicker上传插件，结果如下：

![](https://dong-image.oss-cn-guangzhou.aliyuncs.com/image/image-20231007221447245.png)

### 打包踩坑

在进行小程序打包的时候遇到一些问题，首先在`manifest.json`中把你的小程序APPID写上，然后点击发行选择微信小程序，它会自动打开小程序开发者工具。

在设置中取消不校验合法域名，把控制台报错的域名添加到微信小程序的域名配置中。

![](https://dong-image.oss-cn-guangzhou.aliyuncs.com/image/image-20231007222724804.png)

控制台报错只是request中的` https://api.next.bspapp.com`域名，这样上传首页不显示数据。后面添加了`https://bsppub.oss-cn-shanghai.aliyuncs.com`和`https://cos.ap-shanghai.myqcloud.com`首页才显示数据。