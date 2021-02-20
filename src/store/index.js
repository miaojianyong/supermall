/* vuex */
// 导入Vue和Vuex
import Vue from 'vue';
import Vuex from 'vuex';
// 导入 mutations函数处理文件
import mutations from './mutations';
// 导入 actions函数处理文件
import actions from './actions';
// 导入 getters函数处理文件
import getters from './getters';

// 1. 安装Vuex插件
Vue.use(Vuex);
// 2. 创建Store对象
// 把state写在外层
const state = {
  cartLiat: [] // 保存商品数据
}
const store = new Vuex.Store({
  state,
  // mutations: {
  //   /* mutations唯一的目的就是修改state中的状态
  //   mutations中的每个方法尽可能完成的事件比较单一一点 */
  //   addCart(state, payload) {
  //     // payload是新添加的商品
  //     // 1 方法1: 查找之前数据中是否有该商品
  //     /* // oldProduct已存在的商品默认是空
  //     let oldProduct = null;
  //     // 循环上述保存商品数据的数组
  //     for (let item of state.cartLiat) {
  //       // 判断上述商品数组中的idd和添加的商品iid是否一致
  //       if (item.iid === payload.iid) {
  //         // 如果一致把该商品给上述oldProduct，也就是该变量不为空了
  //         oldProduct = item;
  //       }
  //     } */
  //     // 1.2 方法2: 查找之前数据中是否有该商品
  //     let oldProduct = state.cartLiat.find(item => item.iid === payload.iid);
  //     // 2. 判断oldProduct的值是否是空
  //     if (oldProduct) {
  //       // 如果不是空的就数量加1
  //       oldProduct.count += 1;
  //     } else {
  //       // 如果是空的就给payload添加count属性并设置为1
  //       payload.count = 1;
  //       // 把商品添加到上述数组进行保存
  //       state.cartLiat.push(payload);
  //     }
  //   }
  // },
  // 使用mutations函数
  mutations,
  actions,
  getters
});
// 3. 导出挂载到Vue实例上
export default store;