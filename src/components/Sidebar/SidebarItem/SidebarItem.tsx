import { Flex } from "@mantine/core";

interface IProps {
  label: string;
  date: string;
  link: string;
}

export const SidebarItem = (props: IProps) => {
  return (
    <Flex direction="column" gap="md">
      <></>
      {props.label}
    </Flex>
  );
};
