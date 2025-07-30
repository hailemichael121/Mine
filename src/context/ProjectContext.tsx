import React, { createContext, useContext, useState, useEffect } from "react";
import {
  fetchProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../services/api";

const ProjectContext = createContext<any>(null);

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projects, setProjects] = useState<any[]>([]);

  const loadProjects = async () => {
    const data = await fetchProjects();
    setProjects(data);
  };

  const createProject = async (project: any) => {
    const newProject = await addProject(project);
    setProjects([...projects, newProject]);
  };

  const editProject = async (id: string, project: any) => {
    const updatedProject = await updateProject(id, project);
    setProjects(projects.map((p) => (p._id === id ? updatedProject : p)));
  };

  const removeProject = async (id: string) => {
    await deleteProject(id);
    setProjects(projects.filter((p) => p._id !== id));
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{ projects, createProject, editProject, removeProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
