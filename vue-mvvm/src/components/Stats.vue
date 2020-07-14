<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ remaining }} </strong>{{ remaining === 1 ? 'item' : 'items' }} left</span>
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Compeleted</a>
        </li>
      </ul>
      <button class="clear-completed" v-if="completed">Clear completed</button>
  </footer>
</template>

<script>
export default {
  props: {
    todos: Array
  },
  computed: {
    remaining: function() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    completed: function() {
      return this.todos.some(todo => todo.completed)
    }
  }
}
</script>
