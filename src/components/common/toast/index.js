/* 弹窗提示组件的js处理文件 */
// 导入Toast.vue组件
import Toast from './Toast';
const obj = {}
// Vue 参数是默认传递的
obj.install = function (Vue) {
  // 1. 创建组件构造器
  const toastContrustor = Vue.extend(Toast); // Toast即传入组件对象
  // 2. new的方式，根据组件构造器，可以创建出一个组件对象
  const toast = new toastContrustor();
  // 3. 将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'));
  // 4. toast.$el对应的就是上述挂载的div了
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
}

export default obj