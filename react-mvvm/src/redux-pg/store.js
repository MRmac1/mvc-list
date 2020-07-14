import { createStore, applyMiddleware } from 'redux';

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

// 增加中间件
function logger(store) {
  return function(next) {
    return function (action) {
      console.log('dispatch', action);
      const result = next(action);
      console.log('next state', store.getState());
      return result;
    }
  }
}

// thunk promise
const thunk = store => next => action => typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);

export default createStore(reducer, applyMiddleware(thunk, logger));
// export default createStore(reducer);
