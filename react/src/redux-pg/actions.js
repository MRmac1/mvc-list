export const add = () => {
  return {
    type: 'add',
    value: 1
  }
}

export const minus = () => {
  return {
    type: 'minus',
    value: 1
  }
}


// 异步actions
// export const asyncAdd = () => {
//   return setTimeout(() => {
//     return {
//       type: 'add',
//       value: 1
//     }
//   }, 2000);
// }

// thunk actions
export const asyncAdd = (params) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: 'add',
        value: 1
      });
    }, 100);
  }
}


export const asyncMinus = () => {
  return setTimeout(() => {
    return {
      type: 'minus',
      value: 1
    }
  }, 2000);
}
