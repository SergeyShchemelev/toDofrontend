<template>
  <div class="row mt-2 justify-content-center">
    <div class="col-md-4">
          <ul class="list-group">
              <li v-for="(todo, index) in todos" :key="index"
               class="list-group-item justify-content-between d-flex" v-bind:class="{ 'list-group-item-success': todo.isDone }" >
                  <Editable :content="todo.text" @update="update($event, index)" v-bind:class="{'through': todo.isDone}">
                  </Editable>
                  <Buttonpanel :todo="todo" :index="index" @done="done($event)" @remove="remove($event)"/>
              </li>
          </ul>
          <div v-if="todos.length>0" class="row justify-content-end mt-2 mr-3">
          <button v-on:click="removeAll()" class="btn btn-danger" type="button">Удалить все</button>
        </div>
      </div>
  </div>
</template>

<script>
import Editable from './Editable'
import axios from 'axios'
import Buttonpanel from './Buttonpanel'

export default {
  name: 'Tasklist',
  props: ['todos'],
  components: {
    Editable,
    Buttonpanel
  },
  methods: {
    removeAll () { // удалить все дела
      axios.delete('http://localhost:8000/api/task/delete/all')
        .then(
          this.todos.splice(0, this.todos.length)
        )
    },
    update (event, index) { // изменить текст дела
      axios.put('http://localhost:8000/api/task/update/' + this.todos[index].id + '/', { 'text': event })
        .then(
          this.todos[index].text = event
        )
    },
    remove (event) { // удалить дело
      this.todos.splice(event, 1)
    },
    done (event) { // пометить выполненным
      this.todos[event].isDone = !this.todos[event].isDone
    }
  }
}
</script>

<style>
.through {
  text-decoration:line-through;
}
</style>
