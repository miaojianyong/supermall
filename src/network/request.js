/* 发送网络请求的封装文件 */
// 导入axios网络请求模块
import axios from "axios";

// 使用export function后，该文件可导出多个实例
// 使用export default，只能导出一个实例
export function request(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    // 设置该实例的配置
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2. axios的拦截器
  // 请求拦截
  instance.interceptors.request.use(config => { // 请求成功时拦截
    return config; // 把拦截的信息在返回出去 否则其他地方无法请求到拦截的config
  }, err => { // 请求失败时拦截
    return err; // 如上 需返回出去
  });
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data; // 需返回出去 这里返回res里面的data即可，因为data是服务器响应的真实数据
  }, err => {
    return err; // 如上 需返回出去
  });
  // 3. 发送真正的网络请求
  // instance() 它本身的返回值就是 Promise 故直接返回即可(即使用return)
  return instance(config)
}
