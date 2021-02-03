import Vue from 'vue'
import App from './App.vue'
// 导入router对象 在该文件中进行挂载
import router from "./router/index"; // 这里可省略后面的index文件

Vue.config.productionTip = false
// 定义 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router // 在Vue实例中进行挂载
}).$mount('#app')
