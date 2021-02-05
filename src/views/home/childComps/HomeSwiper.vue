<template>
  <!-- 使用 轮播图组件 -->
  <swiper>
    <!-- swiper-item组件的个数是请求来的数据决定的故不能写死 -->
    <swiper-item v-for="(item, index) in banners" :key="index">
      <!-- 每个轮播图都可点击故使用a标签 对应的地址动态绑定 -->
      <a :href="item.link">
        <!-- 对应的图片地址也是动态绑定 -->
        <img :src="item.image" alt="" @load="imageLoad"> <!-- 监听图片加载 -->
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
    data() {
      return {
        isLoad: false, // 记录图片加载事件状态
      }
    },
    components: { // 注册组件
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad() {
        if (!this.isLoad) {
          // 把事件发送出去
          this.$emit('swiperImageLoad');
          this.isLoad = true; // 事件发送后，改变上述状态，就不再发送事件
        }
      }
    }
  }
</script>

<style scoped></style>
