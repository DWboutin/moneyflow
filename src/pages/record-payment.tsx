import React, { ReactNode } from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";
import TextInput, {
  Container as TextInputContainer,
} from "../components/TextInput/TextInput";
import PaymentForm from "../features/payments/components/PaymentForm";
import { ThemeContainer } from "../styles/styles";

interface ContainerProps {}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FormRow = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  flex: 1;

  & > ${TextInputContainer}:not(:last-child) {
    margin-right: 40px;
  }
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
