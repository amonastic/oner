const greet = () => {
    console.log('你好 ~');  
    //现在我们可以导出定义的这个函数，其他地方这块导入使用这个函数，加上export后就是说明导出定义的内容，现在可以认为这是一个模块
};
//设置默认导出该内容
export default greet;