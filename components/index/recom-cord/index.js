Component({
  data: {},
  properties: {},
  methods: {
    toDetail() {
      // console.log(888)
      wx.navigateTo({
        url: '/pages/detail/detail?mid=2'
      })
    }
  }
})
