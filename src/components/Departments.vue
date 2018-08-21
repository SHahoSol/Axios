<template>
  <div>
    <h2 class="center">{{ msg }}</h2>
    <input type="text" id="todoText" class="todoText" placeholder="Write" v-on:keyup="addTodo"/>
    <p class="center">Total Todo: {{ count }}</p>
    <ul>
      <li v-for="(todo, index) in todos">
        <div style="width:100%">
          <div style="float:left;width:98%">{{ todo.title | uppercase }}</div>
          <div style="float:left;width:1%;color:red;font-weight:bold;cursor:pointer" @click="deleteTodo(index)">X</div>
          <div style="clear:both"></div>
        </div>
        </li>
      </ul>
    </div>

  </div>
</template>

//Vue.filter('uppercase', function(value){
  //return value.toUpperCase();
//});

<script>
import axios from 'axios'
export default {
  data() {
    return {
      msg: 'Todo tutorial',
    todos: []
    }
  },
  methods: {
    addTodo: function(event){
      if(event.keyCode==13 && event.target.value!=""){
        this.todos.push({title:event.target.value,delete:false});
        event.target.value = '';
      }
    },
    deleteTodo: function(index){
      this.todos.splice(index,1);
    }
  },
  computed: {
    count: function(){
      return this.todos.length;
    }
  }
}
</script>

<style scoped>
</style>
