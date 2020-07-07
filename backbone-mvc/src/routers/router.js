import Backbone from 'backbone';
import Todos from '../collections/todos'

const TodoRouter = Backbone.Router.extend({
  routes: {
    '*filter': 'setFilter'
  },

  setFilter: function (param) {
    Todos.trigger('filter', param);
  }
});



export default TodoRouter;
