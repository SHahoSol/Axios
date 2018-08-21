<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="companyinfo">Company info</router-link>
    <router-link to="departments">Departments</router-link>
    <router-link to="files">Files</router-link>
    <router-link to="users">Users</router-link>
    <router-link to="sensors">Sensors</router-link>
    <router-link to="graphindexes">Graph Indexes</router-link>
    <router-link to="charts">Charts</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
