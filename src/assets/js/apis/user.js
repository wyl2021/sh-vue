import {axios} from "../config.js" //导入axios

//登录
async function Login(user){  //定义异步函数
    try{ 
        let result = await axios.post("/user/login",user); //uname  upwd        
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}

//注册
async function register(user){  //定义异步函数
    try{ 
        let result = await axios.post("/user/register",user); //uname  upwd        
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}

//注销
async function Delete(params){  //定义异步函数
    try{ 

       console.log(params)
        let result = await axios.get("/user/Delete",{params}); //uname  upwd        
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     s
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}

//退出
async function Logout(){  
    try{ 
        let result = await axios.get("/user/logout");         
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}

//获取用户列表
async function getUserList(params){  
    try{ 
        let result = await axios.get("/user/list",{params});   //{params:{}}   可选参数pno  pageSize   
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}
export {Login,Logout,getUserList,register,Delete}    //导出接口名