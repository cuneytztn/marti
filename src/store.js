import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./stores/moviesSlice";
import movieDetailSlice from "./stores/movieDetailSlice";
export default configureStore({
  reducer: {
    movies: moviesSlice,
    movieDetail: movieDetailSlice,
  },
});
