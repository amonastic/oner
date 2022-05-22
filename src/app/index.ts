import express from 'express';

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
 * 导出中间件
 */

export default app;