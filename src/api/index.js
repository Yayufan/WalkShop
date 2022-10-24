//包含N個接口請求函數的模塊
//因為剛剛有封裝ajax過,所以返回的是response.data(響應体數據)
import ajax from "./ajax";

//根據經緯度獲取位置詳情,參數為params,是直接在url中的
// export function reqAddress(geohash) {}  正規寫法
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
//獲取食物分類列表
export const reqFoodTypes = () => ajax('/index_category')
//根據經緯度獲取商鋪列表,參數前者為經度,後者為緯度,且是query,這裡ajax封裝過,所以會自動套入&來為query拼接url
export const reqShopList = (longitude,latitude) => ajax('/shops',{longitude,latitude})
//

