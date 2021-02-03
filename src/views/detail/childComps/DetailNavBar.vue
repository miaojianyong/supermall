<template>
  <div>
    <nav-bar>
      <!-- 使用导航组件中的左侧的插槽
      class 设置类 跳转图片的位置等
      @click 监听点击 让其做返回操作 -->
      <div slot="left" class="back" @click="backClick"> 
        <img src="~assets/img/common/back.svg" alt="">
      </div> 
      <div slot="center" class="title"> <!-- 使用导航组件中的中间的插槽 -->
        <!-- v-for 循环下述对应的标题库
        class 设置类 并根据类名设置样式 让标题平均排列
        :class 动态绑定类 设置选中时添加该类 
        @click 绑定点击事件 -->
        <div v-for="(item, index) in titles" 
              class="title-item" 
              :class="{active: index === currentIndex}" 
              @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar> 
  </div>
</template>

<script>
  // 导入导航栏组件
  import NavBar from 'components/common/navbar/NavBar';
  export default {
    name: 'DetailNavBar',
    components: {
      NavBar // 注册导航栏组件
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'], // 创建标题库
        currentIndex: 0, // 记录选择状态
      }
    },
    methods: {
      titleClick(index) { // 实现点击标题切换功能
        this.currentIndex = index;
      },
      backClick() { // 实现返回按钮的返回操作
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 14px;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .back img {
    margin-top: 12px;
  }
</style>