import { useState } from 'react'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import styles from './todoList.module.scss'
import { Todo } from '../../@types/todo.type'
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
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

  const startEditTodo = (id: string) => {
    const findedTodo = todos.find((item) => item.id === id)
    if (findedTodo) setCurrentTodo(findedTodo)
  }

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name }
      return null
    })
  }
  const finishEditTodo = () => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === (currentTodo as Todo).id) {
          return currentTodo as Todo
        }
        return item
      })
    })
    setCurrentTodo(null)
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishEditTodo={finishEditTodo} />

        <TaskList todos={notDoneList} handleDoneTodo={handleDoneTodo} startEditTodo={startEditTodo} />
        <TaskList doneTaskList todos={doneList} handleDoneTodo={handleDoneTodo} startEditTodo={startEditTodo} />
      </div>
    </div>
  )
}
