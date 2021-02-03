/* 前端路由文件 */
// 引入 vue
import Vue from 'vue';
// 引入 路由模块 vue-router
import VueRouter from "vue-router";

// 通过懒加载的方式导入路对应的页面/组件
const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const Shopcart = () => import('views/shopcart/Shopcart');
const Profile = () => import('views/profile/Profile');
// 通过懒加载的方式导入 Detail 组件
const Detail = () => import('views/detail/Detail');

// 1. 安装插件
Vue.use(VueRouter);
// 2. 创建router对象
// 在外边配置对应的映射关系
const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id', /* 动态路由方式传递参数 */
    component: Detail
  }
];
const router = new VueRouter({
  routes, // 把对应的路由拿到外部实现
  mode: 'history' // 设置history模式 即地址栏中地址用 / 分隔
});
// 解决重复点击按钮 如首页、分类等 报错的问题
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}
// 3. 导出路由对象 router
export default router;
