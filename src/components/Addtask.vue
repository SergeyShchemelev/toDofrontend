<template>
<div class="row mt-2 justify-content-center">
  <div class="dropdown col-md-3 row" id="addTask">
    <button class="btn btn-primary dropdown-toggle col-md-6 mx-auto" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Добавить
    </button>
    <div class="dropdown-menu w-100 justify-content-center">
      <form class="px-4 py-3">
        <div class="form-group">
          <label for="todoitem">Добавить дело</label>
          <input type="text" v-model="input" class="form-control" id="todoitem" placeholder="Дело">
        </div>
        <button type="button" v-on:click="add()" class="btn btn-primary">Добавить</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Addtask',
  props: ['todos'],
  data () {
    return {
      input: ''
    }
  },
  methods: {
    add () {
      // eslint-disable-next-line
      $('.dropdown-toggle').dropdown('toggle')
      var task = {
        text: this.input,
        isDone: false
      }
      axios.post('http://localhost:8000/api/task/', task)
        .then(response => {
          this.todos.push(response.data)
        })
        .catch((error) => {
          console.log(error.response)
        })
      this.input = ''
    }
  }
}
</script>
