import { Button, Input } from "@mantine/core";
import { useState } from "react";

interface ILoginForm {
  login: string;
  password: string;
}

const defaultValues = {
  login: "",
  password: "",
};

export const Login = () => {
  const [form, setForm] = useState<ILoginForm>(defaultValues);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(target.value);
    setForm((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  return (
    <form>
      <Input.Wrapper label="Nickname" size="md">
        <Input
          name="login"
          value={form.login}
          variant="filled"
          size="md"
          autoComplete="false"
          onChange={handleChange}
        />
      </Input.Wrapper>
      <Input.Wrapper label="Password" size="md">
        <Input
          name="password"
          value={form.password}
          type="password"
          variant="filled"
          size="md"
          autoComplete="new-password"
          onChange={handleChange}
        />
      </Input.Wrapper>
      <Button variant="filled" size="md">
        Submit
      </Button>
    </form>
  );
};
