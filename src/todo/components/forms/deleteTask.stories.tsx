import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Task } from '../../interfaces/interfaces';
import { DeleteTask } from './DeleteTask';
import { TaskProvider } from '../../context/TaskProvider';


export default {
  title: 'Todo/Components/Form/DeleteTask',
  component: DeleteTask,
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

const Template: StoryFn<{ task: Task }> = (args) => <DeleteTask {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Sample Task',
    description: 'This is a sample task.',
    expiration: '2024-12-31',
    priority: 'medium',
    completed: false,
  },
};
