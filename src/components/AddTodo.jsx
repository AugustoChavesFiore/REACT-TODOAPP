import React from 'react'

export const AddTodo = ({todo, handleInputChange, handleKey}) => {
  return (
    
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

  )
}
