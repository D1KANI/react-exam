import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Index } from "@/pages/Index/Index";
import { PrivateRoute } from "@/components/PrivateRoute";
import { Routes } from "@/types/router";
import { TaskDetail } from "@/pages/Task/TaskDetail/TaskDetail";
import { TaskAdd } from "@/pages/Task/TaskAdd/TaskAdd";
import { Login } from "@/pages/Login/Login";

export const router = createBrowserRouter([
  // ---------- PRIVATE ROUTES ----------
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DefaultLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: Routes.TASK,
        element: <TaskDetail />,
      },
      {
        path: Routes.TASK_ADD,
        element: <TaskAdd />,
      },
    ],
  },

  // ---------- NOT PRIVATE ROUTES ----------
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: Routes.LOGIN,
        element: <Login />,
      },
    ],
  },
]);
