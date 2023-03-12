import { RequestHandler } from "express";
import { instanceToPlain } from "class-transformer";
import { updateProjectService } from "../../services/project/updateProject.service";

export const updateProjectController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const updatedProject = await updateProjectService(id, {
      name,
      description,
    });

    return res.status(200).json(instanceToPlain(updatedProject));
  } catch (error) {
    next(error);
  }
};
