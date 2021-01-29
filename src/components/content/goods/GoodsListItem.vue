<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt=""> <!-- 商品图片 -->
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
    }
  }
</script>

<style scoped>
  /* 小组件的样式文件 */
</style>
