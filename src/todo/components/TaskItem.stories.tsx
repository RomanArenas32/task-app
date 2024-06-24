import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { TaskItem, Tasks } from './TaskItem'; // Asegúrate de importar el componente correcto
import { TaskProvider } from '../context/TaskProvider';

export default {
  title: 'Todo/Components/TaskItem', // Nombre único para la historia
  component: TaskItem,
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

const Template: StoryFn<Tasks> = (args) => <TaskItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    description: 'Example task',
    completed: false,
  },
};
