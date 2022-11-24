// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  // 测试一下git commitzen
  data: {
    checked: false
  },
  changeNumber(value) {
    console.log('这是新的值：', value.detail)
  },
  changePassword(value) {
    console.log('这是新的值：', value.detail)
  },
  onChange(event) {
    this.setData({
      checked: event.detail
    })
  }
})
