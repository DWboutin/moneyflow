import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../../store/store";
import { Expense } from "../domain/Expense";

interface ExpensesState {
  expenses: Expense[];
}

const initialState: ExpensesState = {
  expenses: [],
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    },
  },
});

export const { addExpense } = expensesSlice.actions;

export const selectExpenses = (state: RootState) => state.expenses.expenses;

export default expensesSlice.reducer;
