import { useContext } from "react"
import { TaskContext } from "../context/TodoContext"



export const useTasks = ()=>{
    const {taskState, toggleTask, addTask, removeTask, editTask} = useContext(TaskContext);
    const {tasks} = taskState;
    return {
        tasks: tasks,
        penddingTask: tasks.filter(tasks => !tasks.completed).length,
        toggleTask,
        addTask,
        removeTask,
        editTask
    }
}