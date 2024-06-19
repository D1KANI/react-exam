import { db } from "@/db";
import { ITask } from "@/types/dexie";

export const dexieService = {
  addNewTask: async (payload: Omit<ITask, "id">) => {
    try {
      return await db.tasks.add({
        ...payload,
        date: Date.now(),
      });
    } catch (error) {
      console.error(`dexieService [addNewTask]: ${error}`);
    }
  },

  getTask: async (id: number) => {
    try {
      return await db.tasks.get(id);
    } catch (error) {
      console.error(`dexieService [getTask]: ${error}`);
    }
  },

  updateTask: async (
    payload: Required<Pick<ITask, "id">> & Partial<Omit<ITask, "id">>,
  ) => {
    try {
      const updatedField: Partial<Omit<ITask, "id">> = {};
      if ("label" in payload) {
        updatedField.label = payload.label;
      }
      if ("content" in payload) {
        updatedField.content = payload.content;
      }
      return await db.tasks.update(payload.id, updatedField);
    } catch (error) {
      console.error(`dexieService [updateTask]: ${error}`);
    }
  },

  removeTask: async (id: number) => {
    try {
      await db.tasks.delete(id);
    } catch (error) {
      console.error(`dexieService [removeTask]: ${error}`);
    }
  },

  getTaskList: async () => {
    try {
      return await db.tasks.toArray();
    } catch (error) {
      console.error(`dexieService [getTaskList]: ${error}`);
    }
  },
};
