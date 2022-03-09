import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import DateInput from "../../../components/DateInput/DateInput";
import Textarea from "../../../components/Textarea/Textarea";

import TextInput, {
  Container as TextInputContainer,
} from "../../../components/TextInput/TextInput";
import { Payment } from "../domain/Payment";
import paymentFormValidation from "../services/paymentFormValidation";

interface ContainerProps {}

const Container = styled.form<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  & > ${TextInputContainer}:not(:last-child) {
    margin-right: 40px;
  }
`;

const FormRowAlignRight = styled(FormRow)`
  justify-content: flex-end;
`;

interface Props {}

const PaymentForm: React.VoidFunctionComponent<Props> = ({}) => {
  const { values, touched, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik<Payment>({
      initialValues: {
        sender: "",
        amount: 0,
        date: "",
        note: "",
      },
      validationSchema: paymentFormValidation,
      onSubmit: () => {
        console.log("submit");
      },
    });

  return (
    <Container onSubmit={handleSubmit}>
      <FormRow>
        <TextInput
          id="sender"
          name="sender"
          label="Sender name"
          placeholder="Mikael Boutin"
          value={values.sender}
          handleOnChange={handleChange}
          error={touched.sender && errors.sender}
        />
        <TextInput
          id="amount"
          name="amount"
          label="Amount Received"
          placeholder="123,456.78"
          value={values.amount}
          handleOnChange={handleChange}
          error={touched.amount && errors.amount}
        />
        <DateInput
          id="date"
          name="date"
          label="Date of the payment"
          placeholder="March 5th 2022"
          value={values.date}
          handleOnChange={(date: Date | null) => {
            setFieldValue("date", date);
          }}
          error={touched.date && errors.date}
        />
      </FormRow>
      <FormRow>
        <Textarea
          id="note"
          name="note"
          label="Note about the payment"
          placeholder="Notes"
          value={values.note}
          handleOnChange={handleChange}
          error={touched.note && errors.note}
        />
      </FormRow>
      <FormRowAlignRight>
        <Button type="submit">Add payment</Button>
      </FormRowAlignRight>
    </Container>
  );
};

export default PaymentForm;
