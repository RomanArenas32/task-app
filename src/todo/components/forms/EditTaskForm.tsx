import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
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
import { useState } from "react";
import { Task } from "../../interfaces/interfaces";
import { EditIcon } from "@chakra-ui/icons";

interface EditTaskProps {
  task: Task;
}

export const EditTaskForm: React.FC<EditTaskProps> = ({ task }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskEdit, setTaskEdit] = useState<Task>({
    id: task.id,
    title: task.title,
    description: task.description,
    expiration: task.expiration,
    priority: task.priority,
    completed: task.completed,
  });

  const handleEditTask = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log(taskEdit)
  };

  return (
    <>
    <IconButton
        m={1}
        color="yellow.700"
        aria-label="Edit task"
        icon={<EditIcon />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="addTaskForm">
          <ModalHeader className="addTaskForm_header">Edit You task</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody pb={6} className="addTaskForm_modal">
            <FormControl mt={2}>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title of task"
                value={taskEdit.title}
                onChange={(e) =>
                    setTaskEdit((prevTask) => ({
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
                value={taskEdit.description}
                onChange={(e) =>
                    setTaskEdit((prevTask) => ({
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
                value={taskEdit.expiration}
                onChange={(e) =>
                    setTaskEdit((prevTask) => ({
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
                value={taskEdit.priority}
                onChange={(e) =>
                    setTaskEdit((prevTask) => ({
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
            <Button colorScheme="blue" mr={3} onClick={handleEditTask}>
              Edit Task
            </Button>
            <Button onClick={onClose} colorScheme="red">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
