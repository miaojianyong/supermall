/* 存放放抖动函数 解决某个方法或函数执行过多时影响性能 */
// func 表示需传入一个函数  delay表示是时间 毫秒
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}
