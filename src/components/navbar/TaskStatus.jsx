// import React from 'react'
import { Form, Button, Select } from "antd";
const { Option } = Select;
import PropTypes from "prop-types";

export const TaskStatus = ({ tasks, setTasks }) => {
  /**
   * Updates the status of a task in the 'tasks' array in place.
   *
   * @param {number} taskId - The id of the task to update.
   * @param {string} newStatus - The new value for the status property.
   */

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const taskIndex = updatedTasks.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        updatedTasks[taskIndex].status = newStatus;
      }

      return updatedTasks;
    });
  };

  const onFinish = (values) => {
    const { agree } = values;
    updateTaskStatus(tasks.id, agree);
  };

  return (
    <div className="task-status">
      <div className="task-particulars">
        <p>
          Task:
          <span>
            <strong>{tasks.description}</strong>
          </span>
        </p>
        <p>
          status:
          <span>
            <strong>{tasks.status}</strong>
          </span>
        </p>
      </div>

      <Form onFinish={onFinish}>
        <Form.Item name="agree" label="Update status">
          <Select>
            <Option value="inProgress">In Progress</Option>
            <Option value="done">Done</Option>
            <Option value="justification">Justification</Option>
            <Option value="completed">Completed</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

TaskStatus.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};
