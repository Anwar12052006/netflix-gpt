import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRattedMovies: null,
        trailerVideo: null,
        upcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTopRattedMovies: (state, action) => {
            state.topRattedMovies = action.payload;
    },
     addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
    },
},
});

       
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,  addTopRattedMovies, addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;