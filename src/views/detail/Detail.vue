<template>
  <div id="detail">
    <!-- 使用导航子组件 
    接收子组件传递过来的事件并监听 -->
    <detail-nav-bar 
        class="detail-nav" 
        @titleClick="titleClick"
        ref="nav"/> 
    <!-- 使用滚动组件 包裹需要滚动的内容
    class="content" 给滚动组件添加类设置高度 - 必须有高度
    ref="scroll" 设置ref属性方便选择 
    @scroll="contentScroll" 监听scroll组件发出的滚动事件
    :probe-type="3" 设置该组件滚动时触发滚动事件 -->
    <scroll class="content"
        ref="scroll" 
        @scroll="contentScroll"
        :probe-type="3">
      <!-- 使用轮播图子组件
      :top-images 动态传入轮播图数据 -->
      <detail-swiper :top-images="topImages"/> 
      <!-- 使用商品基本信息子组件 
      :goods="goods" 给子组件传递参数 -->
      <detail-base-info :goods="goods"/>
      <!-- 使用商铺子组件
      :shop="shop" 给子组件传递参数 -->
      <detail-shop-info :shop="shop"/>
      <!-- 使用商品详情子组件
      :detail-info 给子组件传递参数
      @imgLoad 监听子组件传递来的事件 -->
      <detail-goods-info 
        :detail-info="detailInfo" 
        @imgLoad="imgLoad"/>
      <!-- 使用商品参数 子组件
      :param-info 给子组件传递参数 -->
      <detail-param-info 
          :param-info="paramInfo" 
          ref="params"/>
      <!-- 使用商品展示组件 展示推荐商品
      :goods="recommends" 把保存的推荐商品数据给该组件 -->
      <goods-list :goods="recommends"/>
    </scroll>
    <!-- 使用底部导航 子组件
    @:addCart 监听子组件发送来的事件 -->
    <detail-bottom-bar @:addCart="addCart"/>
    <!-- 使用 返回顶部组件
    监听组件的点击 不能直接使用@click 需使用@click.native
    v-show="isShowBackTop" 表示给该组件设置默认值 隐藏 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  // 导入 导航栏组件
  import DetailNavBar from './childComps/DetailNavBar';
  // 导入 轮播图子组件
  import DetailSwiper from './childComps/DetailSwiper';
  // 导入 商品基本信息 子组件
  import DetailBaseInfo from './childComps/DetailBaseInfo';
  // 导入 商铺信息 子组件
  import DetailShopInfo from './childComps/DetailShopInfo';
  // 导入 商品详细信息 子组件
  import DetailGoodsInfo from './childComps/DetailGoodsInfo';
  // 导入 商品参数数据 子组件
  import DetailParamInfo from './childComps/DetailParamInfo';
  // 导入 底部工具栏 子组件
  import DetailBottomBar from './childComps/DetailBottomBar';

  // 导入 滚动组件scroll
  import Scroll from 'components/common/scroll/Scroll';
  // 导入 goods组件 展示推荐商品
  import GoodsList from 'components/content/goods/GoodsList';

  // 导入详情页网络请求函数
  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail';
  // 导入 混入的对象
  import {backTopMixin} from 'common/mixin';
  export default {
    name: 'Detail',
    components: { // 注册子组件
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      Scroll,
      GoodsList,
      DetailBottomBar
    },
    // 使用导入的混入代码
    mixins: [backTopMixin],
    data() {
      return {
        iid: null, // 保存对应商品id
        topImages: [], // 保存顶部轮播图数据
        goods: {}, // 保存商品基本数据
        shop: {}, // 保存商铺信息
        detailInfo: {}, // 保存商品详情数据 描述 参数等
        paramInfo: {}, // 保存商品参数数据
        commentInfo: {}, // 保存评论信息数据
        recommends: [], // 保存商品推荐数据
        themeTopYs: [], // 保存滚动到指定位置的距离
        getThemeTopY: null, // 保存防抖数据
        currentIndex: 0, // 保存当前详情页导航索引
      }
    },
    created() {
      // 1. 保存传入的iid
      // 拿到路由传递过来的参数 即地址栏后面的参数 给上述保存的商品id
      this.iid = this.$route.params.iid;
      // 2. 根据iid请求详情页数据
      getDetail(this.iid).then(res => {
        // console.log(res); 输出请求过来的数据
        // 1. 获取顶部的轮播图数据
        const data = res.result; // 把网络请求的数据保存到data中
        this.topImages = data.itemInfo.topImages;
        // 2. 获取商品基本数据信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 3. 获取店铺信息数据
        this.shop = new Shop(data.shopInfo);
        // 4. 获取商品详情数据 描述 参数 等
        this.detailInfo = data.detailInfo;
        // 5. 获取商品参数数据
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        // 6. 获取评论的信息
        if (data.rate.cRate !== 0) { // 判断是否有评论
          this.commentInfo = data.rate.list[0];
        }
        // 获取详情标题指定滚动距离的Y值
        this.$nextTick(() => { 
          // 表示上述组件渲染完成才执行此函数
          /* 获取最新的数据，即对应的DOM是已经渲染出来了
          但是图片可能依然没有加载完(即获取到的offsetTop不含图片)
          故offsetTop值不对时，一般都是图片的问题 */
          /* this.themeTopYs = []; // 给上述数据赋值一次空，防止数据多次赋值
          this.themeTopYs.push(0); // 商品的Y值
          this.themeTopYs.push(this.$refs.params.$el.offsetTop); // 参数的Y值
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop); // 评论的Y值
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop); // 推荐的Y值 */
        })
      });
      // 3. 请求商品推荐数据
      getRecommend().then(res => {
        // 把推荐商品数据给上述设置的recommends进行保存
        this.recommends = res.data.list;
      });
      // 4. 给getThemeTopY赋值(对给this.themeTopYs赋值的操作进行防抖)
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = []; // 给上述数据赋值一次空，防止数据多次赋值
        this.themeTopYs.push(0); // 商品的Y值
        this.themeTopYs.push(this.$refs.params.$el.offsetTop); // 参数的Y值
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop); // 评论的Y值
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop); // 推荐的Y值
        this.themeTopYs.push(Number.MAX_VALUE); // 添加一个无穷大的值
      }, 100);
    },
    mounted() {
    },
    methods: {
      imgLoad() { // 实现子组件发送来的事件
        this.$refs.scroll.refresh(); // 刷新滚动高度
        /* 在图片加载完成后的代码中获取 */
        this.getThemeTopY(); // 防抖方式获取 故只执行一次
      },
      titleClick(index) { // 实现子组件发送来的事件
        // index表示点击了哪个标题按钮的索引值
        // 点击后滚动到指定位置
        // 1> x值 2> y值 3> 滚动花费时间
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
      },
      // 实现滚动组件发送来的滚动事件
      contentScroll(position) {
        // 1. 获取y值
        const positionY = -position.y;
        // 2. positionY和详情页对应标题的值进行对比
        let length = this.themeTopYs.length;
        /* for(let i = 0; i < length; i++) {
          // 如果当前y值 大于themeTopYs中的第1个值 并且小于等于themeTopYs中的第2个值
          if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
            this.currentIndex = i;
            // 把当前的currentIndex给导航子组件
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        } */
        // 简写 length - 1 因为对加了一个无穷大的值故-1
        for(let i = 0; i < length - 1; i++) {
          // this.currentIndex !== i 表示当前索引不等于i时才执行后续代码，即this.currentIndex = i;减少此代码赋值
          if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
        // 当滚动的距离大于1000才显示 返回顶部按钮
        this.isShowBackTop = (-position.y) > 1000;
      },
      // 实现子组件发送来的 加入购物车事件
      addCart() {
        // 1. 获取购物车需要展示的信息
        const product = {}
        /* 购物车展示的信息可从data中保存的数据里面取 */
        product.image = this.topImages[0]; // 图片
        product.title = this.goods.title; // 标题
        product.desc = this.goods.desc; // 描述信息
        product.price = this.goods.newPrice; // 价格
        product.iid = this.iid; // 商品id
        // 2. 将商品添加到购物车里
        // 调用Vuex中mutations中的方法
        // this.$store.commit('addCart', product); 使用Vuex保存数据
        // 调用Vuex中actions中的方法
        this.$store.dispatch('addCart', product);
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative; /* 添加相对定位 即占位置 */
    z-index: 9; /* 提示权重 */
    background-color: #fff; /* 添加背景颜色 */
    height: 100vh; /* 给父元素设置100vh的视口高度 */
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content { /* calc(100% - 44px) 表示整体100%减去顶部的44 -49是底部导航 */
    height: calc(100% - 44px - 49px);
  }
</style>