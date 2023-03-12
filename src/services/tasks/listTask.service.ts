import { AppDataSource } from "../../data-source";
import { Task } from "../../entities/tasks";
import { Project } from "../../entities/project";
import { AppError } from "../../error/ AppError";

export const listTasksService = async (
  projectId: string
): Promise<Task[]> => {
  const projectRepository = AppDataSource.getRepository(Project);

  const project = await projectRepository.findOne({
    where: {
      id: projectId,
    },
    relations: {
      tasks: true,
    },
  });

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  return project!.tasks;
};
