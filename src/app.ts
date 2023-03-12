import express from "express";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import projectRoutes from "./routes/project.routes";
import tasksRoutes from "./routes/tasks.routes";

const app = express();

app.use(express.json());

app.use("/project", projectRoutes);

app.use("/tasks", tasksRoutes);

app.use(handleErrorMiddleware);

export default app;