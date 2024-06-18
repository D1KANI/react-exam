import { Routes, dynamicRoutes } from "../types/router";

export const getRoute = (
  route: Routes,
  args: Record<string, string | number>,
): string => {
  if (dynamicRoutes.includes(route)) {
    let path = route as string;
    for (const [key, value] of Object.entries(args)) {
      path = path.replace(`:${key}`, String(value));
    }
    return path;
  }
  return route;
};
