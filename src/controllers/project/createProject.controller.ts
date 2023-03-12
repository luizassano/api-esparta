import { NextFunction, Request, Response } from "express";
import { createProjectService } from "../../services/project/createProject.service";
import { classToPlain } from "class-transformer";

export const createProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description } = req.body;

    const newProject = await createProjectService({ name, description });

    return res.status(201).json(classToPlain(newProject));
  } catch (error) {
    next(error);
  }
};
