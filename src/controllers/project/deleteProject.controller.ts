import { NextFunction, Request, Response } from "express";
import { deleteProjectService } from "../../services/project/deleteProject.service";

const deleteProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await deleteProjectService(id);
    return res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export { deleteProjectController };
