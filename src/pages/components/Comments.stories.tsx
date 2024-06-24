import { Meta, StoryFn } from '@storybook/react';
import { Comments } from './Comments';


export default {
  title: 'Pages/Components/Comments',
  component: Comments,
} as Meta;

const Template: StoryFn = (args) => <Comments {...args} />;

export const Default = Template.bind({});

Default.args = {};
