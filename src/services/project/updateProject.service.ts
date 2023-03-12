import { AppDataSource } from "../../data-source";
import { IUpdateProject } from "../../interfaces/project";
import { Project } from "../../entities/project";
import { AppError } from "../../error/ AppError";

export const updateProjectService = async (
  id: string,
  project: IUpdateProject
) => {
  const projectRepository = AppDataSource.getRepository(Project);

  const existingProject = await projectRepository.findOneBy({ id });

  if (!existingProject) {
    throw new AppError(`Project not found`);
  }

  await projectRepository
    .createQueryBuilder()
    .update(Project)
    .set(project)
    .where("id = :id", { id })
    .execute();

  return { message: `Project updated successfully` };
};
