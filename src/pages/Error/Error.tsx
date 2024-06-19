import { Routes } from "@/types/router";
import { Button, Flex, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <Flex direction="column" align="center">
        <Title mb="xl">Oops... Page not found</Title>
        <Link to={Routes.INDEX}>
          <Button>Go to mane page</Button>
        </Link>
      </Flex>
    </div>
  );
};
