import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
  return (
    <div className=" bg-black">
        <div className="-mt-[20%] pl-12 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Ratted Movies"} movies={movies.topRattedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming movies"} movies={movies.upcomingMovies}/>
        <MovieList title={"Horror movie"} movies={movies.nowPlayingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer;