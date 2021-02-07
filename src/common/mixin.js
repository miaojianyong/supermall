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