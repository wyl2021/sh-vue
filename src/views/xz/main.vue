<template>
  <!-- 已登录 -->
  <!-- <div v-if="isLogin"> -->
    <div v-if="isLogin">
    <div class="member">
      <div class="user-info">
        <div class="avatar">
           <img src="@/assets/images/ic_contacts_normal.png" class="image-info" />
          <!-- <img :src="`${item.avatar}`" class="image-info" /> -->
        </div>
        <div class="text-info">
          <span>dingding</span>
          <!-- <span>{{ uname }}</span> -->
        </div>
      </div>
    </div>
    <div class="member d-flex justify-content-between">
    <div >
      <router-link :to="{ name: 'order_list' }" class="mui-navigate-right">
        <img width="60" height="60" src="@/assets/images/ic_emoji.png" />
        <div class="">我的订单</div>
      </router-link>
    </div>
    <div>
      <router-link :to="{ name: 'address' }" class="mui-navigate-right">
        <img width="60" height="60" src="@/assets/images/ic_settings.png" />
        <div class="mui-media-body">收货地址</div>
      </router-link>
    </div>
    <div>
       <router-link :to="'/login'" class="mui-navigate-right">
        <img width="60" height="60" src="@/assets/images/ic_shake.png" />
        <div class="mui-media-body">退出登录</div>
      </router-link>
    </div>
    </div>
  </div>
  
</template>

<script>
//import { mapState } from "vuex"; // mapGetters
// import {mapState} from "@/assets/js/apis/user.js" //导入接口


export default {
  data() {
    return {
      isLogin: true,
    };
  },
  computed: {
     //mapState(){
   
     //},
  },
  methods: {
    // logout() {
    //   this.$http.get("logout");
    //   this.$store.commit("user/logout");
    //   this.$auth.setAuthorization("");
    //   this.$toast("退出成功");
    // },
  },
};
</script>

<style >
.member {
  margin-top: 15px;
  padding: 10px;
  background-color: #fff;
}
  .user-info {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 120px;
    background: linear-gradient(90deg, #28a2ff, #ffd787);
    box-shadow: 0 0.1rem 0.25rem #f8e3c6;
  }
    .avatar {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);

      width: 80px;
      height: 80px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 15);
      border: 1px solid hsla(0, 0%, 100%, 0.4);
      border-radius: 50% 50%;}
      .image-info {
        width: 100%;
        height: 100%;
      }
    

    .text-info {
      position: absolute;
      left: 120px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 24px;
      color: rgb(65, 16, 241);
    }
  

</style>
