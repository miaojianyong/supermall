<template>
  <div class="recommend"> <!-- 根标签 包裹具体展示内容 -->
    <div v-for="item in recommends" class="recommend-item"> <!-- 动态生成推荐信息条数 -->
      <a :href="item.link"> <!-- 因为可以点击故使用a标签 -->
        <img :src="item.image" alt=""> <!-- 动态生成请求来的图片地址 -->
        <div>{{item.title}}</div> <!-- 对应的标题 -->
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: { // 接收首页组件传递过来的网络请求数据
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped> /* 单独设置该模块的样式 */
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 6px 0 10px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 6px;
  }
</style>
