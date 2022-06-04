import { Request, Response, NextFunction } from 'express';
//这是接口处理器参数需要的类型
import { getPosts } from './post.service';

/**
 * 内容列表：定义一个函数，作为其处理器index
 */
export const index = (
    request: Request,
    response: Response,
    next: NextFunction  //next是一个函数
) => {
    if (request.headers.authorization !== 'SECRET') {
        return next(new Error());
        //这里加了return，不加会继续处理接口处理器的其他代码
    }
    const posts = getPosts();
    //这个函数会返回一组内容列表
    response.send(posts);
    //index的定义可导出，即这个主体在其他地方可导入，比如定义接口的文件导入此方法作为处理器
};