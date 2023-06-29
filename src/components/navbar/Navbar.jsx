import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Navbar = () => {
  const handleMenuClick = (e) => {
    console.log(e.key);
  };

  const menu1 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
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
  );
};

export default Navbar;
