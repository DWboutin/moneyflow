import React, { ReactNode } from "react";
import styled from "styled-components";

import Card from "../components/Card/Card";
import ExpenseForm from "../features/expenses/components/ExpenseForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

interface Props {
  children: ReactNode;
}

const TrackingExpenses: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      <h1>Tracking Expenses</h1>
      <Card>
        <ExpenseForm />
      </Card>
    </Container>
  );
};

export default TrackingExpenses;
