import { useState } from "react"

export const TodoApp = () => {
  const handleInputChange = (e) => {
    setTodo({
      id: Date.now(),
      desc: e.target.value,
      completed: false
    })
  }
  const handleKey = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, todo])
      setTodo("")
    }
  }
  // Lógica para almacenar los todos
  const [todos, setTodos] = useState([])
  
  // Lógica para añadir un todo
  const [todo, setTodo] = useState("")

    // Lógica para completar un todo
    const completeTodo = (index) => {
      const newTodos = [...todos]
      newTodos[index].completed = !newTodos[index].completed
      setTodos(newTodos)
    }

  
    return (
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-12">
            <h1>TodoApp</h1>
          </div>
        </div>
  
        {/* TodoFilter */}
        <div className="row mb-3">
          <div className="col d-flex gap-1">
            <button className="btn btn-sm btn-primary">All</button>
            <button className="btn btn-sm btn-success">Active</button>
            <button className="btn btn-sm btn-danger">Completed</button>
            <button className="btn btn-sm btn-warning">Clear Completed</button>
          </div>
        </div>
  
        {/* TodoAdd */}
        <div className="row mb-3">
          <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
            <h3>New Todo</h3>
            <input
              type="text"
              className="form-control"
              placeholder="Add Todo"
              name="desc"
              value={todo}
              // Evento cuando cambia el valor del input
              onChange={handleInputChange}
              // Evento cuando presiona tecla Enter en ASCII
              onKeyUpCapture={handleKey}
            />
          </div>
  
          {/* TodoList */}
          <div className="col-sm-12 col-md-8">
            <h3>Todo List</h3>
            <ul className="list-unstyled">
              {/* TodoList Item */
              todos.map((todo, index) => (
                <li key={index} className="d-flex justify-content-between align-items-center mb-2">
                  <span>{todo}</span>
                  <button className="btn btn-sm btn-primary mb-1" onClick={() => completeTodo(index)}>
                    {todo.completed ? "Undo" : "Complete"}
                  </button>
                </li>

              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  