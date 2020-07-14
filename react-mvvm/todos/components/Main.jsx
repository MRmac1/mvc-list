import React, { useContext } from 'react';
import AppContext from '../context';

export default () => {
  const { todos, todoToggle } = useContext(AppContext)

  return <section className="main">
    <input className="toggle-all" id="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {
        todos.map(({ title, completed, id }) => {
          return <li key={id}>
            <div className="view">
            <input className="toggle" type="checkbox" checked={completed} onChange={todoToggle.bind(null, id)}/>
            <label>{ title }</label>
            <button className="destroy"></button>
            </div>
            <input className="edit" value={title} onChange={() => {}} />
          </li>
        })
      }
    </ul>
  </section>;
}
