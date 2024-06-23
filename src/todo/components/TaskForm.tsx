import React, { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";
import { useTasks } from "../hooks/useTasks";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export const TaskForm: React.FC = () => {
  const { addTask, tasks } = useTasks();

  const generateUniqueId = (): string => {
    return `${new Date().getTime()}-${Math.random().toString(36).substring(2, 9)}`;
  };

  const [task, setTask] = useState<Task>({
    id: "",
    description: "",
    completed: false,
  });

  const handleAddTask = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (task.description.trim() == "") {
      return alert("Debes agregar la desc");
    }
    if (task.description.length <= 3) {
      return alert("La tarea debe tener mas de 3 caracteres");
    }
    addTask(task);
  };

  return (
    <Box as="form" onSubmit={handleAddTask}>
      <Input
        color="white"
        type="text"
        placeholder="Descripcion de la tarea"
        value={task.description}
        onChange={(e) =>
          setTask({
            ...task,
            description: e.target.value,
            id: generateUniqueId(),
          })
        }
      />
      <Button type="submit" colorScheme="blue" mt={4}>
        Agregar tarea
      </Button>
    </Box>
  );
};
