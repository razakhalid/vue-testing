<template>
  <div>
    <!--  <Login></Login>-->
  </div>

</template>

<script>
import axios from 'axios'
import Login from '../../tests/unit/Login'
export default {
  name: "App",
  data() {
    return {
      posts: null
    }
  },
  methods: {
    async getPosts() {
      this.posts = await axios.get('/api/posts')
    }
  },
  components: {
    Login
  }
}
</script>

<style scoped>

</style>