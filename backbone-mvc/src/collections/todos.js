import Backbone from 'backbone';
import todo from '../models/todo';

const Todos = Backbone.Collection.extend({
  model: todo,

  completed: function() {
    return this.where({ completed: true })
  },

  remaining: function() {
    return this.where({ completed: false })
  }
});

export default new Todos();
