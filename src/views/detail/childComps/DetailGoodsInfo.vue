<template>
  <div v-if="Object.key(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" 
        :key="index" 
        :src="item" @load="imgLoad"> <!-- 监听图片加载完成 -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsInfo',
    props: { // 接收父组件传递来的参数
      detailInfo: {
        type: Object,
      }
    },
    data() {
      return {
        counter: 0, // 记录图片加载数
        imagesLength: 0 // 记录图的总个数
      }
    },
    methods: {
      imgLoad() { // 实现详情子组件图片加载完成代码
        // 判断所有图片都加载完成后，再发生事件 
        // this.counter += 1; 一旦有图片加载完成就会+1 下述是简写
        // this.imagesLength 即表示所有图片
        if (++this.counter === this.imagesLength) {
          this.$emit('imgLoad');
        }
      }
    },
    watch: { // 监听某个属性的变化
      detailInfo() { // 把监听后的属性赋值给上述定义的属性 即图片总长度
        // 获取图片的个数
        this.imagesLength = this.detailInfo.detailImage[0].list.length;
      }
    }
  }
</script>

<style scoped>
  /* 样式部分 */
</style>