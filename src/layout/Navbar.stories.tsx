import { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './Navbar';

export default {
  title: 'Layout/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
