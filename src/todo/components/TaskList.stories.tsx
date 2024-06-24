
import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { TaskList } from './TaskList';
import { TaskProvider } from '../context/TaskProvider';



export default {
  title: 'Todo/Components/TaskList',
  component: TaskList,
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

const Template: StoryFn = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {};
