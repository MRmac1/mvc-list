import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

const TodoView = Backbone.View.extend({
  template: _.template(require('./template/todo-view.tpl')),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('completed', this.model.get('completed'));
    this.toggleVisible();
    this.$input = this.$('.edit');
    return this;
  },

  // 定义事件
  events: {
    'click .toggle': 'toggleCompleted',
    'dblclick label': 'edit',
    'click .destroy': 'clear',
    'keypress .edit': 'updateOnEnter',
    'keydown .edit': 'revertOnEscape',
    'blur .edit': 'close'
  },

  toggleCompleted: function() {
    this.model.toggle();
  },

  edit: function() {

  }
});


export default TodoView;
