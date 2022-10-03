import { createSlice } from "@reduxjs/toolkit";

export type uiStateType = {
  isLoading: boolean;
  error: string | null;
};

export const uiSliceInitialState: uiStateType = {
  isLoading: false,
  error: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: uiSliceInitialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.error = action.payload;
    },
    finishLoading(state) {
      state.isLoading = false;
    },
  },
});

export const uiActions = uiSlice.actions;
