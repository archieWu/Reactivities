import { observer } from "mobx-react-lite";
import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const { selectedActivity: activity, cancleSelectActivity, openForm } = activityStore;

  if (!activity) return <></>;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group width="2">
          <Button onClick={() => openForm(activity.id)} basic color="blue" content="編輯" />
          <Button onClick={cancleSelectActivity} basic color="grey" content="取消" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
});
