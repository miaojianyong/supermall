<template>
  <div id="home">
    <!-- 使用 导航组件 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 使用 轮播图处理组件
    :banners="banners" 传递网络请求的数据给该组件 -->
    <home-swiper :banners="banners"/>
    <!-- 使用 推荐信息展示处理组件 -->
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  // 导入 导航组件
  import NavBar from "components/common/navbar/NavBar";
  // 导入 轮播图组件处理文件
  import HomeSwiper from "./childComps/HomeSwiper";
  // 导入 推荐信息展示组件处理文件
  import RecommendView from "./childComps/RecommendView";
  // 导入 首页的网络请求处理文件
  import {getHomeMultidata} from 'network/home'
  export default {
    name: "Home",
    components: { // 注册组件
      NavBar,
      HomeSwiper,
      RecommendView
    },
    // 函数调用 -> 压入函数栈（保存函数调用过程中所有变量）
    // 函数调用结束 -> 弹出函数栈（释放函数所有的变量 即删除所有变量）
    // 故 下述中网络请求的函数，需保存起来
    data() { // 存储下述网络请求过来的数据
      return { // 调用变量接收网络请求的指定的数据
        banners: [], // 轮播图数据
        recommends: [] // 推荐信息数据
      }
    },
    created() { // 生命周期函数，即组件创建完成后
      /* 发送网络请求 */
      // 1. 请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res); 请求来的数据
        this.banners = res.data.banner.list; // 轮播图数据
        this.recommends = res.data.recommend.list; // 推荐信息数据
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint); /* 使用公共css文件中的变量设置颜色 */
    color: #fff; /* 设置文字颜色 */
  }
</style>
