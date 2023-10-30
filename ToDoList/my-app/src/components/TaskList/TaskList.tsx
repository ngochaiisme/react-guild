import { TaskListProps } from '../../@types/tasklist.type'
import styles from './taskList.module.scss'

export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, handleDoneTodo, startEditTodo, deleteTodo } = props

  const handleOnChange = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(id, e.target.checked)
  }

  const html = todos.map((item) => (
    <div className={styles.task} key={item.id}>
      <input
        type='checkbox'
        className={styles.taskCheckbox}
        checked={item.done}
        // onChange={(e) => handleDoneTodo(item.id, e.target.checked)}
        onChange={handleOnChange(item.id)}
      />
      <span className={`${styles.taskName} ${item.done ? styles.taskNameDone : ''}`}>{item.name}</span>
      <div className={styles.taskActions}>
        <button className={styles.taskBtn} onClick={() => startEditTodo(item.id)}>
          🖋️
        </button>
        <button className={styles.taskBtn} onClick={() => deleteTodo(item.id)}>
          🗑️
        </button>
      </div>
    </div>
  ))

  return (
    <div className='mt-2'>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
      <div className={styles.tasks}>{html}</div>
    </div>
  )
}
