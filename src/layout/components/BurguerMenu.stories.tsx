
import { Meta, StoryFn } from "@storybook/react";
import { BurguerMenu } from "./BurguerMenu";
import { TaskProvider } from "../../todo/context/TaskProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Layout/Components/BurguerMenu",
  component: BurguerMenu,
  decorators: [
    (Story) => (
      <BrowserRouter>
       <ChakraProvider>
        <TaskProvider>
          <Story />
        </TaskProvider>
      </ChakraProvider>
      </BrowserRouter>
     
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <BurguerMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
