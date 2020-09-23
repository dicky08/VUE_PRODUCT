const datas = {
  data () {
    return {
      select: 'Select'
    }
  },
  directives: {
    warna: {
      bind: (el, binding) => {
        el.style.color = binding.value
      }
    }
  }
}
export default datas
