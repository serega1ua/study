import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const res = await fetch("http://localhost:4000/movies?limit=13", {
      headers: {
          'Access-Control-Allow-Credentials' : true,
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'GET',
          'Access-Control-Allow-Headers':'application/json',
      },
  });
  const data = await res.json();
  return data.data;
});

export const sortMoviesByReleaseDate = createAsyncThunk(
  "movies/sortMoviesByReleaseDate",
  async ({order}) => {
    const res = await fetch(
      `http://localhost:4000/movies?limit=13&sortBy=release_date&sortOrder=${order}`, {
            headers: {
                'Access-Control-Allow-Credentials' : true,
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'GET',
                'Access-Control-Allow-Headers':'application/json',
            },
        }
    );
    const data = await res.json();
    return data.data;
  }
);

export const sortMoviesByRating = createAsyncThunk(
  "movies/sortMoviesByRating",
  async ({order}) => {
    const res = await fetch(
      `http://localhost:4000/movies?limit=13&sortBy=vote_average&sortOrder=${order}`
    );
    const data = await res.json();
    return data.data;
  }
);

export const postNewMovie = createAsyncThunk(
    "movies/postNewMovie",
    async ({newMovie}) => {
        const res = await fetch(
            "http://localhost:4000/movies",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: newMovie.title,
                    vote_average: newMovie.rating,
                    release_date: newMovie.release_date,
                    poster_path: newMovie.poster_path,
                    overview: newMovie.overview,
                    runtime: newMovie.runtime,
                    genres: newMovie.genres
                })
            }
        );
        const data = await res.json();
        console.log(data);
        return data;
    }
);

export const editSelectedMovie = createAsyncThunk(
    "movies/editSelectedMovie",
    async ({movie}) => {
        const res = await fetch(
            "http://localhost:4000/movies",
            {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: movie.title,
                    vote_average: movie.rating,
                    release_date: movie.release_date,
                    poster_path: movie.poster_path,
                    overview: movie.overview,
                    runtime: movie.runtime,
                    genres: movie.genres,
                    id: movie.id
                })
            }
        );
        const data = await res.json();
        console.log(data);
        return data;
    }
);

export const deleteSelectedMovie = createAsyncThunk(
    "movies/deleteSelectedMovie",
    async ({movieId}) => {
        await fetch(
            `http://localhost:4000/movies/${movieId}`,
            {
                method: "DELETE",
            }
        );
        return movieId;
    }
);



export const filterMoviesByGenres = createAsyncThunk(
  "movies/filterMovieByGenres",
  async ({filter}) => {
    const res = await fetch(`http://localhost:4000/movies?limit=13&filter=${filter}`, {
          headers: {
              'Access-Control-Allow-Credentials' : true,
                  'Access-Control-Allow-Origin':'*',
                  'Access-Control-Allow-Methods':'GET',
                  'Access-Control-Allow-Headers':'application/json',
          },
      });
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
    builder.addCase(postNewMovie.fulfilled, (state, action) => {
        state.movies = [...state.movies, action.payload];
    });
    builder.addCase(editSelectedMovie.fulfilled, (state, action) => {
        const editedMoviesArray = state.movies.filter((movie) => movie.id !== action.payload.id);
        state.movies = [...state.movies, action.payload];
    });
    builder.addCase(deleteSelectedMovie.fulfilled, (state, action) => {
        const newArray = state.movies.filter((movie) => movie.id !== action.payload);
        state.movies = newArray;
    });
  },
});

export default moviesReducer.reducer;
