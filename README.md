

## Build Setup

``` bash
下载项目 
git clone https://github.com/kk-87/vue-fullStack.git

安装前端依赖
npm install

安装后端依赖
cd server & npm install

启动mongodb服务器，（要求已安装mongodb数据库并做全局路径配置，这里不做具体叙述,如果已配置开机启动，可忽略此步)
net start mongodb

运行后台服务(这里借助了nodemon工具进行后台自动刷新，方便开发)，浏览器查看http://localhost:3000/ 如出现欢迎语说明后台启动成功。
nodemon app.js


根目录，运行前端程序
npm run dev

打包
npm run build
```

## 比较基础的一个项目，希望大家多提宝贵意见
