import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { TaskProvider } from '../todo/context/TaskProvider';
import { Home } from './Home';

export default {
  title: 'Pages/Home',
  component: Home,
  decorators: [
    (Story) => (
      <ChakraProvider>
        <TaskProvider>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </TaskProvider>
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
