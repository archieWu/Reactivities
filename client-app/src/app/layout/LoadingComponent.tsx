import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

interface Props {
  inverted?: boolean;
  content?: string;
}
export default function LoadingComponent({ inverted = true, content = "載入中" }: Props) {
  return (
    <Dimmer active={true} inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
}
