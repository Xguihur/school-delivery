Component({
  properties: {
    iconUrl: {
      type: String,
      value: '/image/person/Iconly_Curved_Notification.png'
    },
    msg: {
      type: [String, Number],
      value: '组件内容'
    }
  },
  data: {},
  methods: {
    clickBox() {
      this.triggerEvent('myClick')
    }
  },
  mounted() {
    console.log(this.properties.msg)
  }
})
