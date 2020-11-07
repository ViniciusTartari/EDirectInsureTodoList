import React, { useEffect, useState } from "react";

import api from "../../service/api";

//import LogoImg from '../../assets/logo.svg';
import { Content, NewProject, Header, ProjectList } from "./styles";
import Project from "../../components/Project";

const Dashboard = ({ history }) => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState("");

  const user = JSON.parse(localStorage.getItem("@codechallenge:user"));
  const userInfo = user.user;
  const axiosAuthConfig = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  useEffect(() => {
    loadProjectList();
  }, []);

  async function loadProjectList() {
    try {
      const response = await api.get("projects", axiosAuthConfig);
      setProjects(response.data);
    } catch (err) {
      console.log(err);
      alert("Error - loadProjectList");
    }
  }

  async function handleAddProject(event) {
    event.preventDefault();
    try {
      const newProject = await api.post(
        "projects",
        { name: project },
        axiosAuthConfig
      );

      setProjects([...projects, newProject.data]);
      setProject("");
    } catch (err) {
      console.log(err);
      alert("Error - handleAddProject");
    }
  }

  function logout() {
    localStorage.removeItem("@codechallenge:user");
    history.push("/");
  }

  return (
    <>
      <Header>
        EDirectInsure TODO List
        <div>
          {userInfo.name}
          <button type="submit" onClick={logout}>
            Logout
          </button>
        </div>
      </Header>

      <Content>
        <ProjectList>
          {projects.map((project) => (
            <Project
              key={project._id}
              projectId={project._id}
              projectName={project.name}
              loadProjectList={loadProjectList}
              axiosAuthConfig={axiosAuthConfig}
            />
          ))}
        </ProjectList>

        <NewProject onSubmit={handleAddProject}>
          <h3>Create new project</h3>
          <div>
            <input
              type="text"
              value={project}
              placeholder="Project name"
              onChange={(e) => setProject(e.target.value)}
            />
            <button type="submit">Create project</button>
          </div>
        </NewProject>
      </Content>
    </>
  );
};

export default Dashboard;
