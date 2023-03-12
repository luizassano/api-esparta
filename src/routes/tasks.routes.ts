import { Router } from "express";
import { createTaskController } from "../controllers/tasks/createTask.controller";
import { deleteTaskController } from "../controllers/tasks/deleteTask.controller";
import { listTaskController } from "../controllers/tasks/listTask.controller";
import { updatePostController } from "../controllers/tasks/updateTask.controller";

const tasksRoutes = Router();

tasksRoutes.post("/:projectId", createTaskController);
tasksRoutes.get("/:projectId", listTaskController);
tasksRoutes.delete("/:id", deleteTaskController);
tasksRoutes.patch("/:id", updatePostController);

export default tasksRoutes;
