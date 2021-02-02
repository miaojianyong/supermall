<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // 引入 better-scroll 滚动创建
  import BScroll from 'better-scroll';
  export default {
    name: "Scroll",
    props: { // 记录当前组件参数 或接受外部组件参数
      probeType: { // 定义实时监听更多属性
        type: Number,
        default: 0 // 0和1默认是不实时监听滚动位置的
      },
      pullUpLoad: { // 定义上拉事件属性
        type: Boolean,
        default: false
      }
    },
    data() { // 保存better-scroll状态
      return {
        scroll: null
      }
    },
    mounted() { // 生命周期函数，当上述标签显示在页面中后，调用
      /* 1. 创建BScroll对象 */
      // this.$refs.wrapper 获取上述div标签
      this.scroll = new BScroll(this.$refs.wrapper, {
        observeDOM: true, // 该属性解决页面不可滚动的问题
        click: true, // 让其他组件的内容 也实现可点击 如首页的商品分类按钮
        probeType: this.probeType, // 获取上述设置的实时监听滚动位置属
        pullUpLoad: this.pullUpLoad, // 获取上述设置的上拉事件属性
      });
      /* 2. 监听滚动的位置 */
      this.scroll.on('scroll', (position) => {
        // 把监听实时滚动的自定义事件传递出去 让其他组件使用
        this.$emit('scroll', position);
      });
      /* 3. 监听上拉事件 */
      this.scroll.on('pullingUp', () => {
        // 把监听上拉自定义事件传递出去
        this.$emit('pullingUp');
      })
    },
    methods: {
      scrollTo(x, y, time=300) { // 定义函数 实现返回顶部
        // 上述的 time=300 表示该参数的默认值
        // 下述的 scrollTo()参数1和2 表示x和y的坐标位置 参数3 是时间 毫秒
        this.scroll.scrollTo(x, y, time);
      },
      finishPullUp() { // 封装再次加载更多函数
        this.scroll.finishPullUp(); // 再次实现上拉加载事件
      }
    }
  }
</script>

<style scoped></style>
