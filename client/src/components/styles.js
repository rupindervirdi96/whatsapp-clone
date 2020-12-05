import styled from "styled-components";

export const ContainerStyles = styled.div`
  height: 95vh;
  width: 90%;
  background-color: #333333;
  display: grid;
  grid-template-columns: 350px 1fr;
  @media (max-width: 1200px) {
      width: 100%;
      height: 100vh;
  }
`;

export const ContactStyles = styled.div`
  background-color: #eee;
  height: 100%;
  display:grid;
  grid-template-rows:200px 1fr;
`;

export const ChatStyles = styled.div`
  background-color: #ccc;
  height: 100%;
`;
