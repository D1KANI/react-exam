import { Box, Flex, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { getRoute } from "@/utils/getRoute";
import { Routes } from "@/types/router";
import { ITask } from "@/types/dexie";
import { parseDate } from "@/utils/parseDate";

interface IProps extends ITask {}

export const SidebarItem = (props: IProps) => {
  return (
    <Box
      component={Link}
      to={getRoute(Routes.TASK, { id: props.id })}
      px={"md"}
      py={"xs"}
      display={"block"}
      className="hoveredBox"
    >
      <Flex direction="column" gap="xs">
        <Text fw={500} c="text">
          {props.label}
        </Text>
        <Text size="xs" c="text">
          {parseDate(props.date)}
        </Text>
      </Flex>
    </Box>
  );
};
