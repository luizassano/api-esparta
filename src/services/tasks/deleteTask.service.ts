import { AppDataSource } from "../../data-source";
import { Task } from "../../entities/tasks";
import { AppError } from "../../error/ AppError";

export const deleteTaskService = async (taskId: string) => {
  const taskRepository = AppDataSource.getRepository(Task);

  const task = await taskRepository.findOne({
    where: { id: taskId },
  });

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  await taskRepository.delete(task.id);
};
