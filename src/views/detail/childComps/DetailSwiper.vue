<template>
  <swiper class="detail-swiper"> <!-- 添加类给整个轮播图设置样式 -->
    <!-- v-for 遍历传递过来的数据 动态生成下述图片个数 -->
    <swiper-item 
        v-for="item in topImages" >
      <!-- :src="item" 动态生成上述遍历的图片 -->
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  // 导入公共的轮播图组件
  import {Swiper, SwiperItem} from 'components/common/swiper';
  export default {
    name: 'DetailSwiper',
    components: { // 注册导入的轮播图组件
      Swiper,
      SwiperItem
    },
    props: { // 接收父组件传递过来的数据
      topImages: { // 定义传递过来的数据名称 类型 默认值
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>