import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

const TodoView = Backbone.View.extend({

  tagName: 'li',
  template: _.template($('#item-template').html()),

  initialize: function () {
    this.$input = $('.edit');
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'visible', this.toggleVisible);
  },

  render: function () {
    if (this.model.changed.id !== undefined) {
      return;
    }
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

  toggleVisible: function (filter) {
    this.$el.toggleClass('hidden', this.isHidden(filter));
  },

  isHidden: function (filter) {
    return this.model.get('completed') ?
      filter === 'active' :
      filter === 'completed';
  },

  toggleCompleted: function() {
    this.model.toggle();
  },

  updateOnEnter: function(e) {
    if (e.which === 13) {
      this.close();
    }
  },

  close: function() {
    var value = this.$input.val();
    var trimmedValue = value.trim();

    if (!this.$el.hasClass('editing')) {
      return;
    }

    if (trimmedValue) {
      this.model.save({ title: trimmedValue });
    } else {
      this.clear();
    }

    this.$el.removeClass('editing');
  },
  edit: function() {
    this.$el.addClass('editing');
    this.$input.focus();
  },
  clear: function() {
    this.model.destroy();
  }
});


export default TodoView;
