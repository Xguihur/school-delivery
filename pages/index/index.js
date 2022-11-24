// index.js
Page({
  data: {
    image: ['/image/index/menu.png', '/image/index/hamburger button.png', '/image/index/salad button.png', '/image/index/pizza button.png']
  },
  onRefresh() {
    wx.showLoading({
      title: '正在加载',
      mask: true,
      success: result => {
        console.log('666')
      }
    })
    console.log('下拉刷新拉！')
    setTimeout(() => {
      wx.hideLoading()
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 1500)
  },
  onPullDownRefresh() {
    // 下拉刷新
    this.onRefresh()
  }
})
