export enum Routes {
  LOGIN = "/login",
  INDEX = "/",
  TASK = "/task/:id",
  TASK_ADD = "/task/add",
  ERROR = "/oops",
}

export const dynamicRoutes = [Routes.TASK];
