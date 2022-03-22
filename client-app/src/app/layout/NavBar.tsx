import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default observer(function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: "10px" }} />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="活動" />
        <Menu.Item>
          <Button as={NavLink} to="/createActivity" positive content="創建活動"></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
});
