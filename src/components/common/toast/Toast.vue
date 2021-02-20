<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    /* props: { // 接收其他组件传递来的参数
      message: {
        type: String,
        default: ''
      },
      show: { // 组件是否显示的状态
        type: Boolean,
        default: false
      }
    }, */
    data() { // 保存数据
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message='默认提示信息', duration=2000) { // duration=2000表示默认时间是2秒
        this.isShow = true; // 显示弹窗
        this.message = message; // 接收内容参数
        setTimeout(() => { // 在延迟xx时间后隐藏弹窗
          this.isShow = false;
          this.message = '';
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, .7);
    z-index: 999;
  }
</style>
