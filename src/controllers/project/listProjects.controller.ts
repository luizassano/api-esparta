import { NextFunction, Request, Response } from "express";
import { listProjectsService } from "../../services/project/listProjects.service";
import { classToPlain } from "class-transformer";

export const listProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const listProject = await listProjectsService();

    return res.status(200).json(classToPlain(listProject));
  } catch (error) {
    next(error);
  }
};
