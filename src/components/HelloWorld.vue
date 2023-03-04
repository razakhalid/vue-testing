<template>
  <div class="airport">
    <p>{{ airport.abbreviation }}</p>
    <p>{{ airport.name }}</p>
    <p>{{ airport.city }}, {{ airport.state }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      showBigHeader: false
    }
  },
  mounted: function () {
    const codeMirrorMode = this.cm.getOption('mode');
    if (codeMirrorMode === 'javascript') {

    }
  },
  methods: {
    toggle: function () {
      const showBigHeader = this.showBigHeader;
      this.showBigHeader = !showBigHeader;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
