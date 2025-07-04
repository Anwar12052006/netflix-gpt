import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRattedMovies} from "../utils/moviesSlice";
import { useEffect } from "react";


const useTopRattedMovies = () => {
 //Fetch data from TMDB API and update store
   const dispatch = useDispatch();

   const getTopRattedMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
    const json = await data.json();
      dispatch(addTopRattedMovies(json.results));
   };

    useEffect(() => {
    getTopRattedMovies();
    }, [])
};

export default useTopRattedMovies;