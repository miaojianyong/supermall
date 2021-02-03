<template>
  <!-- 在小组件内部监听每个按钮的点击 -->
  <div class="tab-bar-item" @click="itemClick">
    <!--<img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div>-->
    <!-- 动态生成上述的icon和下面的文字 故使用插槽
    下是添加name属性表示是具名插槽 -->
    <!-- 因为slot中的内容都会被替换，故需要添加属性、判断等操作可以在外层的div中进行-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot> <!-- 填充icon 未选中状态 -->
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot> <!-- 填充icon 选中状态 -->
    </div>
    <!-- <div :class="{active: isActive}"> 设置选中时文字颜色
      <slot name="item-text"></slot>  填充文字
    </div> -->
    <!-- 动态设置选中时文字颜色 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: { // 设置接收的参数
      path: String, // 类型是字符串
      activeColor: { // 选中时按钮文字颜色 动态决定文字颜色
        type: String, // 字符串类型
        default: 'red' // 默认参数是red
      }
    },
    data() { // 设置icon默认是不选中的
      return {
        // isActive: false
      }
    },
    computed:{ // 创建计算属性
      isActive() { // 动态设置是否选中
        // $route是被选中时的路由
        // path是当前选中时的路由，如：/home
        // !== -1 表示 $route.path 和 this.path 相等 即isActive为true
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() { // 动态设置选中时文字的颜色样式
        // 如果选中 就是上述activeColor(默认的red或用户传递过了)的颜色 否则不做操作
        return this.isActive ? {color: this.activeColor} : {};
      }
    },
    methods: {
      itemClick() { // 实现按钮的点击
        this.$router.replace(this.path); // 每一个按钮是不同的path
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1; /* 设置flex为1，即平均分配 */
    text-align: center; /* 让每个元素水平居中*/
    height: 49px; /* 设置每个元素的高度*/
    font-size: 14px;
  }
  .tab-bar-item img { /* 设置图片大小 */
    width: 24px;
    height: 24px;
    margin-top: 3px; /* 设置icon距离顶部的距离 */
    vertical-align: middle; /* 让icon和下面的div去掉间距*/
    margin-bottom: 2px; /* 设置icon距离底部的距离 */
  }
  /*.active {
    color: #d81e06;
  }*/
</style>
