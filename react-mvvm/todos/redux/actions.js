// action creator
export const addOne = function({ title, completed, id }) {
  return {
    type: 'addOne',
    value: {
      title,
      completed,
      id
    }
  }
}

export const todoToggle = function(id) {
  return {
    type: 'todoToggle',
    value: id
  }
}

