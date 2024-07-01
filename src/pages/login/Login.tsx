import { Box } from "@mantine/core";
import { LoginForm } from "@/components/Forms/LoginForm/LoginForm";

import "./Login.scss";

export const Login = () => {
  return (
    <Box className="Login">
      <LoginForm />
    </Box>
  );
};
