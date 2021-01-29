<template>
  <div id="home">
    <!-- 使用 导航组件 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 使用 轮播图处理组件
    :banners="banners" 传递网络请求的数据给该组件 -->
    <home-swiper :banners="banners"/>
    <!-- 使用 推荐信息展示处理组件 -->
    <recommend-view :recommends="recommends"/>
    <!-- 使用 本周流行 - 活动 组件文件 -->
    <feature-view/>
    <!-- 使用 选项卡 商品分类导航 组件文件 并传入对应的标题数据 -->
    <!-- 给组件添加类，在下述样式中实现该组件到指定位置停留 -->
    <tab-control :titles="['流行','新款','精选']" class="tab-control"/>

    <!-- 使用 商品展示组件 -->
    <goods-list :goods="goods['pop'].list"/>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
      <li>列表10</li>
    </ul>
  </div>
</template>

<script>
  // 导入 轮播图组件处理文件 公共组件
  import HomeSwiper from "./childComps/HomeSwiper";
  // 导入 推荐信息展示组件处理文件 子组件
  import RecommendView from "./childComps/RecommendView";
  // 导入 本周流行 - 活动 组件文件 子组件
  import FeatureView from "./childComps/FeatureView";

  // 导入 导航组件 公共组件
  import NavBar from "components/common/navbar/NavBar";
  // 导入 选项卡 商品分类导航 组件文件 公共组件
  import TabControl from "components/content/tabControl/TabControl";
  // 导入 商品展示组件 公共组件
  import GoodsList from "components/content/goods/GoodsList"

  // 导入 首页的网络请求处理文件 首页商品数据
  import {getHomeMultidata,getHomeGoods} from 'network/home';
  export default {
    name: "Home",
    components: { // 注册组件
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList
    },
    // 函数调用 -> 压入函数栈（保存函数调用过程中所有变量）
    // 函数调用结束 -> 弹出函数栈（释放函数所有的变量 即删除所有变量）
    // 故 下述中网络请求的函数，需保存起来
    data() { // 存储下述网络请求过来的数据
      return { // 调用变量接收网络请求的指定的数据
        banners: [], // 轮播图数据
        recommends: [], // 推荐信息数据
        goods: { // 首页 流行、新款、精选数据
          'pop': {page: 0, list: []}, // 默认是0页，空数据
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        }
      }
    },
    created() { // 生命周期函数，即组件创建完成后
      /* 发送网络请求 */
      // 1. 请求多个数据
      this.getHomeMultidata(); // 调用methods里实现的方法
      // 2. 请求商品数据
      // 调用methods里实现的方法 并传递对应的商品分类名称
      this.getHomeGoods('pop'); 
      this.getHomeGoods('new'); 
      this.getHomeGoods('sell');
    },
    methods: { // 把上述created函数中的代码放到此处
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res); 请求来的数据
          this.banners = res.data.banner.list; // 轮播图数据
          this.recommends = res.data.recommend.list; // 推荐信息数据
        });
      },
      getHomeGoods(type) {
        // this.goods[type].page 即是上述data定义的数据
        const page = this.goods[type].page + 1;
        // 请求到对应的商品分类的第1页(page开始是0 加1后即第1页)数据
        getHomeGoods(type, page).then(res => {
          // this.goods[type].list表示是上述data调用的空list数组
          // ...res.data.list 表示把这个数组进行解析，即拿出该数组的每个元素
          // 下述表示把请求到的数据(数组格式)，添加到上述定义的数组中
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1; // 把当前页面加1
        });
      }
    }
  }
</script>

<style scoped>
  #home { /* 让导航覆盖的轮播图显示出来 */
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint); /* 使用公共css文件中的变量设置颜色 */
    color: #fff; /* 设置文字颜色 */

    position: fixed; /* 给导航栏添加固定定位 不让他跟着页面移动 */
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;
  }
  .tab-control { /* 实现该活动组件 在页面下拉到此组件位置时，停留在页面顶部*/
    position: sticky;
    top: 44px; /* 44px 即顶部导航的高度 */
  }
</style>
