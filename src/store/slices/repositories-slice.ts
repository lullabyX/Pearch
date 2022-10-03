import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type repositoriesStateType = {
  items: {
    name: string;
    description: string;
  }[];
};

export const repositoriesInitialState: repositoriesStateType = {
  items: [],
};

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: repositoriesInitialState,
  reducers: {
    update(
      state,
      action: PayloadAction<
        {
          name: string;
          description: string;
        }[]
      >
    ) {
      state.items = action.payload;
    },
  },
});

export const repositoriesActions = repositoriesSlice.actions;
