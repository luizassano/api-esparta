import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";
import { Project } from "../entities/project";
import { AppError } from "../error/ AppError";

export const verifyProjectExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  const projectRepository = AppDataSource.getRepository(Project);
  const project = await projectRepository.findOneBy({ id });

  if (!project) {
    throw new AppError("Project not found.", 404);
  }

  next();
};
