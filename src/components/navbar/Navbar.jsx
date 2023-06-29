import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { TaskStatus } from "./TaskStatus";

const initialState = [
  { id: 4, description: "Option 4", status: "in progress" },
  { id: 5, description: "Option 5", status: "in progress" },
  { id: 6, description: "Option 6", status: "in progress" },
];
const initialStateTaskOnDisplay = [
  { id: "", description: "", status: "" },
  { id: "", description: "", status: "" },
  { id: "", description: "", status: "" },
];

const Navbar = () => {
  const [tasks, setTasks] = useState(initialState);
  const [currentTaskOnDisplay, setCurrentTaskOnDisplay] = useState(
    initialStateTaskOnDisplay
  );
  const [showTaskProgressComponent, setshowTaskProgressComponent] =
    useState(false);

  const handleMenuClick = (e) => {
    const clickedTask = tasks.find((task) => {
      return task.id == e.key;
    });

    setCurrentTaskOnDisplay(clickedTask);

    setshowTaskProgressComponent(true);
  };

  const menu1 = (
    <Menu onClick={handleMenuClick}>
      {/* <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item> */}
    </Menu>
  );

  const menu2 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="4">Option 4</Menu.Item>
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="nav2">
          <Dropdown overlay={menu1}>
            <a href="/#" onClick={(e) => e.preventDefault()}>
              Reqests <DownOutlined />
            </a>
          </Dropdown>
        </Menu.Item>

        <Menu.Item key="nav3">
          <Dropdown overlay={menu2}>
            <a href="/#" onClick={(e) => e.preventDefault()}>
              Tasks <DownOutlined />
            </a>
          </Dropdown>
        </Menu.Item>
      </Menu>
      {showTaskProgressComponent && (
        <TaskStatus tasks={currentTaskOnDisplay} setTasks={setTasks} />
      )}
    </>
  );
};

export default Navbar;
