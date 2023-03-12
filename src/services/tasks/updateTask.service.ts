import { AppDataSource } from "../../data-source";
import { Task } from "../../entities/tasks";
import { AppError } from "../../error/ AppError";
import { ITasks } from "../../interfaces/tasks";

export const updateTaskService = async (
  id: string,
  description?: string,
  deadline?: Date,
  status?: string
): Promise<ITasks> => {
  const taskRepository = AppDataSource.getRepository(Task);

  const task = await taskRepository.findOneBy({ id });

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  if (task.status.toLowerCase() === "finalizado") {
    throw new AppError("this task is already finished.", 400);
  }

  if (description) task.description = description;

  if (deadline) task.deadline = deadline;

  if (status) task.status = status;

  await taskRepository.update({ id }, task);

  const updatedTask = await taskRepository.findOneBy({ id });

  return updatedTask!;
};
