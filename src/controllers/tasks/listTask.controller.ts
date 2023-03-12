import { classToPlain } from "class-transformer";
import { Request, Response, NextFunction } from "express";
import { listTasksService } from "../../services/tasks/listTask.service";

export const listTaskController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { projectId } = req.params;
    const tasks = await listTasksService(projectId);
    const tasksPlain = classToPlain(tasks);
    return res.status(200).json(tasksPlain);
  } catch (error) {
    next(error);
  }
};
