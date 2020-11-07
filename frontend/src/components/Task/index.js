import React from "react";
import { FiTrash } from "react-icons/fi";
import api from "../../service/api";
import ReactTooltip from "react-tooltip";
import moment from "moment";

import { TaskItem } from "./styles";

const Task = (props) => {
  const { taskId, taskName, checked, date, axiosAuthConfig } = props;

  async function deleteTask() {
    try {
      await api.delete(`tasks/${taskId}`, axiosAuthConfig);
      props.loadTaskList();
    } catch (err) {
      console.log(err);
      alert("Error - deleteTask");
    }
  }

  async function checkTask(event) {
    if (checked) return;
    try {
      await api.put(
        `tasks/${taskId}`,
        { checked: event.target.checked },
        axiosAuthConfig
      );
      props.loadTaskList();
    } catch (err) {
      console.log(err);
      alert("Error - checkTask");
    }
  }

  return (
    <TaskItem>
      <input type="checkbox" onChange={checkTask} checked={checked} />
      <p
        data-tip={moment(new Date(date)).format("YYYY-MM-DD HH:mm:ss")}
        style={!props.checked ? { color: "blue" } : { color: "black" }}
      >
        {taskName}
      </p>
      <div>{!props.checked && <FiTrash onClick={deleteTask} />}</div>
      <ReactTooltip effect="solid" />
    </TaskItem>
  );
};

export default Task;
