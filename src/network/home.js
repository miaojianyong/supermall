/* 首页的网络请求文件 */
// 导入封装好的网络请求文件
import {request} from './request';

// 封装获取首页数据函数
export function getHomeMultidata() {
  return request({
    url: '/home/multidata' // 首页请求数据的地址
  })
}

