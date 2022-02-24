import React from "react";
import { MainContentWrapper } from "./style";

export default function MainContent(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return <MainContentWrapper>{props.children}</MainContentWrapper>;
}
