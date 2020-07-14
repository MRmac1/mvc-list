import Vue from 'vue'
import TodosApp from './TodosApp.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(TodosApp),
}).$mount('#app')
