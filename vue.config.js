/* 项目配置文件 */
// 使用 module.exports 导出配置，导出后会自动和隐藏的公共配置进行合并
module.exports = {
  configureWebpack: {
    resolve: { // resolve表示处理路径相关的配置
      alias: { // 配置别文件夹名
        // '@': 'src', 默认src目录使用@作为了别名 即脚手架3自动创建的
        // 在脚手架3中可使用 @ 作为路径配置别名，在脚手架2是不可以的
        // 故下述在脚手架2的写法是 'assets': 'src/assets'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}