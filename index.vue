<template>
  <div>
    <input type="text" v-model="filterWord">
    <ul>
      <li v-for="task in  filteredTaskList" v-bind:key="task.id">
        <Task v-bind:task="task">
      </li>
    </ul>
  </div>
</template>

<script>
import Task from './Task.vue'

export default {
  name: 'TaskList',

  components: {
    Task
  },

  props: {
    taskList:{
      type: Array,
      required: true
    }
  },
  data () {
    return  {
      filterWord: ''
    }
  },
  computed: {
    filteredTaskList () {
      const filtered = this.taskList.filter(task => {
        return task.name.includes(this.filterWord)
      })
      return filtered
    }
  }
}
</script>
