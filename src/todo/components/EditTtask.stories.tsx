import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { EditTask } from './EditTask';
import { TaskProvider } from '../context/TaskProvider';
import { Task } from '../interfaces/interfaces';



export default {
  title: 'Todo/Components/EditTask',
  component: EditTask,
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

const Template: StoryFn<{task: Task}> = (args) => <EditTask {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: "Tarea",
    description: 'Tarea de ejemplo',
    expiration: "2024-06-05",
    priority: "higth",
    completed: false,
  },
}
