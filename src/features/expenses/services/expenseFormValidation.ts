import * as Yup from "yup";

const maxDate = new Date();
maxDate.setHours(23, 59, 59, 999);

const paymentFormValidation = Yup.object().shape({
  payer: Yup.string()
    .min(2, "Payer name is too short")
    .max(255, "Payer name is too long")
    .required("Payer name is required"),
  paidEntity: Yup.string()
    .min(2, "Paid entity name is too short")
    .max(255, "Paid entity name is too long")
    .required("Paid entity name is required"),
  amount: Yup.number()
    .moreThan(0, "Amount should be higher than 0")
    .required("Amount is required")
    .test("is-decimal", "Invalid decimal", (value) => {
      return value?.toString()?.match(/^\d+(\.\d{2})?$/);
    }),
  // date: Yup.date()
  //   .required("Date is required")
  //   .max(maxDate.toUTCString(), "Impossible to add date farther than now"),
  note: Yup.string(),
});

export default paymentFormValidation;
