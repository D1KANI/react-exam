import { useLocation, useNavigate } from "react-router-dom";
import { Button, Group, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "@/hooks/useAuth";
import { Routes } from "@/types/router";
import { Validators } from "@/types/validators";
import { validateField } from "@/utils/validateField";

interface ILoginForm {
  login: string;
  password: string;
}

const initialValues = {
  login: "",
  password: "",
};

export const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const form = useForm<ILoginForm>({
    mode: "uncontrolled",
    initialValues,

    validate: {
      login: (value) =>
        validateField(value, {
          [Validators.REQUIRED]: true,
          [Validators.MIN_LENGTH]: 6,
          [Validators.MAX_LENGTH]: 12,
        }),
      password: (value) =>
        validateField(value, {
          [Validators.REQUIRED]: true,
          [Validators.MIN_LENGTH]: 6,
          [Validators.MAX_LENGTH]: 16,
        }),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    auth?.signIn(values.login, () =>
      navigate(location.state?.from || Routes.INDEX, { replace: true }),
    );
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          key={form.key("login")}
          name="login"
          label="Login"
          variant="filled"
          size="md"
          autoComplete="false"
          {...form.getInputProps("login")}
        />
        <PasswordInput
          key={form.key("password")}
          name="password"
          type="password"
          label="Password"
          variant="filled"
          size="md"
          autoComplete="new-password"
          {...form.getInputProps("password")}
        />
      </Stack>
      <Group justify="center" mt="md">
        <Button type="submit" variant="filled" size="md">
          Submit
        </Button>
      </Group>
    </form>
  );
};
