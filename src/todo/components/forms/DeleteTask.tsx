import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useTasks } from "../../hooks/useTasks";
import { Task } from "../../interfaces/interfaces";

interface DeleteTaskProps {
  task: Task;
}

export const DeleteTask: React.FC<DeleteTaskProps> = ({ task }) => {
  const { removeTask } = useTasks();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        m={1}
        color="red.700"
        aria-label="Delete task"
        icon={<DeleteIcon />}
        onClick={onOpen}
      />

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="deleteTask">
          <ModalHeader className="deleteTask_header">Delete Task</ModalHeader>
          <ModalCloseButton color="white"/>
          <ModalBody pb={6} className="deleteTask_modal">
            Are you sure you want to delete the task "{task.title}"?
          </ModalBody>

          <ModalFooter className="deleteTask_footer">
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                removeTask(task.id);
                onClose();
              }}
            >
              Yes
            </Button>
            <Button onClick={onClose} colorScheme="blue">No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
