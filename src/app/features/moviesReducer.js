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

export const postMovie = createAsyncThunk("movies/postMovie", async (movie) => {
  const res = await fetch("http://localhost:4000/movies", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      title: movie.title,
      tagline: movie.tagline || "",
      vote_average: movie.vote_average || 0,
      vote_count: movie.vote_count || 0,
      release_date: movie.release_date || "",
      poster_path: movie.poster_path,
      overview: movie.overview,
      budget: movie.budget || 0,
      revenue: movie.revenue || 0,
      runtime: movie.runtime || 0,
      genres: movie.genres || [],
      id: movie.id || 0,
    }),
  });
  const data = await res.json();
  console.log("data", data);
});

const moviesReducer = createSlice({
  name: "moviesReducer",
  initialState: {
    movies: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      console.log(state.movies);
    });
    builder.addCase(postMovie.fulfilled, (state, action) => {
      console.log("added movie");
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
