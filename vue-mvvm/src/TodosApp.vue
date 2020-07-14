<template>
  <div id="app">
    <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <input class="new-todo" placeholder="What needs to be done?" autofocus="" v-model="newTodoTitle" @keypress.enter="addOne"/>
        </header>
        <Main :todos="todos" v-on:toggleItem="toggleItem"/>
        <Stats :todos="todos" />
      </section>
      <Footer />
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Stats from './components/Stats.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'TodosApp',
  components: {
    Main,
    Stats,
    Footer
  },
  data: function() {
    return {
        todos: [],
        newTodoTitle: ''
      };
  },
  methods: {
    addOne: function() {
      this.todos = this.todos.concat(this.getNewTodoItem());
      this.newTodoTitle = '';
    },
    getNewTodoItem: function() {
      return {
        completed: false,
        title: this.newTodoTitle,
        id: this.todos[this.todos.length - 1] && (this.todos[this.todos.length - 1].id + 1) || 1
      }
    },
    toggleItem: function(id) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    }
  }
}
</script>
