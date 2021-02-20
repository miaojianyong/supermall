<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
  // 导入导航组件
  import NavBar from 'components/common/navbar/NavBar';
  // 导入 辅助函数mapGetters 可将store中的getter映射到计算属性中
  import {mapGetters} from 'vuex';

  export default {
    name: "Shopcart",
    components: {
      NavBar
    },
    computed: { // 计算属性
      /* cartLength() { // 商品个数
        // return this.$store.state.cartLength.length;
        // 使用getters中定义的方法
        return this.$store.getters.cartLength;
      } */
      // 直接使用getters中定义的方法 两种用法 数组/对象语法
      ...mapGetters(['cartLength', 'cartList']),
      /* // 自定义方法名称
      ...mapGetters({
        length: 'cartLength',
        list: 'cartList'
      }) */
      totalPrice() { // 选中的商品总价
        return '¥' + this.$store.state.cartList.filter(item => {
          // filter 过滤商品 过滤条件item.cheched 即商品是选中状态的
          return item.cheched
        }).reduce((preValue, item) => {
          // 返回每个商品数量 和 商品条数之和
          return preValue + item.price * item.count
        }, 0).toFixed(2) // toFixed(2)保留两位小数
      },
      checkLength() { // 选中的商品个数
        return this.$store.state.cartList.filter(item => item.cartList).length
      },
      isSelectAll() { // 商品是否全部选中
        // 如果没有商品就返回false，即全选按钮不选中
        if (this.cartList.length === 0) return false;
        /* // 方式1. 使用filter 筛选所有商品选中与否状态
        // filter(item => !item.cheched).length 表示是否有未选中的
        // 下述表示有未选中的就返回false，即全选按钮不选中
        return !(this.cartList.filter(item => !item.cheched).length) */
        // 方式2. 使用find 如查找到有一个商品未选中就返回false，即全选按钮不选中
        return !this.cartList.find(item => !item.cheched);
        /* // 方式3. 使用普通遍历
        for(let item of this.cartList) {
          // 如果有未选中的商品 就返回false
          if(!item.cheched) {
            return false
          }
          // 否则返回true
          return true
        } */
      }
    },
    methods: {
      checkClick() {
        if(this.isSelectAll) { // 如果全部选中
          // 把所有商品设置成未选中状态
          this.cartList.forEach(item => item.cheched = false);
        } else { // 如果有部分或全部不选中
          // 把所有商品设置成选中状态
          this.cartList.forEach(item => item.cheched = true);
        }
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
