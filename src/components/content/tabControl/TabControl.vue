<template>

  <div class="tab-control">
    <!-- 当前组件在多个地方时候，仅仅是标题文字不同 故可不使用插槽
     让使用放传递标题数组，动态决定标题个数-->
    <!-- 动态绑定类、监听对应标题的点击 -->
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: { // 接收当前组件的标题文字
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0 // 记录当前选中的标题状态
      }
    },
    methods: {
      itemClick(index) { // 监听当前点击的标题 并添加上述状态
        this.currentIndex = index;
        // 向组件外部传递数据 1> 传递的事件名称(自定义) 2> index对应相关索引的按钮
        this.$emit('tabClick', index);
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span { /* 给每个小的span添加内边距 这样下描边长度和距离该span的位置就有所调整了 */
    padding: 5px;
  }
  .active { /* 给添加此类的标题文字设置颜色 */
    color: #d81e06;
  }
  .active span { /* 给对应选中状态的标题添加下描边 */
    border-bottom: 3px solid #d81e06;
  }
</style>
