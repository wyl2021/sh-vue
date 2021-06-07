import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "@/views/xz/Product.vue"
import Login from "@/views/xz/Login.vue"
import MessageList from "@/views/xz/MessageList.vue"
import Cart from "@/views/xz/Cart.vue"
import register from "@/views/xz/register.vue"
import Delete from "@/views/xz/Delete.vue"
import main from "@/views/xz/main.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "首页" }
  },

  {
    path: "/messagelist",  
    component: MessageList,
    meta: { title: "首页" }
  },

  {
    path: "/product",
    component: Product,
    meta: { title: "商品" }
  },
  {
    path: "/login", component: Login,
    meta: { title: "登录" }
  },
  {
    path: "/cart", component: Cart,
    meta: { title: "购物车" }
  },
  {
    path: "/register", component: register,
    meta: { title: "注册" }
  },
  {
    path: "/Delete", component: Delete,
    meta: { title: "注销" }
  },
  {
    path: "/main", component: main,
    meta: { title: "用户" }
  }
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
