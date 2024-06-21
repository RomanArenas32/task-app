import {
  Button,
  Checkbox,
  Flex,
  IconButton,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import {DeleteIcon} from '@chakra-ui/icons';

import { useState } from "react";

interface Task {
  text: string;
  completed?: boolean; 
  id?: string | number; 
}


export const Task = () => {

  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (newTask : string) =>{
    console.log(newTask)
  }

  return (
    <>
      <Flex w="100" h="100">
        <Flex w="100" flexDir="column" ml="5%" mr="5%" color="white">
          <Text fontWeight="700" fontSize={30}>
            Task
          </Text>
          <form>
            <Flex mt="2%">
              <Input value={newTask} onChange={e => setNewTask(e.target.value)} variant="flushed" placeholder="Add new Task" w="30" />
              <Button ml={5} bg="blue.400" onClick={(event) => addTask(newTask)}>
                Add Task
              </Button>
            </Flex>
          </form>

          <Tabs mt="2%" w="100%">
            <TabList>
              <Tab>Incomplete</Tab>
              <Tab>Completed</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>Incompletes</Text>
              </TabPanel>
              <TabPanel>
                <Text>Completed</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
};

const TaskItem = ({task, index})=>{
  return (
    <Checkbox>
      <Flex>
        <Text>{task.text}</Text>
        <IconButton bg='red.700' pos='absolute' right={0} icon={<DeleteIcon/>}/>
      </Flex>
    </Checkbox>
  )
}
