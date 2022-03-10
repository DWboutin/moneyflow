import React, { ReactNode } from "react";
import styled from "styled-components";

import Card from "../components/Card/Card";
import PaymentForm from "../features/payments/components/PaymentForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

interface Props {
  children: ReactNode;
}

const RecordPayment: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      <h1>Record Payment</h1>
      <Card>
        <PaymentForm />
      </Card>
    </Container>
  );
};

export default RecordPayment;
