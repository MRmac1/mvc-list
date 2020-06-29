import Backbone from 'backbone';

const Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    compeleted: false
  },
  toggle: function() {
    this.save({
      compeleted: !this.get('completed')
    })
  }

})

export default Todo;
