import Vue from 'vue'
import Vuex from 'vuex'
import { Task } from '../api/tasks'
import {
  ADD_TASK,
  REMOVE_TASK,
  SET_TASKS
} from './mutation-types.js'

Vue.use(Vuex)

const state = {
  tasks: []
}

const getters = {
  tasks: state => state.tasks
}

const mutations = {

  [ADD_TASK] (state, task) {
    state.tasks = [task, ...state.tasks]
  },

  [REMOVE_TASK] (state, { id }) {
    state.tasks = state.tasks.filter(task => {
      return task.id !== id
    })
  },

  [SET_TASKS] (state, { tasks }) {
    state.tasks = tasks
  }
}

const actions = {
  createTask ({ commit }, taskData) {
    Task.create(taskData).then(task => {
      commit(ADD_TASK, task)
    })
  },
  deleteTask ({ commit }, task) {
    Task.delete(task).then(response => {
      commit(REMOVE_TASK, task)
    })
  },
  getTasks ({ commit }) {
    Task.list().then(tasks => {
      commit(SET_TASKS, { tasks })
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
