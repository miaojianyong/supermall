<template>
  <!-- 监听小商品页卡的点击 -->
  <div class="goods-item" @click="itemClick">
    <!-- @load="方法名" 表示监听图片加载完后 触发 -->
    <img :src="showImage" alt="" @load="imageLoad"> <!-- 商品图片 -->
    <img v-lazy="showImage" @load="imageLoad"><!-- 图片懒加载方式 -->
    <div class="goods-info">
      <p>{{goodsItem.title}}</p> <!-- 商品描述 -->
      <span class="price">{{goodsItem.price}}</span> <!-- 商品价格 -->
      <span class="collect">{{goodsItem.cfav}}</span> <!-- 商品收藏 -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: { // 接收商品大组件传递过来的数据
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {// 创建计算属性
      // 设置获取图片的两种方式
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.image;
      }
    },
    methods: {
      imageLoad() { // 实现图片加载完成后方法
        // 方式1 在实现监听该事件的文件中取消该事件的监听
        this.$bus.$emit('itemImageLoad');
        // 方式2
        /* // 判断路由 如果是首页就发送首页相关事件
        // 如果是详情页就方式详情页相关事件 即不让着两个事件冲突
        if (this.$route.path.indexOf('/home')) {
          // 使用事件总线管理事件 发送事件(图片加载完成事件)
          this.$bus.$emit('homeItemImageLoad');
        } else if (this.$route.path.indexOf('/detail')) {
          // 使用事件总线管理事件 发送事件(图片加载完成事件)
          this.$bus.$emit('detailItemImageLoad');
        } */
      },
      itemClick() { // 实现商品页卡的点击
        // 点击后，跳转到对应商品的详情页 push()可返回
        // 使用动态路由的方式传递参数
        this.$router.push('/detail/' + this.goodsItem.iid);
      }
    }
  }
</script>

<style scoped>
  /* 小组件的样式文件 */
</style>
