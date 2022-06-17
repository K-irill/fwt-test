import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IItem, IQuery } from "../types";

export const searchPaintings = createAsyncThunk(
  "paintings/search",
  async (
    { filters, page, limit }: { filters: IQuery; page: number; limit: number },
    thunkAPI
  ) => {
    try {
      const response = await axios.get<IItem[]>(
        `https://test-front.framework.team/paintings`,
        {
          params: {
            q: filters.q || undefined,
            authorId: filters.author || undefined,
            locationId: filters.location || undefined,
            created_gte: filters._gte || undefined,
            created_lte: filters._lte || undefined,
            _page: page,
            _limit: limit,
          },
        }
      );

      return {
        data: response.data,
        totalCount: response.headers["x-total-count"],
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAuthors = createAsyncThunk(
  "paintings/authors",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IItem[]>(
        `https://test-front.framework.team/authors`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLocations = createAsyncThunk(
  "paintings/locations",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IItem[]>(
        `https://test-front.framework.team/locations`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
