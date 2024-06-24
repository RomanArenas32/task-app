import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { HomeTitle } from './HomeTitle';

export default {
  title: 'Pages/Components/HomeTitle',
  component: HomeTitle,
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <HomeTitle {...args} />;

export const Default = Template.bind({});
Default.args = {};
