import { Task } from "../interfaces/interfaces"
import { useTasks } from "../hooks/useTasks"

interface props {
    task: Task
}

export const TaskItem = ({task}: props) => {

  const {toggleTask} = useTasks();



  return (
    <li style={{
      cursor: 'pointer', textDecoration: task.completed ? 'line-through' : ""
    }}
     onClick={()=> toggleTask(task.id)}
    >
        {task.description}
    </li>
  )
}
