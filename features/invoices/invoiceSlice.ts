import { RootState } from "./../../store/index";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Invoice } from "data/invoicesTypes";

type InvoicesState = {
  invoices: Invoice[];
};

const slice = createSlice({
  name: "selectedInvoicesReducer",
  initialState: { invoices: [] } as InvoicesState,
  reducers: {
    setInvoices: (
      state,
      { payload: { invoices } }: PayloadAction<InvoicesState>
    ) => {
      state.invoices = invoices;
    },
  },
});

export const { setInvoices } = slice.actions;
export default slice.reducer;
export const selectCurrentTitle = (state: RootState) => state.selectedInvoices;
