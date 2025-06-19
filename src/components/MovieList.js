// import MovieCard from "./MovieCard";

// const MovieList = ({title, movies}) => {
//     console.log(movies);
//   return (
//     <div className="px-6">
//       <h1 className="text-3xl py-2 ">{title}</h1>
//         <div className="flex overflow-x-scroll">
//            <div className="flex">
//            {movies.map((movie) => (
//             <MovieCard key={movie.id} posterPath={movies.poster_Path}/>
//             ))}
//            </div>    
//         </div>
//     </div>
//   );
// };

// export default MovieList;

// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   console.log("MOVIES:", movies);

//   if (!movies || movies.length === 0) {
//     return (
//       <div>
//         <h1>{title}</h1>
//         <p>No movies to display.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 py-0">
//         <h1 className="text-black text-3xl font-bold mb-3">{title}</h1>
//         <div className="flex overflow-x-auto space-x-4 scrollbar-x">
      
//              {movies.map(movie=> <MovieCard key={movie.id} posterPath={movie.poster_path} />
// )}
//        </div>
//      </div>
   
//   );
// };

// export default MovieList;

import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2 ">
          {Array.isArray(movies) &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
