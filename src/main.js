import Vue from 'vue'
import App from './App.vue'
// 导入router对象 在该文件中进行挂载
import router from "./router/index"; // 这里可省略后面的index文件
// 导入Vuex创建的store对象
import store from './store'; // 这里省略了index.js
// 导入弹窗组件js处理文件
import toast from 'components/common/toast';
// 导入解决移动端300毫秒延迟的插件
import FastClick from 'fastclick';
// 导入图片懒加载插件
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false
// 定义 事件总线
Vue.prototype.$bus = new Vue()

// 安装toast自定义的弹窗组件插件
Vue.use(toast);

// 解决移动端300ms延迟
FastClick.attach(document.body);

// 使用懒加载插件
Vue.use(VueLazyload, {
  // 表示图片未加载出来时的站位图
  loading: require('./assets/img/common/placeholder.png')
});

new Vue({
  render: h => h(App),
  router, // 在Vue实例中进行挂载
  store // 在Vue中挂载store对象
}).$mount('#app')
