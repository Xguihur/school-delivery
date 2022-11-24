Component({
  data: {
    value: null
  },
  properties: {},
  methods: {
    toSearch() {
      console.log('点击了搜索')
      console.log(this.data.value)
    },
    bindKeyInput(e) {
      console.log(e.detail.value)
      console.log(e)
      const value = e.detail.value
      this.setData({
        value
      })
    }
  }
})
