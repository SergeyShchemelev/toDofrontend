<template>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-6">
              <h2>Список дел</h2>
          </div>
        </div>
        <Addtask :todos="todos" />
        <Tasklist :todos="todos" />
      </div>
</template>

<script>
import Addtask from './Addtask'
import Tasklist from './Tasklist'
import axios from 'axios'

export default {
  name: 'Todo',
  data () {
    return {
      todos: [],
      input: ''
    }
  },
  mounted () { // загрузка данных с БД
    axios
      .get('http://localhost:8000/api/task/')
      .then(response => (this.todos = response.data))
  },
  components: {
    Addtask, Tasklist
  }
}
</script>
