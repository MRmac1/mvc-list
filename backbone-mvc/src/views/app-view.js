import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Todos from '../collections/todos';
import TodoView from './todo-view';

const AppView = Backbone.View.extend({
  events: {
    'keypress .new-todo': 'createOnEnter',
    'click .clear-completed': 'clearCompleted',
    'click .toggle-all': 'toggleAllComplete'
  },
  el: '.todoapp',
  statsTemplate: _.template($('#stats-template').html()),

  initialize: function() {
    this.allCheckbox = $('.toggle-all')[0];
    this.$input = $('.new-todo');
    this.$list = $('.todo-list');
    this.$main = $('.main');
    this.$footer = $('.footer');
    this.filter = '';
    this.listenTo(Todos, 'add', this.addOne);
    this.listenTo(Todos, 'reset', this.addAll);

    this.listenTo(Todos, 'filter', (filter) => {
      this.filter = filter;
      this.filterAll();
    });
    this.listenTo(Todos, 'all', _.debounce(this.render, 0));

    // 触发render
    Todos.fetch({reset: true});
  },

  render() {
    const completed = Todos.completed().length;
    const remaining = Todos.remaining().length;

    if (Todos.length) {
      this.$main.show();
      this.$footer.show();

      this.$footer.html(this.statsTemplate({
        completed: completed,
        remaining: remaining
      }));

      $('.filters li a')
      .removeClass('selected')
      .filter('[href="#/' + (this.filter || '') + '"]')
      .addClass('selected');

    } else {
      this.$main.hide();
      this.$footer.hide();
    }

    this.allCheckbox.checked = !remaining;
  },

  // 新的 order Item
  newAttributes: function() {
    return {
      title: this.$input.val(),
      completed: false,
      order: Todos.nextOrder()
    }
  },

  createOnEnter: function(e) {
    if (e.which === 13 && this.$input.val() !== '') {
      Todos.add(this.newAttributes());
      this.$input.val('');
    }
  },

  addOne: function(todo) {
    var view = new TodoView({ model: todo });
    this.$list.append(view.render().el);
  },

  addAll: function() {
    this.$list.html('');
    Todos.each(this.addOne, this);
  },

  filterOne: function (todo) {
    todo.trigger('visible', this.filter);
  },

  filterAll: function() {
    Todos.each(this.filterOne, this);
  },

  clearCompleted: function() {
    _.invoke(Todos.completed(), 'destroy');
    return false;
  },

  toggleAllComplete: function() {
    var completed = this.allCheckbox.checked;

    Todos.each(function (todo) {
      todo.save({
        completed: completed
      });
    });
  }
});

export default AppView;
