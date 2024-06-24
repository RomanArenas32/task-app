import { Meta, StoryFn } from "@storybook/react";
import { About } from "./About";


export default {
  title: "Pages/About",
  component: About,
} as Meta;

const Template: StoryFn = (args) => <About {...args} />;

export const Default = Template.bind({});

Default.args = {};