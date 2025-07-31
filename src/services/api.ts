import axios from "axios";

const API_URL = "https://your-backend-url.com/api";

export const fetchProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};

export const addProject = async (project: any) => {
  const response = await axios.post(`${API_URL}/projects`, project);
  return response.data;
};

export const updateProject = async (id: string, project: any) => {
  const response = await axios.put(`${API_URL}/projects/${id}`, project);
  return response.data;
};

export const deleteProject = async (id: string) => {
  const response = await axios.delete(`${API_URL}/projects/${id}`);
  return response.data;
};
