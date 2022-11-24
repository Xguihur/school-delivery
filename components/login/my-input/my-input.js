Component({
  data: {
    number: '',
    password: ''
  },
  properties: {},
  methods: {
    changeNumber(e) {
      // console.log(e)
      // console.log(e.detail.value)
      this.triggerEvent('changeNumber', e.detail.value)
    },
    changePassword(e) {
      this.triggerEvent('changePassword', e.detail.value)
    }
  },
  computed: {}
})
