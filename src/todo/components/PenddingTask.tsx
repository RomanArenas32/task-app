import { useTasks } from "../hooks/useTasks";

export const PenddingTask = () => {
  const { penddingTask } = useTasks();

  return <h2 className="penddingTask">Pending Task: <span>{penddingTask}</span></h2>;
};
