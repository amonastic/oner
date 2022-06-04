import express from 'express';
import postRouter from '../post/post.router';
import { defaultErrorHandler } from './app.middleware';
/**
 * 创建应用
 */
const app = express();

/**
 * 处理JSON
 */
//usr全局处理json的中间件
app.use(express.json());

/**
 * 使用路由，导入后应用就会包含在postRouter定义的接口中
 */
app.use(postRouter);

/**
 * 默认异常处理，在导出之前做处理
 */
app.use(defaultErrorHandler);

/**
 * 导出中间件
 */

export default app;