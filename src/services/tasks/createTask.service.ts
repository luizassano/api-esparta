import { ITasksRequest, ITasks } from "../../interfaces/tasks";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error/ AppError";
import { Task } from "../../entities/tasks";
import { Project } from "../../entities/project";

export const createTaskService = async (
  { description, deadline, status }: ITasksRequest,
  projectId: string
): Promise<ITasks> => {

  const taskRepository = AppDataSource.getRepository(Task);
  const projectRepository = AppDataSource.getRepository(Project)

  const project = await projectRepository.findOne({
    where:{
      id: projectId
    }
  })

  if(!project){
    throw new AppError("Project not found", 404)
  }

  const task = {
    project,
    description,
    deadline,
    status,
  };

  const newTask = taskRepository.create(task);

  await taskRepository.save(newTask);

  return newTask;
};

