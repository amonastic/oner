//导入express包
const express = require('express');
//创建一个应用，去执行express
const app = express();
//定义一个服务端口
const port = 3000;

/**
*   使用JSON中间件
*/
//use：在指定的地方使用中间件，若为制定use的内容那么将全局使用，这里指定了express方法
app.use(express.json());

//使用app的listen，内容是监听的端口port，在输入一个函数
app.listen(port, () => {
    console.log('🚀 服务已启动！');
});

//GET方法可以定义一条支持HTTP的GET方法请求的接口，发出请求之后，除了地址还需要说明一个特定的HTTP方法
//使用GET那就只支持get，一般客户端都是使用get发出请求
//设置接口的地址‘/’，即请求使用这个接口
//后面是说明要做的事情，放在接口处理器里面，()-处理器就是一个函数，里面的参数有请求和响应
app.get('/', (request, response) => {
    //使用响应的send方法以响应客户端，响应的数据交给这个方法
    response.send('你好 ~');
});

const data = [
    {
        id:1,
        title:'关山月',
        content:'明月苍山'
    },
    {
        id:2,
        title:'关山',
        content:'月出苍山'
    },
    {
        id:3,
        title:'山月',
        content:'明月出'
    }
];

app.get('/posts', (request, response) => {
    response.send(data);
});

///post/:postId，:后面带的是id，不是子页面，PostID就是参数名字，接口处理器可以通过postID得到参数的值
//可以使用多个参数，使用斜线分割即可
app.get('/posts/:postID', (request, response) => {
    //获取ID,参数都是在params中
    const { postID } = request.params;

    //查找具体的id内容,filter制造出来的是数组
    const post = data.filter(item => item.id = postID );

    //做出响应的是数组的第一个项目，0代表第一个项目
    response.send(post[0]);
});

/**
 * 创建内容
 */

//设置接口和接口内容，设置请求和响应处理器
app.post('/posts', (request, response) => {

    //获取客户端请求数据，body的东西就是客户端在请求里的数据
    const { content } = request.body;

    // 设置响应状态码，在响应之前设置状态码，在send之前
    response.status(201);

    //输出客户端请求的头部数据
    console.log(request.headers['sing-along']);

    //设置响应的头部数据
    response.set('Sing-Along', 'this is server headers data');

//真实应用需要放数据仓库，现在是演示，所以直接响应
    //做出响应，设置响应的对象
    response.send({
        message: `创建了内容: ${ content } `
    });
});