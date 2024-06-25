import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../../hooks/useTasks";
import { Succes } from "../message";
import { Task } from "../../interfaces/interfaces";

export const AddTaskForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState<boolean>(false);
  const navigate = useNavigate();

  const { addTask } = useTasks();
  const [task, setTask] = useState<Task>({
    id: "1",
    title: "",
    description: "",
    expiration: "",
    priority: "",
    completed: false,
  });

  const generateUniqueId = (): string => {
    return `${new Date().getTime()}-${Math.random().toString(36).substring(2, 9)}`;
  };

  const handleAddTask = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (task.title.trim() === "") {
      return alert("Title cannot be empty");
    }
    if (task.description.trim() === "") {
      return alert("Description cannot be empty");
    }
    if (task.expiration.trim() === "") {
      return alert("Expiration date cannot be empty");
    }
    if (task.priority.trim() === "") {
      return alert("Priority must be selected");
    }
    task.id = generateUniqueId();
    setMessage(true);

    setTimeout(() => {
      onClose();
      setTask({
        id: "",
        title: "",
        description: "",
        expiration: "",
        priority: "",
        completed: false,
      });
      setMessage(false);
    }, 2000);
    addTask(task);

    setTimeout(() => {
      navigate("./task");
    }, 2400);
  };

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Add Task +
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="addTaskForm">
          <ModalHeader className="addTaskForm_header">Add new</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody pb={6} className="addTaskForm_modal">
            <FormControl mt={2}>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title of task"
                value={task.title}
                onChange={(e) =>
                  setTask((prevTask) => ({
                    ...prevTask,
                    title: e.target.value,
                  }))
                }
              />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Description of task"
                value={task.description}
                onChange={(e) =>
                  setTask((prevTask) => ({
                    ...prevTask,
                    description: e.target.value,
                  }))
                }
              />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Expiration</FormLabel>
              <Input
                type="date"
                value={task.expiration}
                onChange={(e) =>
                  setTask((prevTask) => ({
                    ...prevTask,
                    expiration: e.target.value,
                  }))
                }
              />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Priority</FormLabel>
              <Select
                placeholder="Select priority"
                className="addTaskForm_priority"
                value={task.priority}
                onChange={(e) =>
                  setTask((prevTask) => ({
                    ...prevTask,
                    priority: e.target.value,
                  }))
                }
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter className="addTaskForm_footer">
            <Button colorScheme="blue" mr={3} onClick={handleAddTask}>
              Save Task
            </Button>
            <Button onClick={onClose} colorScheme="red">
              Cancel
            </Button>
          </ModalFooter>
          {message && <Succes />}
        </ModalContent>
      </Modal>
    </>
  );
};
