<template>
  <div>
  <button v-if="!todo.isDone" v-on:click="done()" class="btn btn-primary p-1">
    <img src="../assets/baseline_check_white_18dp.png">
  </button>
  <button v-if="todo.isDone" v-on:click="done()" class="btn btn-danger p-1">
    <img src="../assets/baseline_cancel_white_18dp.png">
  </button>
  <button v-on:click="remove()" class="btn btn-danger p-1">
    <img src="../assets/baseline_clear_white_18dp.png">
  </button>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Buttonpanel',
  props: ['todo', 'index'],
  methods: {
    remove () { // удаление дела
      axios.delete('http://localhost:8000/api/task/' + this.todo.id + '/')
        .then(
          this.$emit('remove', this.index)
        )
    },
    done () { // пометить дело выполненым
      axios.put('http://localhost:8000/api/task/done/' + this.todo.id + '/')
        .then(
          this.$emit('done', this.index)
        )
    }
  }
}
</script>
