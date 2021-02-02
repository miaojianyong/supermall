<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
  }
</script>

<style scoped>
  .back-top { /* 设置返回顶部按钮的位置 */
    position: fixed; /* 固定定位 */
    right: 8px;
    bottom: 60px;
  }
  .back-top img { /* 设置返回按钮的图标大小 */
    width: 43px;
    height: 43px;
  }
</style>
