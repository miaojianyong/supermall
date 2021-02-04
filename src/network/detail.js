/* 详情页数据请求 */
// 导入网络请求函数
import { request } from "./request";
// 封装详情页 轮播图 网络请求
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// 封装详情页 商品基本信息 网络请求
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}
// 封装详情页 商铺信息 网络请求
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
// 封装详情页 商品参数数据 网络请求
export class GoodsParam{
  constructor(info, rule) {
    /* 判断是否有图 有就保存 没有就是空 不同的商品决定的 */
    this.image = info.images ? info.images[0] : '';
    this.info = info.set;
    this.sizes = rule.tables;
  }
}