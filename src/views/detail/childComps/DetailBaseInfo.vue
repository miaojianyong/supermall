<template>
  <!-- v-if="Object.keys(goods).length !== 0" 表示判断父组件传递过来的对象是否一个空对象 -->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div> <!-- 展示标题 -->
    <div class="info-price"> <!-- 展示价格 -->
      <span class="n-price">{{goods.newPrice}}</span><!-- 新价格 -->
      <span class="n-price">{{goods.oldPrice}}</span><!-- 旧价格 -->
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span><!-- 折扣/活动 -->
    </div>
    <div class="info-other"> <!-- 销量 收藏 退货补运费 -->
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service"><!-- 平台服务 7天无理由退款 ... -->
      <!-- goods.services.length-1 这个是一个数字，即v-for也可遍历数字 -->
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: { // 接收父组件传递过来的数据
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  /* 样式部分 */
</style>