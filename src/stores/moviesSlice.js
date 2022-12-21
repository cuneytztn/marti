import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("fetchMovies", async (value) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=f1866b1e&s=${value}`
    );
    return response.data.Search;
  } catch (error) {
    return error;
  }
});

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default moviesSlice.reducer;
