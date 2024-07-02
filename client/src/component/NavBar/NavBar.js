import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Header } = Layout;

// const items1 = ['Home'].map((key) => ({
//   key,
//   label: (
//     <a href="/">
//       {key}
//     </a>
//   ),
// }));

// label: (<Link to="/"> Home </Link>),
// label: <a href="/"> Home </a>,

const items = [
  {
    key: "Home",
    label: (<Link to="/"> Home </Link>),
  },
];

const NavBar = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["Home"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
    </Layout>
  );
};
export default NavBar;
