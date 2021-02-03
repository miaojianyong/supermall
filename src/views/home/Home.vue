<template>
  <div id="home">
    <!-- 使用 导航组件 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 复制下述分类组件
    添加类 class="tab-control" 设置样式
    v-show="false" 表示默认该组件是隐藏的 -->
    <tab-control :titles="['流行','新款','精选']"
                 ref="tabControl1"
                 @tabClick="tabClick"
                 class="tab-control" v-show="isTabFixed"/>
    <!-- 使用封装好的 滚动组件 包裹需要滚动的内容
     content 来设置控制滚动的整体范围
     添加ref属性方便选中
     :probe-type="3" 表示传递监听滚动位置
      probe-type前加 : 表示传递具体的参数，不加传递的是字符串
      @scroll 使用组件中传递的自定义事件 监听滚动事件
      :pull-up-load="true" 设置监听上拉事件
      @pullingUp 使用组件中传递的自定义事件 监听上拉事件-->
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <!-- 使用 轮播图处理组件
      :banners="banners" 传递网络请求的数据给该组件
      @swiperImageLoad 监听子组件传递过来的事件 即图片加载完成 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <!-- 使用 推荐信息展示处理组件 -->
      <recommend-view :recommends="recommends"/>
      <!-- 使用 本周流行 - 活动 组件文件 -->
      <feature-view/>
      <!-- 使用 选项卡 商品分类导航 组件文件 并传入对应的标题数据 -->
      <!-- 给组件添加 ref 方便选择该组件
       :class 动态添加类 决定该组件是否吸顶 -- 删除该属性
       @tabClick 监听组件传递过来的事件 -->
      <tab-control :titles="['流行','新款','精选']"
                   ref="tabControl2"
                   :class="{fixed: isTabFixed}"
                   @tabClick="tabClick"/>

      <!-- 使用 商品展示组件 -->
      <!-- <goods-list :goods="goods[currentType].list"/> -->
      <goods-list :goods="showGoods"/>
      <!-- ... -->
      <ul>
        <li>列表内容1</li>
        <li>列表内容2</li>
        <li>列表内容3</li>
        <li>列表内容4</li>
        <li>列表内容5</li>
        <li>列表内容6</li>
        <li>列表内容7</li>
        <li>列表内容8</li>
        <li>列表内容9</li>
        <li>列表内容10</li>
        <li>列表内容11</li>
        <li>列表内容12</li>
        <li>列表内容13</li>
        <li>列表内容14</li>
        <li>列表内容15</li>
        <li>列表内容16</li>
        <li>列表内容17</li>
        <li>列表内容18</li>
        <li>列表内容19</li>
        <li>列表内容20</li>
        <li>列表内容21</li>
        <li>列表内容22</li>
        <li>列表内容23</li>
        <li>列表内容24</li>
        <li>列表内容25</li>
        <li>列表内容26</li>
        <li>列表内容27</li>
        <li>列表内容28</li>
        <li>列表内容29</li>
        <li>列表内容30</li>
        <li>列表内容31</li>
        <li>列表内容32</li>
        <li>列表内容33</li>
        <li>列表内容34</li>
        <li>列表内容35</li>
        <li>列表内容36</li>
        <li>列表内容37</li>
        <li>列表内容38</li>
        <li>列表内容39</li>
        <li>列表内容40</li>
        <li>列表内容41</li>
        <li>列表内容42</li>
        <li>列表内容43</li>
        <li>列表内容44</li>
        <li>列表内容45</li>
        <li>列表内容46</li>
        <li>列表内容47</li>
        <li>列表内容48</li>
        <li>列表内容49</li>
        <li>列表内容50</li>
        <li>列表内容51</li>
        <li>列表内容52</li>
        <li>列表内容53</li>
        <li>列表内容54</li>
        <li>列表内容55</li>
        <li>列表内容56</li>
        <li>列表内容57</li>
        <li>列表内容58</li>
        <li>列表内容59</li>
        <li>列表内容60</li>
        <li>列表内容61</li>
        <li>列表内容62</li>
        <li>列表内容63</li>
        <li>列表内容64</li>
        <li>列表内容65</li>
        <li>列表内容66</li>
        <li>列表内容67</li>
        <li>列表内容68</li>
        <li>列表内容69</li>
        <li>列表内容70</li>
        <li>列表内容71</li>
        <li>列表内容72</li>
        <li>列表内容73</li>
        <li>列表内容74</li>
        <li>列表内容75</li>
        <li>列表内容76</li>
        <li>列表内容77</li>
        <li>列表内容78</li>
        <li>列表内容79</li>
        <li>列表内容80</li>
        <li>列表内容81</li>
        <li>列表内容82</li>
        <li>列表内容83</li>
        <li>列表内容84</li>
        <li>列表内容85</li>
        <li>列表内容86</li>
        <li>列表内容87</li>
        <li>列表内容88</li>
        <li>列表内容89</li>
        <li>列表内容90</li>
        <li>列表内容91</li>
        <li>列表内容92</li>
        <li>列表内容93</li>
        <li>列表内容94</li>
        <li>列表内容95</li>
        <li>列表内容96</li>
        <li>列表内容97</li>
        <li>列表内容98</li>
        <li>列表内容99</li>
        <li>列表内容100</li>
      </ul>
    </scroll>
    <!-- 使用 返回顶部组件
    监听组件的点击 不能直接使用@click 需使用@click.native
    v-show="isShowBackTop" 表示给该组件设置默认值 隐藏 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
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
  // 导入 滚动组件 公共组件
  import Scroll from "components/common/scroll/Scroll";
  // 导入 返回顶部组件 公共组件
  import BackTop from "components/content/backTop/BackTop";

  // 导入 首页的网络请求处理文件 首页商品数据
  import {getHomeMultidata,getHomeGoods} from 'network/home';
  // 导入 防抖函数
  import {debounce} from 'common/utils';
  export default {
    name: "Home",
    components: { // 注册组件
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
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
        },
        currentType: 'pop', // 设置首页默认的显示的数据类型
        isShowBackTop: false , // 设置返回顶部按钮的默认值
        tabOffsetTop: 0, // 设置分类组件距离顶部的距离
        isTabFixed: false, // 设置分类组件默认属性(即不吸顶)
        saveY: 0, // 保存当前页面离开时位置
      }
    },
    computed: { // 定义计算属性
      showGoods() { // 显示视频分类数据
        return this.goods[this.currentType].list;
      }
    },
    activated() { // 活跃时 即在当前页面时 触发
      // 当回到当前页面时，把记录的saveY给当前页面
      this.$refs.scroll.scrollTo(0, this.saveY, 0);
      // 再次活跃 即回到当前页面时 刷新scroll的滚动区域
      this.$refs.scroll.refresh();
    },
    deactivated() { // 不活跃时 即在离开当前页面时 触发
      // 把离开该页面时滚动的位置 给定义的saveY
      this.saveY = this.$refs.scroll.getScrollY();
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
    mounted() { // 当页面中有创建的元素时，调用此回调函数
      /* 1. 图片加载完成的事件监听 */
      // 使用导入的放抖动函数 即(1> 表示函数, 2> 表示时间)
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      // 监听item组件中图片加载完成事件发送来的事件 事件总线
      this.$bus.$on('itemImageLoad', () => {
        refresh();
      })
    },
    methods: { // 把上述created函数中的代码放到此处
      /* 下述是事件监听相关方法*/
      tabClick(index) {
        // console.log(index); 输出对应的索引号
        switch (index) { // 使用switch循环，判断index的值
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        // 把上述两个分类组件的选中项保持一致
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backClick() { // 实现监听返回顶部按钮的点击
        // this.$refs.scroll 获取上述的scroll组件
        this.$refs.scroll.scrollTo(0, 0); // 调用scroll组件中的方法
      },
      contentScroll(position) { // 实现实时监听滚动的事件
        // 1. 判断BackTop是否显示
        // 当滚动的距离大于1000才显示 返回顶部按钮
        this.isShowBackTop = (-position.y) > 1000;
        // 2. 决定tabControl是否吸顶(即添加 position: fixed 属性，即改为固定定位)
        this.isTabFixed = (-position.y) > this.tabOffsetTop;
      },
      loadMore() { // 实现上拉加载更多事件
        // 针对对应的类型 加载更多数据 如在流行分类中 上拉后就加载流行中的数据
        this.getHomeGoods(this.currentType);
      },
      swiperImageLoad() { // 实现上述轮播图图片加载完成事件
        /* 获取tabControl即分类组件的offsetTop */
        // 组件是没有offsetTop属性的，故需获取组件内部的DOM元素
        // 所有组件都有一个属性 $el 用于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        // console.log(this.$refs.tabControl2.$el.offsetTop) 距离顶部的距离
      },
      /* 下述是网络请求相关方法 */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res); 请求来的数据
          this.banners = res.data.banner.list; // 轮播图数据
          this.recommends = res.data.recommend.list; // 推荐信息数据
        });
      },
      getHomeGoods(type) {
        // this.goods[type].page 即是上述data定义的数据
        const page = this.goods[type].page + 1; // +1 表示第1次请求数据显示第1页的
        // 请求到对应的商品分类的第1页(page开始是0 加1后即第1页)数据
        getHomeGoods(type, page).then(res => {
          // this.goods[type].list表示是上述data调用的空list数组
          // ...res.data.list 表示把这个数组进行解析，即拿出该数组的每个元素
          // 下述表示把请求到的数据(数组格式)，添加到上述定义的数组中
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1; // 把当前页面加1
          // 调用scroll组件中定义的再次上拉加载函数
          this.$refs.scroll.finishPullUp();
        });
      }
    }
  }
</script>

<style scoped> /* scoped 表示作用域 即下述样式只在该组件内部起作用 */
  #home { /* 让导航覆盖的轮播图显示出来 */
    /*padding-top: 44px;*/
    height: 100vh; /* 表示整个浏览器窗口高度 */
    position: relative; /* 相对定位 子绝父相 */
  }

  .home-nav {
    background-color: var(--color-tint); /* 使用公共css文件中的变量设置颜色 */
    color: #fff; /* 设置文字颜色 */

    /*position: fixed; !* 给导航栏添加固定定位 不让他跟着页面移动 *!
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;*/
  }
  /*.tab-control { !* 实现该活动组件 在页面下拉到此组件位置时，停留在页面顶部*!
    position: sticky;
    top: 44px; !* 44px 即顶部导航的高度 *!
  }*/
  /*.fixed { !* 吸顶后样式 *!
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }*/
  .tab-control { /* 设置复制的tab-control组件样式 */
    position: relative;
    z-index: 9;
  }
  .content {
    position: absolute; /* 绝对定位 子绝父相 */
    top: 44px; /* 顶部导航高度 */
    bottom: 49px; /* 底部按钮高度 */
    overflow: hidden;
  }
</style>
