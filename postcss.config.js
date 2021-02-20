module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      // 视窗的宽度，对应的是我们设计稿的宽度
      viewportWidth: 375, 
      // 视窗的高度，对应的是我们设计稿的高度(也可不配置)
      viewportHeight: 667, 
      // px单位转换为vw单位后，保留小数点后5位小数
      unitPrecision: 5, 
       // 指定需要转换的视窗单位，建议使用vw
      viewportUnit: 'vw',
      // 指定不需要转换的类，即数组中的类名是不会转换为vw单位的
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],
      // 小于或等于`1px`不进行转换
      minPixelValue: 1,
      // 允许在媒体查询中转换`px`
      mediaQuery: false,
      // 设置忽略转换的文件 即不转换数组中的文件
      exclude: [/TabBar/]
    }
  }
}
