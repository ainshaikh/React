import React from 'react'

export const TodoItem = ({todo}) => {
  return (
    <div>
      <h4>
        {todo.title}
      </h4>
      <p>{todo.description}</p>
      <button type="button" class="btn btn-sm btn-danger" onClick={}>Delete</button>
    </div>
  )
}

export default TodoItem
