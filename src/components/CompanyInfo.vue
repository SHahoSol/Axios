<template>
  <div class="container">
    <h1>Seoul</h1>
    <p><a v-bind:href="usersLink">Users</a></p>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      usersLink: 'https://jsonplaceholder.typicode.com/users/1'
    }
  },
  mounted() {
    var self = this;
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then( function(res){
        self.posts = res.data;
        console.log('Data: ',res.data);
      })
      .catch( function(error){
        console.log('Error: ',error);
      })
  }
}
</script>

<style lang="css">
</style>
