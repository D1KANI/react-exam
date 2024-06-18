import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Box, Group } from "@mantine/core";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <Box className="layout" h={"100%"}>
      <Box
        display={"flex"}
        px={"lg"}
        mb={"md"}
        style={{
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        }}
        h={"60px"}
        component="header"
      >
        <Group className="header">
          <div>LOGO</div>
        </Group>
      </Box>
      <Group gap={"sm"} mx={"lg"} h={"100%"} align={"flex-start"}>
        <Box w={"300px"}>
          <Sidebar />
        </Box>
        <Box component="main" h={"100%"} style={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Group>
    </Box>
  );
};
