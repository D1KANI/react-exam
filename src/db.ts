import Dexie, { type EntityTable } from "dexie";
import { ITask } from "@/types/dexie";

const db = new Dexie("TasksDatabase") as Dexie & {
  tasks: EntityTable<
    ITask,
    "id" // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  tasks: "++id, label, date, content", // primary key "id" (for the runtime!)
});

export { db };
