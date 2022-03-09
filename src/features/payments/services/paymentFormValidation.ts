import * as Yup from "yup";

const maxDate = new Date();
maxDate.setHours(23, 59, 59, 999);

const paymentFormValidation = Yup.object().shape({
  sender: Yup.string()
    .min(2, "Sender name is too short")
    .max(255, "Sender name is too long")
    .required("Sender name is required"),
  amount: Yup.number()
    .moreThan(0, "Amount should be higher than 0")
    .required("Amount is required")
    .test("is-decimal", "invalid decimal", (value) => {
      return value?.toString()?.match(/^\d*\.{1}\d*$/);
    }),
  date: Yup.date()
    .required("Date is required")
    .max(maxDate.toUTCString(), "Impossible to add date farther than now"),
  note: Yup.string(),
});

export default paymentFormValidation;
