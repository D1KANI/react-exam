import { Routes } from "@/types/router";
import { Button, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <Title>Oops... Page not found</Title>
      <Link to={Routes.INDEX}>
        <Button>Go to mane page</Button>
      </Link>
    </div>
  );
};
