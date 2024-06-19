import Dexie, { type EntityTable } from "dexie";

interface Task {
  id: number;
  label: string;
  date: Date;
  content: string;
}

const db = new Dexie("TasksDatabase") as Dexie & {
  tasks: EntityTable<
    Task,
    "id" // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  tasks: "++id, label, date, content", // primary key "id" (for the runtime!)
});

export type { Task };
export { db };
