import { AuthProvider } from "@/providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "@/configs/router";

import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import "@/styles/global.scss";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
};
