<template>
  <div class="container px-2">
    <div>
      <mt-swipe :auto="4000"  style="height:200px">
        <mt-swipe-item v-for="(item,i) in imgList" :key="i">
          <img :src="`${baseURL}/${item.img}`" width="100%" height="100%">
        </mt-swipe-item>        
      </mt-swipe>
    </div>
    <h5>-商品推荐-</h5>
    <div class="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item >
                <img src="../cp/x6.jpg">
            </mt-swipe-item>
        </mt-swipe>
    </div> 
     <p></p>
    <!--新品上架开始-->
    <h5>-新品上架-</h5>
    <div class="row p-3 d-flex flex-warp justify-content-between">  
        <img src="../cp/x4.jpg" style="width:46%;border-radius:5px" class="border m-1 p-1">
        <img src="../cp/x3.jpg" style="width:46%;border-radius:5px" class="border m-1 p-1">
        <img src="../cp/x2.jpg" style="width:46%;border-radius:5px" class="border m-1 p-1">
         <img src="../cp/x1.jpg" style="width:46%;border-radius:5px" class="border m-1 p-1">    
    </div>
    <!--新品上架结束-->
    <h5>-销售Top-</h5> 
    <div class="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item >
                <img src="../cp/x4.jpg">
            </mt-swipe-item>
        </mt-swipe>
    </div> 
    <router-link to="/messagelist">新闻列表</router-link>
  </div>
</template>

<script>

import {getCarouselList} from "@/assets/js/apis/index.js" //导入接口
import {baseURL} from "@/assets/js/apis/product.js" //导入接口

export default {  
  data(){
    return {
        imgList:[],
        baseURL:baseURL,
    }
  },  
  created(){
    this.loadCarouselList();
  },
  methods:{
    async loadCarouselList(){
      let result= await getCarouselList();
      console.log(result);
      this.imgList = result;
    }
  },

  components:{
  },
 
};
</script>

<style scoped>
.swiper {
      margin-top: 1px;
      height: 10rem;
}
   img {
        width: 90%;
        height: 10rem;
      }
    
</style>
