import React from 'react'

export const TodoList = ( {todos, completeTodo}) => {
  return (
    <div className="col-sm-12 col-md-8">
        <h3>Todo List</h3>
        <ul className="list-unstyled list-group list-group-flush  rounded p-3 ">
          {/* TodoList Item */
            todos.length === 0 ?
              <li className="d-flex justify-content-between list-group-item list-group-item-action">Todo List is empty</li>
              : todos.map((todo, index) => (
                <li key={index} className={`d-flex justify-content-between  list-group-item list-group-item-action  text-black  ${todo.completed ? `bg-success` : `bg-warning  `}`}>
                  <span>{todo.desc}</span>
                  <button type="button" id={todo.id} className={`btn p-1 m-1 btn-sm  ${todo.completed ? `text-white` : ` text-black`}`} onClick={() => completeTodo(todo.id)}>{todo.completed ? "Completada" : "Completar"}</button>
                </li>

              ))}
        </ul>
      </div>
  )
}
