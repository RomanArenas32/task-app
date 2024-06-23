import { EditIcon } from "@chakra-ui/icons";
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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useTasks } from "../hooks/useTasks";
import { Task } from "../interfaces/interfaces";
interface EditTaskProps {
  task: Task;
}

export const EditTask: React.FC<EditTaskProps> = ({ task }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { toggleTask } = useTasks();

  const changeTask = (task: Task): void => {
    console.log(task);
  };

  return (
    <>
      <IconButton
        color="yellow.700"
        aria-label="Search database"
        icon={<EditIcon />}
        onClick={onOpen}
      />

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit you task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Lorem ipsum dolor sit amet.</ModalBody>

          <ModalFooter flex={2} justifyContent="space-between" flexDir="row">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" mr={3} onClick={() => changeTask(task)}>
              save changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
