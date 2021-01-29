/* 首页的网络请求文件 */
// 导入封装好的网络请求文件
import {request} from './request';

// 封装获取首页数据函数
export function getHomeMultidata() {
  return request({
    url: '/home/multidata' // 首页请求数据的地址
  })
}
// 封装获取首页商品数据
// type 表示具体商品分类名称 如流行就是 pop
// page 表示对应商品的页码
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data', // 首页商品数据请求地址
    partms: { // 传入的参数信息
      type,
      page
    }
  })
}
