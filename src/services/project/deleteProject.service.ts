import { Task } from "../../entities/tasks";
import { AppDataSource } from "../../data-source";
import { Project } from "../../entities/project";
import { AppError } from "../../error/ AppError";

export const deleteProjectService = async (id: string) => {
  const projectRepository = AppDataSource.getRepository(Project);

  const project = await projectRepository.findOne({
    where: { id },
    relations: ["tasks"],
  });

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  await AppDataSource.getRepository(Task).delete(
    project.tasks.map((task) => task.id)
  );

  await projectRepository.delete(project.id);

  const updatedProject = await projectRepository.findOne({
    where: { id },
    relations: ["tasks"],
  });

  return updatedProject;
};
