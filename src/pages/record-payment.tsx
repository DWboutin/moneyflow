import React, { ReactNode } from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";

interface ContainerProps {}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

interface Props {
  children: ReactNode;
}

const Index: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      <h1>Record Payment</h1>
      <Card>Hello</Card>
    </Container>
  );
};

export default Index;
