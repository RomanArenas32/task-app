import { useNavigate } from "react-router-dom";
import { HomeTitle } from "./components";
import { Button, Stack } from "@chakra-ui/react";
import { AddTaskForm } from "../todo/components/forms";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <HomeTitle />
      <Stack spacing={4} align="center" className="home_panel">
        <AddTaskForm />
        <Button colorScheme="blue" onClick={() => navigate("./task")}>
          List of Tasks
        </Button>
      </Stack>
    </div>
  );
};
