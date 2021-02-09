import Vue from 'vue'
import App from './App.vue'
// 导入router对象 在该文件中进行挂载
import router from "./router/index"; // 这里可省略后面的index文件
// 导入Vuex创建的store对象
import store from './store'; // 这里省略了index.js

Vue.config.productionTip = false
// 定义 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router, // 在Vue实例中进行挂载
  store // 在Vue中挂载store对象
}).$mount('#app')
