import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../../store/store";
import { Payment } from "../domain/Payment";

interface PaymentsState {
  payments: Payment[];
}

const initialState: PaymentsState = {
  payments: [],
};

export const paymentsSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Payment>) => {
      return {
        ...state,
        payments: [...state.payments, action.payload],
      };
    },
  },
});

export const { add } = paymentsSlice.actions;

export const selectPayments = (state: RootState) => state.payments.payments;

export default paymentsSlice.reducer;
