
import {
  Box,
  VStack,
  Spacer,
  Flex,
} from '@chakra-ui/react';
import { PenddingTask, TaskList } from './components'; 
import { TaskForm } from './components/TaskForm';
import { TaskProvider } from './context/TaskProvider';

export const TodoTask = () => {
  return (
    <TaskProvider>
      <Box p={4} bg='#77B0AA' padding={20} className='todoTask'>
        <VStack spacing={10}> 
          <TaskForm />
          <Flex as="section" direction="column" wrap="nowrap" className='todoTask_results'> 
            <PenddingTask /> 
            <Spacer /> 
            <TaskList/> 
          </Flex>
        </VStack>
      </Box>
    </TaskProvider>
  );
};