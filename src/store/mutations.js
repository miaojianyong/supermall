/* Vuex中的mutations函数抽取 */
// 导入mutations的常量
import { ADD_COUNTER, ADD_TO_CART } from './mutations-type';
export default {
  /* 在mutations中实现商品加1操作，才可跟着数据 */
  // 商品数量+1方法
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  // 商品添加到数组中保存
  [ADD_TO_CART](state, payload) {
    state.cartLiat.push(payload);
  }
}