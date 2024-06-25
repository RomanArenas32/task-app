
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Links } from "./Links";

export default {
  title: "Layout/Components/Links",
  component: Links,
  decorators: [(Story) => <BrowserRouter><Story /></BrowserRouter>],
} as Meta;

const Template: StoryFn = (args) => <Links {...args} />;

export const Default = Template.bind({});
Default.args = {};
