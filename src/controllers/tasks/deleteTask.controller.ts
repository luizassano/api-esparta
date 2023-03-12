import { RequestHandler } from "express";
import { deleteTaskService } from "../../services/tasks/deleteTask.service";

export const deleteTaskController: RequestHandler = async (req, res, next) => {
  try {
    const taskId = req.params.id;

    await deleteTaskService(taskId);

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};
