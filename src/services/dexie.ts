import { db } from "@/db";
import { IDexieResponse, ITask } from "@/types/dexie";

export const dexieService = {
  addNewTask: async (
    payload: Omit<ITask, "id">,
  ): Promise<IDexieResponse<number>> => {
    try {
      const data = await db.tasks.add({
        ...payload,
        date: Date.now(),
      });
      return {
        data,
        status: 200,
      };
    } catch (error) {
      console.error(`dexieService [addNewTask]: ${error}`);
      return {
        status: 500,
        statusMessage: error,
      };
    }
  },

  getTask: async (id: number): Promise<IDexieResponse> => {
    try {
      const data = await db.tasks.get(id);
      return {
        data,
        status: 200,
      };
    } catch (error) {
      console.error(`dexieService [getTask]: ${error}`);
      return {
        status: 500,
        statusMessage: error,
      };
    }
  },

  updateTask: async (
    payload: Required<Pick<ITask, "id">> & Partial<Omit<ITask, "id">>,
  ): Promise<IDexieResponse<number>> => {
    try {
      const updatedField: Partial<Omit<ITask, "id">> = {};
      if ("label" in payload) {
        updatedField.label = payload.label;
      }
      if ("content" in payload) {
        updatedField.content = payload.content;
      }

      const result = await db.tasks.update(payload.id, updatedField);
      return {
        data: result,
        status: 200,
      };
    } catch (error) {
      console.error(`dexieService [updateTask]: ${error}`);
      return {
        status: 500,
        statusMessage: error,
      };
    }
  },

  removeTask: async (id: number): Promise<IDexieResponse> => {
    try {
      await db.tasks.delete(id);
      return {
        status: 200,
      };
    } catch (error) {
      console.error(`dexieService [removeTask]: ${error}`);
      return {
        status: 500,
        statusMessage: error,
      };
    }
  },

  getTaskList: async (): Promise<IDexieResponse<ITask[]>> => {
    try {
      const data = await db.tasks.toArray();
      return {
        data,
        status: 200,
      };
    } catch (error) {
      console.error(`dexieService [getTaskList]: ${error}`);
      return {
        status: 500,
        statusMessage: error,
      };
    }
  },
};
