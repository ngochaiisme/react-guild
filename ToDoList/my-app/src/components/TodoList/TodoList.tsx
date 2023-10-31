import { useEffect, useState } from 'react'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import styles from './todoList.module.scss'
import { Todo } from '../../@types/todo.type'
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const doneList = todos.filter((item: Todo) => item.done)
  const notDoneList = todos.filter((item: Todo) => !item.done)

  interface HandleNewTodos {
    (todos: Todo[]): Todo[]
  }

  const syncTodosToLocalStorage = (handleNewTodos: HandleNewTodos) => {
    const todoString = localStorage.getItem('todos')
    const todoObj: Todo[] = JSON.parse(todoString || '[]')
    const newTodoObj = handleNewTodos(todoObj)
    localStorage.setItem('todos', JSON.stringify(newTodoObj))
  }

  useEffect(() => {
    const todoString = localStorage.getItem('todos')
    const todoObj: Todo[] = JSON.parse(todoString || '[]')
    setTodos(todoObj)
  }, [])

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

    // const todosString = localStorage.getItem('todos')
    // const todosObj: Todo[] = JSON.parse(todosString || '[]')
    // const newTodoObj = [...todosObj, todo]
    // localStorage.setItem('todos', JSON.stringify(newTodoObj))
    syncTodosToLocalStorage((todoObj: Todo[]) => [...todoObj, todo])
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
    const handler = (todoObj: Todo[]) => {
      return todoObj.map((item) => {
        if (item.id === (currentTodo as Todo).id) {
          return currentTodo as Todo
        }
        return item
      })
    }
    setTodos(handler)
    setCurrentTodo(null)
    //cap nhap local storage
    syncTodosToLocalStorage(handler)
    // const todoString = localStorage.getItem('todos')
    // const todoObj: Todo[] = JSON.parse(todoString || '[]')
    // const newTodoObj = handler(todoObj)
    // localStorage.setItem('todos', JSON.stringify(newTodoObj))
  }
  const deleteTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null)
    }
    const handler = (todoObj: Todo[]) => {
      return todoObj.filter((item) => item.id !== id)
    }

    setTodos(handler)
    // setTodos((prev) => {
    //   // return prev.filter((item) => item.id !== id)
    //   const index = prev.findIndex((item) => item.id === id)
    //   if (index > -1) {
    //     const result = [...prev]
    //     result.splice(index, 1)
    //     return result
    //   }
    //   return prev
    // })

    syncTodosToLocalStorage(handler)
    // const todoString = localStorage.getItem('todos')
    // const todoObj: Todo[] = JSON.parse(todoString || '[]')
    // const newTodoObj = todoObj.filter((item: Todo) => item.id !== id)
    // localStorage.setItem('todos', JSON.stringify(newTodoObj))
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishEditTodo={finishEditTodo} />

        <TaskList
          todos={notDoneList}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
        <TaskList
          doneTaskList
          todos={doneList}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}
