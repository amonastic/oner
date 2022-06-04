import express from 'express';
import * as postConroller from './post.controller';
//* as表示导入所有文件
import { requestUrl } from '../app/app.middleware';

//创建并定义一些接口
const router = express.Router();

/**
 * 定义内容列表接口
 */

router.get('/posts', requestUrl, postConroller.index);
//第一个是处理器的位置，设置为posts，第二个是处理器，后面会定义其他的接口
//导入的中间件放在处理器位置和处理器中间

/**
 * 导出路由router，默认导出
 */
export default router;