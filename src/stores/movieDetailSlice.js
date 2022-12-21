import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovieDetail = createAsyncThunk("fetchMovieDetail", async (omdbID) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=f1866b1e&i=${omdbID}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  data: undefined,
  loading: false,
  error: "",
};

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetail.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMovieDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default movieDetailSlice.reducer;
