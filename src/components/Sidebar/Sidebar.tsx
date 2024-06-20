import { Box, Button, Center, Paper } from "@mantine/core";
import { SidebarItem } from "@/components/Sidebar/SidebarItem/SidebarItem";
import { useLocation, useNavigate } from "react-router-dom";
import { getRoute } from "@/utils/getRoute";
import { Routes } from "@/types/router";
import { useEffect, useState } from "react";
import { dexieService } from "@/services/dexie";
import { ITask } from "@/types/dexie";

export const Sidebar = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const addTask = async () => {
    const { data: id } = await dexieService.addNewTask({
      label: "New task",
      content: "Edit this content",
      date: Date.now(),
    });

    if (id) {
      await getTasks();
      navigate(getRoute(Routes.TASK, { id }));
    }
  };

  const getTasks = async () => {
    const { data } = await dexieService.getTaskList();
    if (data) setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    getTasks();
  }, [location.pathname]);

  return (
    <Paper shadow="sm" radius="md" style={{ overflow: "hidden" }} py={"md"}>
      <Box px={"md"} py={"xs"}>
        <Button w="100%" onClick={addTask}>
          Add new task
        </Button>
      </Box>
      {tasks.length ? (
        tasks.map((item) => <SidebarItem key={item.id} {...item} />)
      ) : (
        <Box px={"md"} py={"xs"}>
          <Center>You hasn't tasks</Center>
        </Box>
      )}
    </Paper>
  );
};
