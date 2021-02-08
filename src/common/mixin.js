/* 图片加载完成事件监听函数 */
export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('itemImageLoad', () => {
      refresh();
    })
    this.itemImgListener = () => {
      refresh();
    };
  }
}
/* 返回顶部的混入代码 */
// 导入 返回顶部组件 公共组件
import BackTop from "components/content/backTop/BackTop";
export const backTopMixin = {
  components: { // 注册组件
    BackTop
  },
  data() {
    return {
      isShowBackTop: false , // 设置返回顶部按钮的默认值
    }
  },
  methods: {
    backClick() { // 实现监听返回顶部按钮的点击
      // this.$refs.scroll 获取上述的scroll组件
      this.$refs.scroll.scrollTo(0, 0); // 调用scroll组件中的方法
    }
    /* methods里面方法内的函数不能抽取，如上述backClick()中的代码不能单独抽取 */
  }
}