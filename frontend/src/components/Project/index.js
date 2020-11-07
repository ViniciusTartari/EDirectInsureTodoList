import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

import api from "../../service/api";

import Task from "../../components/Task";

import { Container, ProjectHeader, TaskList, TaskForm } from "./style";

const Project = (props) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const { projectId, projectName, axiosAuthConfig } = props;

  useEffect(() => {
    loadTaskList();
  }, []);

  async function loadTaskList() {
    try {
      const response = await api.get(`tasks/${projectId}`, axiosAuthConfig);
      setTasks(response.data);
    } catch (err) {
      console.log(err);
      alert("Error - loadTaskList");
    }
  }

  async function editProject() {
    const newProjectName = prompt("Enter the new project name", projectName);
    if (!newProjectName) return;
    try {
      await api.put(
        `projects/${projectId}`,
        { name: newProjectName },
        axiosAuthConfig
      );
      props.loadProjectList();
    } catch (err) {
      console.log(err);
      alert("Error - editProject");
    }
  }

  async function deleteProject() {
    try {
      await api.delete(`projects/${projectId}`, axiosAuthConfig);
      props.loadProjectList();
    } catch (err) {
      console.log(err);
      alert("Error - deleteProject");
    }
  }

  async function handleAddTask(event) {
    event.preventDefault();
    try {
      const newTask = await api.post(
        "tasks",
        { name: task, projectId: projectId },
        axiosAuthConfig
      );
      setTasks([...tasks, newTask.data]);
      setTask("");
    } catch (err) {
      console.log(err);
      alert("Error - handleAddTask");
    }
  }

  return (
    <Container>
      <ProjectHeader>
        <h3>{projectName}</h3>
        <div>
          <div>
            <FiEdit onClick={editProject} />
          </div>
          <div>
            <FiTrash onClick={deleteProject} />
          </div>
        </div>
      </ProjectHeader>
      <TaskList>
        <h4>To Do</h4>
        {tasks.map((task) =>
          !task.checked ? (
            <Task
              key={task._id}
              taskId={task._id}
              taskName={task.name}
              checked={task.checked}
              date={task.createdAt}
              loadTaskList={loadTaskList}
              axiosAuthConfig={axiosAuthConfig}
            />
          ) : null
        )}
        <h4>Done</h4>
        {tasks.map((task) =>
          task.checked ? (
            <Task
              key={task._id}
              taskId={task._id}
              taskName={task.name}
              checked={task.checked}
              date={task.updatedAt}
              loadTaskList={loadTaskList}
              axiosAuthConfig={axiosAuthConfig}
            />
          ) : null
        )}
      </TaskList>
      <TaskForm onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          placeholder="Add new task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </TaskForm>
    </Container>
  );
};

export default Project;
