import './Todo.css'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'
import { useState } from 'react'

const Todo = () => {
  //definisikan data sebelum return
  const [getTodos, setTodos] = useState( [
    { id: 1, title: 'Eat' },
    { id: 2, title: 'Sleep' },
    { id: 3, title: 'Code' },
  ])

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo))
    // console.log(todos);
  }

  return (
    <div>
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo}/>
      {/* mengrim data ke child component */}
      <TodoList dataTodos={getTodos} />
    </div>
  )
}

export default Todo;
