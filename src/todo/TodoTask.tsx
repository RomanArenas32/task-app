
import {
  Box,
  VStack,
  Spacer,
  Flex,
} from '@chakra-ui/react';
import { PenddingTask, TaskList } from './components'; 

export const TodoTask = () => {
  return (
      <Box p={4} bg='#77B0AA' padding={20} className='todoTask'>
        <VStack spacing={10}> 
          <Flex as="section" direction="column" wrap="nowrap" className='todoTask_results'> 
            <PenddingTask /> 
            <Spacer /> 
            <TaskList/> 
          </Flex>
        </VStack>
      </Box>
  );
};