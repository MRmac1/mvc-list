import Backbone from 'backbone';
import todo from '../models/todo';
import { LocalStorage } from 'backbone.localstorage';

const Todos = Backbone.Collection.extend({
  model: todo,
  localStorage: new LocalStorage('todos-backbone'),
  completed: function() {
    return this.where({ completed: true })
  },
  remaining: function() {
    return this.where({ completed: false })
  },
  // order 决定排序
  nextOrder: function () {
    return this.length ? this.last().get('order') + 1 : 1;
  },
  comparator: 'order'
});

export default new Todos();
