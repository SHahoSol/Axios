<template>
  <div>
    <h1>Axios</h1>

    <div>
      <div class="post" v-for="post in posts" :key="post.id">
        <h3>Title: {{ post.title }}</h3>
        <p>Description: {{ post.body }}</p>
        <p><a v-bind:href="postsLink">Posts</a></p>
        <p><a v-bind:href="commentsLink">Comments</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts: [],
      postsLink: 'https://jsonplaceholder.typicode.com/posts',
      commentsLink: 'https://jsonplaceholder.typicode.com/comments'
    }
  },
  mounted() {
    var self = this;
    axios.get('https://jsonplaceholder.typicode.com/posts')
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

<style scoped>
  .post {
    background: #ccc;
    margin-bottom: 20px;
    padding: 10px 20px;
  }

  h3 {
    text-align: left;
  }

  p {
    text-align: left;
  }
</style>
