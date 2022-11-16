<template>
  <nav>
    <a href="/profile" id="profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin" class="profile">Admin</a>
  </nav>
<!--  <button @click="increment"></button>-->
<!--  <div v-if="count % 2 === 0">Count: {{ count }}. Count is even</div>-->
<!--  <div v-if="count % 2 !== 0">Count: {{ count }}. Count is odd</div>-->
  <button @click="handleClick"></button>
</template>

<script>
import axios from 'axios';
export default {
  name: "App",
  data() {
    return {
      count: 0,
      admin: false
    }
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    //   // return this.$store.state.count;
    // }
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    handleClick() {
      this.count += 1;
      this.$emit('count', this.count, 'hello');
    }
  },
  // mounted() {
  //   axios.get('/')
  // }
}
</script>

<style scoped>

</style>