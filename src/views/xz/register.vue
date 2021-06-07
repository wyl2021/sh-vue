<template>
  <div>
      <!-- 学子商城的一些功能实现.... -->
      <div class="page-title" color="#17a2b8">
      <h3>用户注册</h3>
      </div>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
      <mt-field label="密码" placeholder="请输入密码"  v-model="upwd"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱"  v-model="email"></mt-field>
      <mt-field label="手机" placeholder="请输入手机号码"  v-model="phone"></mt-field>
    
      <mt-button type="primary"  @click="register">注册</mt-button>
      <router-link  to="/Delete">注销</router-link>
      <!-- <mt-button  type="primary"  @click="Delete">注销</mt-button> -->
  </div>  
  
</template>

<script>
 import {register} from "@/assets/js/apis/user.js" //导入接口
export default {
    data(){
        return {
            uname:"",
            upwd:"",
            email:"",
            phone:"",
        }
    },
    methods:{
  
        async register(){
            var uname = this.uname;
            var upwd = this.upwd;
            var email = this.email;       
            var phone = this.phone;
           
           
            //要对数据进行验证 uname upwd...
            var reg1 = /^[a-z0-9]{3,12}$/i; //正则表达式
            var reg2 = /^[a-z0-9]{3,12}$/i; //正则表达式
            var reg3 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ; //正则表达式
            var reg4 = /^1[0-9]{10}$/i; //正则表达式
            
           
            
            //验证用户名，不合格则提示后返回
            if(!reg1.test(uname)){
                this.$messagebox("错误","输入的用户名格式不正确")
                return;
            }
             if(!reg2.test(upwd)){
                this.$messagebox("错误","输入的密码格式不正确")
                return;
            }
            //验证用户密码，不合格则提示后返回
            if(!reg3.test(email)){
                this.$messagebox("错误","输入的邮箱格式不正确")
                return;
            }
            if(!reg4.test(phone)){
                this.$messagebox("错误","输入的手机号码不正确")
                return;
            }
         
           
            
            var user={uname,upwd,email,phone};
            this.$indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            let result = await register(user);
            this.$indicator.close();
            //console.log(result); //仅仅是测试看看返回是一个什么样数据
            if(result.code==200)
            {   //登录成功，跳转到登录
                this.$router.push("/login");
            }else{
                this.$messagebox("错误",result.msg)
            }
        }
    }
}
</script>

<style>

</style>
