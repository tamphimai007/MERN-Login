import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  HomeOutlined,
  UserAddOutlined,
  LoginOutlined,
  LogoutOutlined,
  DownOutlined
} from "@ant-design/icons";

// Router
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { SubMenu } = Menu;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
  console.log("user Navbar", user);

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/");
  };
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        {/* <a href="" ></a>*/}
        <Link to="/">Home</Link>
      </Menu.Item>

      {user && (
        <>
          {/* {user.username} */}
          <SubMenu
            style={{ float: "right" }}
            key="SubMenu"
            icon={<DownOutlined />}
            title={user.username}
          >
            <Menu.Item 
            icon={<LogoutOutlined />}
            key="setting:1" onClick={logout}>
              Logout
            </Menu.Item>

          </SubMenu>
        </>
      )}

      {!user && (
        <>
          <Menu.Item
            key="mail"
            style={{ float: "right" }}
            icon={<LoginOutlined />}
          >
            {/* <a href="" ></a>*/}
            <Link to="/login">Login</Link>
          </Menu.Item>

          <Menu.Item
            style={{ float: "right" }}
            key="register"
            icon={<UserAddOutlined />}
          >
            <Link to="/register">Register</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default Navbar;
