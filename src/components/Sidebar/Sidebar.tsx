import { Paper } from "@mantine/core";
import { ISidebar } from "@/types/sidebar";
import { SidebarItem } from "@/components/Sidebar/SidebarItem/SidebarItem";

const testData: ISidebar[] = [
  {
    label: "Test sidebar data",
    date: "01.01.2024",
    id: 1,
  },
  {
    label: "Test sidebar data",
    date: "01.01.2024",
    id: 1,
  },
];

export const Sidebar = () => {
  return (
    <Paper shadow="sm" radius="md" style={{ overflow: "hidden" }} py={"md"}>
      {testData && testData.map((item) => <SidebarItem {...item} />)}
    </Paper>
  );
};
