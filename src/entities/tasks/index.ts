import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { Project } from "../project";
  
  @Entity("tasks")
  export class Task {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @Column()
    description!: string;
  
    @Column({ type: "timestamp" })
    deadline!: Date;
  
    @Column()
    status!: string;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  
    @ManyToOne(() => Project, (project) => project.tasks, { eager: true })
    project!: Project;
  }
  