export interface ITask {
  id: number;
  label: string;
  date: number;
  content: string;
}

export interface IDexieResponse<T = ITask> {
  data?: T;
  status: 200 | 500;
  statusMessage?: string | unknown;
}
