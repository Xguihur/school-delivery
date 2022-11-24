Component({
  data: {
    touchStartPageX: null
  },
  properties: {},
  methods: {
    // setTouchStart(e) {
    //   // 获取初始点击位置，存入 data
    //   let touchStartPageX = e.changedTouches[0].pageX
    //   // console.log(e)
    //   // console.log(touchStartPageX)

    //   this.setData({
    //     touchStartPageX
    //   })
    // },
    // setTouchEnd(e) {
    //   let touchEndPageX = e.changedTouches[0].pageX
    //   let offSetStartToEnd = touchEndPageX - this.data.touchStartPageX
    //   // console.log(e)
    //   // console.log(offSetStartToEnd)

    //   if (offSetStartToEnd < 10 && offSetStartToEnd > -10) {
    //     // this.triggerEvent('set', {})
    //     console.log('当作点击事件触发')
    //   }

    //   // 右滑
    //   if (offSetStartToEnd > 10) {
    //     // 如果本身就滑到底部了就不需要调整位置了
    //     if (this.data.scrollLeft === 0) {
    //       return
    //     }
    //     this.setData({
    //       scrollLeft: 0
    //     })
    //     console.log(this.data.scrollLeft)
    //   }

    //   // 左滑
    //   if (offSetStartToEnd < -10) {
    //     console.log('这是滑动事件')
    //     this.setData({
    //       scrollLeft: 100
    //     })
    //     console.log(this.data.scrollLeft)
    //   }
    // },
    deleteItem() {
      console.log('点击了删除项目')
    }
  }
})
