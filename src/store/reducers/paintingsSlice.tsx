import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPaintig } from "../../types";
import { searchPaintings } from "../../utils/api";

interface IPaintingState {
  paintings: IPaintig[];
  totalCount: number;
  isDarkTheme: boolean;
  activFilter: boolean;
  isLoading: boolean;
  isError: boolean;
  errorText: string;
}

interface IResponseData {
  data: IPaintig[];
  totalCount: number;
}

const initialState: IPaintingState = {
  paintings: [],
  totalCount: 0,
  isDarkTheme: false,
  activFilter: false,
  isLoading: false,
  isError: false,
  errorText: "",
};

export const paintingsSlice = createSlice({
  name: "paintings",
  initialState,
  reducers: {
    setTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
    closeError(state) {
      state.isError = false;
    },
  },

  extraReducers: {
    [searchPaintings.pending.type]: (state) => {
      state.isLoading = true;
    },
    [searchPaintings.fulfilled.type]: (
      state,
      action: PayloadAction<IResponseData>
    ) => {
      state.paintings = action.payload.data;
      state.totalCount = action.payload.totalCount;
      state.isLoading = false;
    },
    [searchPaintings.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorText = action.payload;
    },
  },
});

export default paintingsSlice.reducer;
