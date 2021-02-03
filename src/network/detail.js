/* 详情页数据请求 */
// 导入网络请求函数
import { request } from "./request";
export function getDetail(iid) { // 导出详情页网络请求函数
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}