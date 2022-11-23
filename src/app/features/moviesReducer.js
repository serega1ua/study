import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const res = await fetch("http://localhost:4000/movies?limit=10");
  const data = await res.json();
  return data.data;
});

export const sortMoviesByReleaseDate = createAsyncThunk(
  "movies/sortMoviesByReleaseDate",
  async (order) => {
    const res = await fetch(
      `http://localhost:4000/movies?sortBy=release_date&sortOrder=${order}`
    );
    const data = await res.json();
    return data.data;
  }
);

export const sortMoviesByRating = createAsyncThunk(
  "movies/sortMoviesByRating",
  async (order) => {
    const res = await fetch(
      `http://localhost:4000/movies?sortBy=vote_average&sortOrder=${order}`
    );
    const data = await res.json();
    return data.data;
  }
);

export const filterMoviesByGenres = createAsyncThunk(
  "movies/filterMovieByGenres",
  async (filter) => {
    const res = await fetch(`http://localhost:4000/movies?filter=${filter}`);
    const data = await res.json();
    return data.data;
  }
);

const moviesReducer = createSlice({
  name: "moviesReducer",
  initialState: {
    movies: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(sortMoviesByReleaseDate.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(sortMoviesByRating.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(filterMoviesByGenres.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default moviesReducer.reducer;
