<template>
  <div id="app">
    <!-- 让该组件包裹下述组件 下述组件内容会保留下来 不会被销毁
    exclude="Detail" 表示排除了详情组件 -->
    <keep-alive exclude="Detail"> 
      <router-view/> <!-- 使用router-view标签让每个页面的内容渲染出来 -->
    </keep-alive>
    <mian-tab-bar/> <!-- 使用组件 -->
  </div>
</template>

<script>
  // 导入 MainTabBar 组件
  import MianTabBar from "components/content/mainTabbar/MianTabBar";
  export default {
    name: 'app',
    components: {
      MianTabBar // 注册组件
    }
  }
</script>

<style>
  /* 导入公共的css文件 */
  @import "assets/css/base.css";
</style>
