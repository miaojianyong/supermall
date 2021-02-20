/* getters文件单独封装 */
export default {
  cartLength(state) {
    return state.cartLength.length; // 返回商品数量
  },
  cartList(state) {
    return state.cartList;
  }
}