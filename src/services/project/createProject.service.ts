import { AppDataSource } from '../../data-source';
import { Project } from '../../entities/project';
import { IProjectRequest, IProject } from '../../interfaces/project';

export const createProjectService = async ({ name, description }: IProjectRequest): Promise<IProject> => {
  const projectRepository = AppDataSource.getRepository(Project);

  try {
    const projectAlreadyExists = await projectRepository.findOneBy({ name });

    if (projectAlreadyExists) {
      throw new Error('Name already exists');
    }

    if (!name || !description) {
      throw new Error('Missing field');
    }

    const newProject = projectRepository.create({
      name,
      description,
    });

    await projectRepository.save(newProject);

    return newProject;
  } catch (error) {
    throw new Error();
  }
};
