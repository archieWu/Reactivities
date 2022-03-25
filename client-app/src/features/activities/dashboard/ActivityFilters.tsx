import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilters() {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%", marginTop: 25 }}>
        <Header icon="filter" attached color="teal" content="篩選" />
        <Menu.Item content="全部活動" />
        <Menu.Item content="我參加" />
        <Menu.Item content="我主辦" />
      </Menu>
      <Header />
      <Calendar />
    </>
  );
}
