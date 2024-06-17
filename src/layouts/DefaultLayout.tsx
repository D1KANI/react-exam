import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Box, Group } from "@mantine/core";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <>
      <Box component="header">
        <Group className="header">
          <div>LOGO</div>
        </Group>
      </Box>
      <Group gap={"sm"} align={"flex-start"}>
        <Sidebar />
        <main style={{ flexGrow: 1 }}>
          <Outlet />
        </main>
      </Group>
    </>
  );
};
