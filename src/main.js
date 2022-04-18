const { write } = require('fs');
const http = require('http');
const server = http.createServer((request, response) => {

//给客户端响应的数据
const data = {
id:1,
title:'关山月',
}

//转换成JSON格式
const jsondata = JSON.stringify(data); //stringify转换JSON的方法，()写入转换的对象

//因为是JSON，所哟告诉客户端这个数据是什么,（状态码200，对象）
response.writeHead (200,{
'content-type':'application/json; charset=utf-8'//头部数据，设置内容类型：类型；utf-8处理中文数据
});

//响应方法以响应jsondata
response.write(jsondata);

response.end(); //结束响应，不然客户端会卡主不动
});

server.listen(3000, () => { 
console.log('🚀 服务已启动');
}); 