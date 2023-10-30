import React, { useState } from 'react'
import styles from './taskInput.module.scss'
import { Todo } from '../../@types/todo.type'

interface TaskInputProps {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishEditTodo: () => void
}
export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishEditTodo } = props
  const [name, setName] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentTodo) {
      if (currentTodo.name === '') {
        alert('Task name must not be empty')
        return
      }
      finishEditTodo()
      if (name) setName('')
    } else {
      if (name === '') {
        alert('Task name must not be empty')
        return
      }
      addTodo(name)
      setName('')
    }
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (currentTodo) editTodo(event.target.value)
    else setName(event.target.value)
  }
  return (
    <div>
      <h1 className={styles.title}>To do list</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='caption goes here'
          value={currentTodo ? currentTodo.name : name}
          onChange={handleInputChange}
        />
        <button type='submit'>{currentTodo ? '☑️' : '➕'}</button>
      </form>
    </div>
  )
}
