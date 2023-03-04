<template>
  <slot name="default">
    hello
  </slot>
</template>

<script>
export default {
  name: "RenderlessPassword",
  data() {
    return {
      complexity: 5
    }
  },
  // render() {
  //   return this.$slots.default({
  //     complexity: this.complexity
  //   })
  // }
}
</script>

<style scoped>

</style>