<template>
  <div class="goods"> <!-- 遍历首页传递过来的数据 并给商品小组件中传递数据 -->
    <goods-list-item v-for="item in goods" :goods-item = "item"/>
  </div>
</template>

<script>
  // 引入 单个商品展示小组件
  import GoodsListItem from './GoodsListItem';
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: { // 接收首页传递过来的数据
      goods:{
        type: Array,
        default() {
            return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex; /* 小组件的内容会在一行显示 */
    flex-wrap: wrap; /* 小组件的内容换行显示 -- 根据小组件的大小 */
    justify-content: space-around; /* 让小组件 拼接分配在 一行中 */
  }
</style>
