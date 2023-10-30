import { useState } from 'react'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import styles from './todoList.module.scss'
import { Todo } from '../../@types/todo.type'
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const doneList = todos.filter((item: Todo) => item.done)
  const notDoneList = todos.filter((item: Todo) => !item.done)
  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    // setTodos((prev: Todo[]) => [...prev, todo])

    const newTodos = [...todos]
    newTodos.push(todo)
    setTodos(newTodos)
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }
  console.log(todos)
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />

        <TaskList todos={notDoneList} handleDoneTodo={handleDoneTodo} />
        <TaskList doneTaskList todos={doneList} handleDoneTodo={handleDoneTodo} />
      </div>
    </div>
  )
}
