import $ from 'jquery';
import Backbone from 'backbone';
import todos from '../collections/todos';

const AppView = Backbone.View.extend({
  events: {
    'keypress .new-todo': 'createOnEnter',
  },
  el: '.todoapp',

  initialize: function() {
    this.$input = $('.new-todo');

    
  },

  createOnEnter: function(e) {
    if (e.which === 13 && this.$input.val() !== '') {
      this.models.add
    }
  }
});

export default AppView;