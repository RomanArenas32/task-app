
import { Meta, StoryFn } from "@storybook/react";
import { Time } from "./Time";


export default {
  title: "Layout/Components/Time",
  component: Time,
} as Meta;


const Template: StoryFn = (args) => <Time {...args} />;

export const Default = Template.bind({});

Default.args = {};
