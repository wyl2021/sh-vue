<template>
  <!-- 弹性布局 -->
  <div class="row p-3 d-flex flex-warp justify-content-between">
      <div v-for="(item,i) of list" :key="i" style="width:46%;border-radius:5px" class="border m-1 p-1" >
          <!-- 商品图片 -->
          <div >
            <img :src="`${baseURL}/${item.pic}`" class="w-100"/>
          </div>
          <!-- 商品名称 -->
          <div>
            {{item.title}}
          </div>
          <!-- 商品价格 -->
          <div class="font-weight-bold">
            ￥{{item.price}}
          </div>
          <!-- 加入购物车按钮 -->
          <div class="">
            <mt-button @click="addCart(item.lid)">加入购物车</mt-button>
          </div>
      </div>

      <div class="d-flex flex-warp justify-content-between">        
        <!-- <mt-button @click="jumpCart">查看购物车</mt-button> -->
        <mt-button @click="loadMore">加载更多</mt-button>
      </div>
  </div>
</template>

<script>
import {getProductList,baseURL} from "@/assets/js/apis/product.js" //导入接口
import {addCart} from "@/assets/js/apis/cart.js" //导入接口添加购物车接口
export default {
  data(){
    return{
      list:[],//保存服务器返回的商品列表数据
      baseURL:baseURL,
      pno:0,//当前页码
      pageSize:2,//每页个数
    }
  },

  mounted(){  //在加载完了后调用
    this.loadMore();
  },
  methods:{
    jumpCart(){
      this.$router.push("/cart");
    },
    async loadMore(){
      this.pno++;//每次调用页码数加1
      let pno=this.pno;
      let pageSize=this.pageSize;
      let params = {pno,pageSize}
      let result = await getProductList(params)  //异步调用
      console.log(result);//测试用
      if(result.code==300) //需要用户登录（用户没有登录过，用户的seesion已过期）
      {
        this.$router.push("/login");
        return;
      }
      this.list = this.list.concat(result.data) ;//返回商品列表数据追加到数组
    },

    async addCart(lid){
      //创建参数对象（如果有参数需要传递的话）
      let buyCount = 1; //默认每次添加的数量是1
      let params={lid,buyCount};
      //异步调用
      let result = await addCart(params);
      console.log(result);//测试输出
      //处理返回后的数据
      if(result.code==300) //需要用户登录（用户没有登录过，用户的seesion已过期）
      {
        this.$router.push("/login")
        return;
      }

      if(result.code==200){
        this.$toast("添加成功！");
      }else{
        this.$messagebox("添加失败",result.msg);
      }      
    },
  }    
}
</script>
<style>
</style>