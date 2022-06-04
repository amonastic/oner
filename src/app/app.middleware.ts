import { Request, Response, NextFunction, response } from "express";

/**
 * 输出请求里面的地址
 */

export const requestUrl = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.log(request.url);
    next();
    //运行next，这个请求才会让其他的中间件和处理器处理，不然就会卡在这里
};

/**
 * 定义一个默认的异常处理器
 */
export const defaultErrorHandler = (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    let statusCode : number, message: string;
    //let来声明他们，后续要根据不同的情况去设置他们的值
    //statusCode:响应的状态码，num表示未数字，类型是字符串的值，message表示响应的信息
    /**
     * 处理异常
     */
    switch (error.message){
        //检查error的message属性，如果他的值有message，那么error就是异常信息，再做出不同处理
        default:
            statusCode = 500;
            message = '内部系统错误 ~ ';
            break;
    }
    response.status(statusCode).send({message});
    //做出异常的响应，异常状态码、响应数据
};