// pages/person/person.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    msgList: [
      {
        icon: '/image/person/Iconly_Curved_Notification.png',
        message: '通知',
        trigger: 'clickNotification'
      },
      {
        icon: '/image/person/Wallet.png',
        message: '支付设置',
        trigger: 'clickNotification'
      },
      {
        icon: '/image/person/Location.png',
        message: '收货地址',
        trigger: 'clickNotification'
      },
      {
        icon: '/image/person/Iconly_Curved_Discount.png',
        message: '优惠',
        trigger: 'clickNotification'
      },
      {
        icon: '/image/person/Iconly_Curved_Message.png',
        message: '邀请好友',
        trigger: 'clickNotification'
      },
      {
        icon: '/image/person/Iconly_Curved_Calling.png',
        message: '帮助中心',
        trigger: 'clickNotification'
      },
      {
        icon: '/image/person/clarity_help-info-line.png',
        message: '关于我们',
        trigger: 'clickNotification'
      }
    ]
  },
  clickNotification(e) {
    // console.log(e)
    console.log('组件被点击----' + e.currentTarget.dataset.index)
  }
})
