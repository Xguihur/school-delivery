// 封装请求代码
baseUrl:""//用于存储公共路径
token:""//用于存储必要的token

const myRequest = (url,method='get',data='')=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseUrl+'url',
      method:method,
      data:data,
      header:{
        "content-type":"application/json"
      },
      success:res=>resolve(res),
      fail:res=>reject(res)
    })
  })
}
// 使用commonJS导出
module.exports = {
  myRequest
}