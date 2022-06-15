import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../../types";
import { fetchAuthors, fetchLocations } from "../../utils/api";

interface ISelectState {
  authors: IItem[];
  locations: IItem[];
  isLoading: boolean;
  error: string;
}

const initialState: ISelectState = {
  authors: [],
  locations: [],
  isLoading: false,
  error: "",
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchAuthors.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAuthors.fulfilled.type]: (state, action: PayloadAction<IItem[]>) => {
      state.authors = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [fetchAuthors.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchLocations.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchLocations.fulfilled.type]: (
      state,
      action: PayloadAction<IItem[]>
    ) => {
      state.locations = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [fetchLocations.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default selectSlice.reducer;
