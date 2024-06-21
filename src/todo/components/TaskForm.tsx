import React, { useState } from "react";
import { Box, Input, Button, useForm, useToast } from "@chakra-ui/react";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export const TaskForm: React.FC = () => {
  const [task, setTask] = useState<Task>({ title: "" });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const toast = useToast();

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!task.title) {
      toast({
        title: "Error",
        description: "Debes ingresar un título para la tarea.",
        status: "error",
        duration: 3000,
      });
      return;
    }

    // Aquí puedes agregar la lógica para enviar la tarea al servidor o guardarla en el almacenamiento local

    setTask({ title: "" });
    toast({
      title: "Éxito",
      description: "Tarea agregada correctamente.",
      status: "success",
      duration: 3000,
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Descripcion de la tarea"
        {...register("title", {
          required: true,
          minLength: 3,
        })}
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        isInvalid={errors.title}
        error={errors.title?.message}
      />
      <Button type="submit" colorScheme="blue" mt={4}>
        Agregar tarea
      </Button>
    </Box>
  );
};
