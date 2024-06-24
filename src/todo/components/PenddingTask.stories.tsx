
import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { PenddingTask } from './PenddingTask';
import { TaskProvider } from '../context/TaskProvider';


export default {
  title: 'Todo/Components/PenddingTask',
  component: PenddingTask,
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

const Template: StoryFn = (args) => <PenddingTask {...args} />;

export const Default = Template.bind({});

Default.args = {};
