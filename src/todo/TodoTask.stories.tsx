import { Meta, StoryFn } from '@storybook/react';
import { TodoTask } from './TodoTask';
import { ChakraProvider } from '@chakra-ui/react';
import { TaskProvider } from './context/TaskProvider';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Todo/TodoTask',
  component: TodoTask,
  decorators: [
    (Story) => (
      <BrowserRouter>
       <ChakraProvider>
        <TaskProvider>
          <Story />
        </TaskProvider>
      </ChakraProvider>
      </BrowserRouter>
     
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <TodoTask {...args} />;

export const Default = Template.bind({});

Default.args = {};
