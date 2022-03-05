import React, { ReactNode } from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";
import TextInput, {
  Container as TextInputContainer,
} from "../components/TextInput/TextInput";
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

const Index: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      <h1>Record Payment</h1>
      <Card>
        <FormRow>
          <TextInput
            id="sender"
            name="sender"
            label="Sender name"
            placeholder="Mikael Boutin"
          />
          <TextInput
            id="amount"
            name="amount"
            label="Amount Received"
            placeholder="123,456.78"
          />
          <TextInput
            id="date"
            name="date"
            label="Date of the payment"
            placeholder="March 5th 2022"
          />
        </FormRow>
      </Card>
    </Container>
  );
};

export default Index;
