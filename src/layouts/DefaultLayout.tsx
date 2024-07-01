import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Box, Group, Image, Text } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Routes } from "@/types/router";
import { useLogout } from "@/hooks/useLogout";
import { useAuth } from "@/hooks/useAuth";

export const DefaultLayout = () => {
  const auth = useAuth();
  const { handleLogout } = useLogout();

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
        <Group className="header" w="100%">
          <Group justify="space-between" w="100%">
            <Link to={Routes.INDEX}>
              <Group align="center" gap="md">
                <Image
                  src={logo}
                  w="36px"
                  h="36px"
                  style={{ objectFit: "cover" }}
                />
                <Text c="text" fw={500}>
                  Task Manager
                </Text>
              </Group>
            </Link>
            {auth?.user && (
              <Text
                c="text"
                fw={500}
                style={{ cursor: "pointer" }}
                onClick={handleLogout}
              >
                Log out
              </Text>
            )}
          </Group>
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
