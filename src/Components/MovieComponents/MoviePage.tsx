import { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

//movieList: ["Man of Steel", Batman v Superman - Dawn of Justice, Zack Snyder's Justice League]

const MoviePage = () => {
    const [movieState, setMovieState] = useState(() => {
        return {
            movieList: [
                "Man of Steel", 
                "Batman v Superman - Dawn of Justice, Zack Snyder's Justice League"
            ],
        };
    });
    function handleAddMovie(newMovie: string) {
        setMovieState((prevState: any) => {
            return {
                ...prevState,
                movieList: prevState.movieList.concat([newMovie]),
            };
        });
    };
    return (
        <div className="container col-12 col-md-6 my-3 border">
            <AddMovie handleAddMovie={handleAddMovie} />
            <MovieList movieList={movieState.movieList} />
        </div>
    );
};

export default MoviePage;