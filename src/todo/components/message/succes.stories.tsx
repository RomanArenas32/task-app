import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Succes } from './Succes';

export default {
  title: 'Todo/Components/Message/Succes',
  component: Succes,
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <Succes {...args} />;

export const Default = Template.bind({});
Default.args = {};
