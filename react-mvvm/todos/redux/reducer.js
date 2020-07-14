const TodoReducer = function(state = {
  filter: 'ALL',
  todos: []
}, action) {

  switch(action.type) {
    case 'addOne':
      return Object.assign({}, state, { todos: state.todos.concat(action.value)})
    case 'todoToggle':
      return Object.assign({}, state, { todos: state.todos.map(todo => {
        if (todo.id === action.value) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }) });
    default:
      return state;
  }
}


export default TodoReducer;
