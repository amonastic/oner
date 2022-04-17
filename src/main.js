const http = require('http'); //模块名字 = 导入模块（导入的模块名），可以使用模块名字使用node.js的http功能

//requset：http模块会把请求相关的东西放在这个模块,缩写req
//response：响应相关的东西，缩写res
//两者名字无所谓，顺序很重要

const server = http.createServer((request, Response) => {  //http模块提供的一个方法，把提供的服务放在一个函数中，该函数可以成为createServer方法的一个参数，可以单独定义或者直接添加无名的函数再交给createServer
    request.write('hello ~');  //响应一段文字
    Response.end(); //结束响应

}); 

//设置服务器的监听
server.listen(3000, () => {  //（端口号，函数）
    console.log('🚀 服务已启动');
});  //终端运行，一直在运行没有停止，control+C 停止服务
