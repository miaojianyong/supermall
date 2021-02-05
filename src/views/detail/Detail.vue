<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/> <!-- 使用导航子组件 -->
    <!-- 使用滚动组件 包裹需要滚动的内容
    class="content" 给滚动组件添加类设置高度 - 必须有高度 -->
    <scroll class="content" ref="scroll">
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
      <detail-param-info :param-info="paramInfo"/>
    </scroll>
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

  // 导入 滚动组件scroll
  import Scroll from 'components/common/scroll/Scroll';

  // 导入详情页网络请求函数
  import {getDetail, Goods, Shop, GoodsParam} from 'network/detail';
  export default {
    name: 'Detail',
    components: { // 注册子组件
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      Scroll
    },
    data() {
      return {
        iid: null, // 保存对应商品id
        topImages: [], // 保存顶部轮播图数据
        goods: {}, // 保存商品基本数据
        shop: {}, // 保存商铺信息
        detailInfo: {}, // 保存商品详情数据 描述 参数等
        paramInfo: {}, // 保存商品参数数据
        commentInfo: {} /// 保存评论信息数据
      }
    },
    created() {
      // 1. 保存传入的iid
      // 拿到路由传递过来的参数 即地址栏后面的参数 给上述保存的商品id
      this.iid = this.$route.params.id;
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
      })
    },
    methods: {
      imgLoad() { // 实现子组件发送来的事件
        this.$refs.scroll.refresh(); // 刷新滚动高度
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
  .content { /* calc(100% - 44px) 表示整体100%减去顶部的44 */
    height: calc(100% - 44px);
  }
</style>