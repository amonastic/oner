"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log('🚀 服务已启动！!!');
});
app.get('/', (request, response) => {
    response.send('你好 ~');
});
const data = [
    {
        id: 1,
        title: '关山月',
        content: '明月苍山'
    },
    {
        id: 2,
        title: '关山',
        content: '月出苍山'
    },
    {
        id: 3,
        title: '山月',
        content: '明月出'
    }
];
app.get('/posts', (request, response) => {
    response.send(data);
});
app.get('/posts/:postID', (request, response) => {
    const { postID } = request.params;
    const post = data.filter(item => item.id = postID);
    response.send(post[0]);
});
app.post('/posts', (request, response) => {
    const { content } = request.body;
    response.status(201);
    console.log(request.headers['sing-along']);
    response.set('Sing-Along', 'this is server headers data');
    response.send({
        message: `创建了内容: ${content} `
    });
});
//# sourceMappingURL=main.js.map