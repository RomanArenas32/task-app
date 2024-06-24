import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { EditTask } from './EditTask';
import { TaskProvider } from '../context/TaskProvider';



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

const Template: StoryFn = (args) => <EditTask {...args} />;

export const Default = Template.bind({});
Default.args = {}
