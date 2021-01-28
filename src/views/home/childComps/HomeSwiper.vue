<template>
  <!-- 使用 轮播图组件 -->
  <swiper>
    <!-- swiper-item组件的个数是请求来的数据决定的故不能写死 -->
    <swiper-item v-for="item in banners">
      <!-- 每个轮播图都可点击故使用a标签 对应的地址动态绑定 -->
      <a :href="item.link">
        <!-- 对应的图片地址也是动态绑定 -->
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  // 导入 轮播图组件
  import {Swiper, SwiperItem} from 'components/common/swiper';
  export default {
    name: "HomeSwiper",
    props: { // 接收网络请求的数据
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: { // 注册组件
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped></style>
