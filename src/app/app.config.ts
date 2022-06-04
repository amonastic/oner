import dotenv from 'dotenv';

dotenv.config();
//这个方法默认会载入dotenv这个文件定义的环境变量

/**
 * 应用配置
 */
export const {APP_PORT} = process.env;
//使用解构方法将APP_PORT从process.env导出，然后APP_PORT就可以在别的地方导入了，创建web服务的时候要用这个值
