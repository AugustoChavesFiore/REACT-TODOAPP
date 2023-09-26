import { useState } from "react"
import { AddTodo } from "../components/AddTodo"
import { TodoList } from "../components/TodoList"


export const TodoApp = () => {
  const handleInputChange = (e) => {
    setTodo(e.target.value)
  }
  const handleKey = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, { id: Date.now(), desc: todo, completed: false }])
      setTodo("")
    }
  }
  // Lógica para almacenar los todos
  const [todos, setTodos] = useState([])

  // Lógica para añadir un todo
  const [todo, setTodo] = useState("")

  // Lógica para completar un todo
  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
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
      <AddTodo todo={todo} handleInputChange={handleInputChange} handleKey={handleKey} />

      {/* TodoList */}
      <TodoList todos={todos} completeTodo={completeTodo} />
    </div>
      </div >
    )
  }
