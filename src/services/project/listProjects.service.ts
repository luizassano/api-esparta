import { AppDataSource } from "../../data-source";
import { Project } from "../../entities/project";

export const listProjectsService = async (): Promise<Project[]> => {
  const projectRepository = AppDataSource.getRepository(Project);

  const projects = await projectRepository.find();

  return projects;
};
