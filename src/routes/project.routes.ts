import { Router } from "express";
import { createProjectController } from "../controllers/project/createProject.controller";
import { deleteProjectController } from "../controllers/project/deleteProject.controller";
import { listProjectController } from "../controllers/project/listProjects.controller";
import { updateProjectController } from "../controllers/project/updateProject.controller";
import { verifyProjectExists } from "../middlewares/verifyExistProject.middleware";

const projectRoutes = Router();

projectRoutes.post("", createProjectController);
projectRoutes.get("/:id", listProjectController);
projectRoutes.get("", listProjectController);
projectRoutes.delete("/:id", verifyProjectExists, deleteProjectController);
projectRoutes.patch("/:id", verifyProjectExists, updateProjectController);

export default projectRoutes;
