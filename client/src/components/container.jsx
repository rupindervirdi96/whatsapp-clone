import React from "react";
import { ContainerStyles } from "./styles";
import Contacts from "./contacts";
import Chat from "./chat";

function Container(props) {
  return (
    <ContainerStyles>
      <Contacts />
      <Chat />
    </ContainerStyles>
  );
}

export default Container;
