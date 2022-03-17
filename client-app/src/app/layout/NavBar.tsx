import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default observer(function NavBar() {
  const { activityStore } = useStore();
  const { openForm } = activityStore;

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: "10px" }} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="活動" />
        <Menu.Item>
          <Button onClick={() => openForm()} positive content="創建活動"></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
});
