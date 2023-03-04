<script>

const vnode = {
  type: 'div',
  props: {
    id: 'hello'
  },
  children: [

  ]
}

import { h } from 'vue'

const Foo = {
  render() {
    return 'this is foo'
  }
}

export default {
  name: "Button",
  props: {
    loading: {
      default: false
    },
    onPress: {
      default: () => {}
    }
  },

  // returns a VDOM tree
  render() {
    const renderOptions = [
        l
    ]
    return h(...renderOptions)
  }
}
</script>

<style scoped>

</style>