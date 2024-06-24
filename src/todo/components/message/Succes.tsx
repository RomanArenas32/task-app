import { Alert, AlertIcon } from "@chakra-ui/react";

export const Succes = () => {
  return (
    <Alert status="success">
      <AlertIcon />
      Task saved correctly!
    </Alert>
  );
};
