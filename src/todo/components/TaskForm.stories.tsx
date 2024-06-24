
import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { TaskForm } from './TaskForm';
import { TaskProvider } from '../context/TaskProvider';



export default {
  title: 'Todo/Components/TaskForm',
  component: TaskForm,
  decorators: [
    (Story) => (
      <ChakraProvider>
        <TaskProvider>
          <Story />
        </TaskProvider>
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <TaskForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
