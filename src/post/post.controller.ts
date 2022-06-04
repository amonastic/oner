import { Request, Response, NextFunction } from "express";
//这是接口处理器参数需要的类型

/**
 * 内容列表：定义一个函数，作为其处理器index
 */
export const index = (
    request: Request,
    response: Response,
    next: NextFunction  //next是一个函数
) => {
    response.send('内容列表接口');
};