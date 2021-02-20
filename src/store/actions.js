/* Vuex中的actions函数抽取 */
// 导入mutations的常量
import { ADD_COUNTER, ADD_TO_CART } from './mutations-type';
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 1. 查找之前数据中是否有该商品
      let oldProduct = context.state.cartLiat.find(item => item.iid === payload.iid);
      // 2. 判断oldProduct的值是否是空
      if (oldProduct) { // 原来的商品数量+1
        // 如果不是空的就数量加1
        // oldProduct.count += 1;
        // 调用mutations里面的方法 实现数量加1操作
        context.commit(ADD_COUNTER, oldProduct);
        resolve('当前商品数量+1');
      } else { // 添加新的商品
        // 如果是空的就给payload添加count属性并设置为1
        payload.count = 1;
        // 把商品添加到上述数组进行保存
        // context.state.cartLiat.push(payload);
        // 调用mutations里面的方法 实现把商品添加到数组中保存
        context.commit(ADD_TO_CART, payload);
        resolve('添加了新的商品');
      }
    })
  }
}