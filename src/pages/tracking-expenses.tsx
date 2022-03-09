import React, { ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {}

const Container = styled.div<ContainerProps>``;

interface Props {
  children: ReactNode;
}

const TrackingExpenses: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      <h1>Tracking Expenses</h1>
    </Container>
  );
};

export default TrackingExpenses;
