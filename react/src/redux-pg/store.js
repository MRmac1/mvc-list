import { createStore } from 'redux';

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }
    case 'minus':
      return { count: state.count - 1 }
    default:
      return state;
  }
}

// store.subscribe(() => console.log('store', store.getState()))
// store.dispatch({ type: 'add' })
// store.dispatch({ type: 'add' })
// store.dispatch({ type: 'minus' })


export default createStore(reducer);
