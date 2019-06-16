<template>
  <div>
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done" />
        {{ task.name }}
        -
        <span v-for="id in text.labelIds" v-bind:key="id">
          {{ getLabelText(id) }}
        </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>
