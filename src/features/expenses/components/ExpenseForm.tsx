import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import Button from "../../../components/Button/Button";
import DateInput from "../../../components/DateInput/DateInput";
import Textarea from "../../../components/Textarea/Textarea";
import TextInput, {
  Container as TextInputContainer,
} from "../../../components/TextInput/TextInput";
import { useAppDispatch } from "../../../store/hooks";
import { Expense } from "../domain/Expense";
import expenseFormValidation from "../services/expenseFormValidation";
import { addExpense } from "../store/expensesSlice";

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

const ExpenseForm: React.VoidFunctionComponent = () => {
  const dispatch = useAppDispatch();
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik<Expense>({
    initialValues: {
      payer: "",
      paidEntity: "",
      amount: 0,
      date: new Date(),
      note: "",
    },
    validationSchema: expenseFormValidation,
    onSubmit: (values) => {
      dispatch(addExpense(values));
      resetForm();
      toast.success("Expense added");
    },
  });

  return (
    <Container onSubmit={handleSubmit}>
      <FormRow>
        <TextInput
          id="payer"
          name="payer"
          label="Payer"
          placeholder="Mikael Boutin"
          value={values.payer}
          handleOnChange={handleChange}
          error={touched.payer && errors.payer}
        />
        <TextInput
          id="paidEntity"
          name="paidEntity"
          label="Paid entity"
          placeholder="Mikael Boutin"
          value={values.paidEntity}
          handleOnChange={handleChange}
          error={touched.paidEntity && errors.paidEntity}
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
          placeholder="03/01/2022"
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
        <Button type="submit">Add expense</Button>
      </FormRowAlignRight>
    </Container>
  );
};

export default ExpenseForm;
