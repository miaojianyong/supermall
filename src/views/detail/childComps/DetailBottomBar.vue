<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addToCart() { // 实现加入购物车按钮的点击
        this.$emit('addCart'); // 发送事件
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #fff;
    position: relative;
  }
  /* 下述相关样式 */
</style>