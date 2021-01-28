<template>
  <div id="tab-bar">
    <!-- 设置插槽动态设置TabBarItem组件的个数 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "TabBar"
}
</script>

<style scoped>
  #tab-bar { /* 给对应元素添加flex属性 */
    display: flex;
    background-color: #f6f6f6;
    position: fixed; /* 设置固定定位 */
    left: 0;
    right: 0;
    bottom: 0; /* 让其设置到底部 */
    box-shadow: 0 -1px 1px rgba(100,100,100,.2); /* 设置阴影 */
  }
</style>
