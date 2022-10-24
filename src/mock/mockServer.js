//使用mockjs提供mock數據街口
import Mock from 'mockjs'
//引入數據模板
import data from './data.json'

//返回商品(goods)的接口
Mock.mock('/goods',{code:0, data:data.goods})
//返回ratings的接口
Mock.mock('/ratings',{code:0, data:data.ratings})
//返回info的接口
Mock.mock('/info',{code:0, data:data.info})

//不須向外暴露任何數據即可使用,