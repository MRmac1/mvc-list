<template>
  <section class="main">
    <input class="toggle-all" id="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul class="todo-list" v-for="todo in todos" :key="todo.id">
      <li>
        <div class="view">
        <input class="toggle" type="checkbox" :checked="todo.completed" @click="toggleItem(todo.id)" />
        <label>{{ todo.title }}</label>
        <button class="destroy"></button>
        </div>
        <input class="edit" :value="todo.title"/>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    todos: Array
  },
  methods: {
    toggleItem: function(id) {
      this.$emit('toggleItem', id)
    }
  }
}
</script>
