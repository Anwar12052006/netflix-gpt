import Header from "./Header";
import  useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRattedMovies from "../hooks/useTopRattedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRattedMovies();
  useUpcomingMovies();

  return (
   <div>
    <Header />
    <MainContainer />
    <SecondaryContainer />
    {/*
    MainContainer
      -VideoBackground
      -VideoTitle
    SecondaryContainer
      -MovieList *n 
        -card * n


    */}
    </div>
  );

};

export default Browse;