import { useTasks } from "../hooks/useTasks"

export const PenddingTask = () => {


    const {penddingTask} = useTasks();

  return (
    <h2>Tareas Pendientes: {penddingTask}</h2>
  )
}
