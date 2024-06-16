import "./App.css";
import { Routes } from "./types/router";
import { getRoute } from "./utils/getRoute";

export const App = () => {
  return <>{getRoute(Routes.TASK, { id: "3" })}</>;
};
