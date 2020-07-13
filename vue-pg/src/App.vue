<template>
  <div id="app">
    <nav class='nav'>
      <ul>
        <li>
          Home
        </li>
        <li>
          List
        </li>
        <li>
          About
        </li>
      </ul>
    </nav>
    <section>
      <button @click="toggleShowTodos">show todos</button>
      <p v-if="showTodos">
        <ul v-for="todo in todos" :key="todo.title">
          <li>{{ todo.title }} {{ todo.completed }}</li>
        </ul>
      </p>
    </section>
    <Home />
    <List />
    <About />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import List from './components/List.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Home,
    List,
    About
  },
  data: function() {
    return {
        todos: [{
          completed: false,
          title: 'write by hand'
        },{
          completed: false,
          title: 'write by hand second'
        }],
        showTodos: false
      };
  },
  methods: {
    toggleShowTodos: function() {
      this.showTodos = !this.showTodos
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 550px;
  margin: 60px auto;
}

.nav ul {
  display: flex;
  list-style: none;
  justify-content: space-between;
}
</style>
