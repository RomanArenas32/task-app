import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useTasks } from "../hooks/useTasks";
import { Task } from "../interfaces/interfaces";
import { useState } from "react";
interface EditTaskProps {
  task: Task;
}

export const EditTask: React.FC<EditTaskProps> = ({ task }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newDescription, setNewDescription] = useState<string>("");
   const { editTask } = useTasks();

  const handleEditTask =  async(e: React.SyntheticEvent) => {
    e.preventDefault();

    if (newDescription.trim() == "") {
      return alert("You must add the description");
    }
    if (newDescription.length <= 3) {
      return alert("The task must be longer than 3 characters");
    }
    editTask(newDescription, task.id)
    onClose()
  };
 

 
  return (
    <>
      <IconButton
        color="yellow.700"
        aria-label="Edit Button"
        icon={<EditIcon />}
        onClick={onOpen}
      />

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit you task</ModalHeader>
          <ModalCloseButton />
          <Input
          m={2}
          width="90%"
            color="black"
            type="text"
            placeholder="Task Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />

          <ModalFooter flex={2} justifyContent="space-between" flexDir="row">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" mr={3} onClick={handleEditTask}>
              save changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
