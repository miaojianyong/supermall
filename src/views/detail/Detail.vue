<template>
  <div id="detail">
    <detail-nav-bar/> <!-- 使用导航子组件 -->
    <!-- 使用轮播图子组件
    :top-images 动态传入轮播图数据 -->
    <detail-swiper :top-images="topImages"/> 
  </div>
</template>

<script>
  // 导入导航栏组件
  import DetailNavBar from './childComps/DetailNavBar';
  // 导入轮播图子组件
  import DetailSwiper from './childComps/DetailSwiper';
  // 导入详情页网络请求函数
  import {getDetail} from 'network/detail';
  export default {
    name: 'Detail',
    components: { // 注册子组件
      DetailNavBar,
      DetailSwiper 
    },
    data() {
      return {
        iid: null, // 保存对应商品id
        topImages: [], // 保存顶部轮播图数据
      }
    },
    created() {
      // 1. 保存传入的iid
      // 拿到路由传递过来的参数 即地址栏后面的参数 给上述保存的商品id
      this.iid = this.$route.params.id;
      // 2. 根据iid请求详情页数据
      getDetail(this.iid).then(res => {
        // console.log(res); 输出请求过来的数据
        // 1. 获取顶部的轮播图数据
        this.topImages = res.result.itemInfo.topImages;
      })
    }
  }
</script>

<style scoped>

</style>