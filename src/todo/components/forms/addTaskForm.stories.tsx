import { Meta, StoryFn } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import { AddTaskForm } from "./AddTaskForm";
import { TaskProvider } from "../../context/TaskProvider";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Todo/Components/Form/AddTaskForm",
  component: AddTaskForm,
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

const Template: StoryFn = (args) => <AddTaskForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
