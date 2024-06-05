import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

//movieList: ["Man of Steel", Batman v Superman - Dawn of Justice, Zack Snyder's Justice League]

const MoviePage = () => {
    return (
        <div className="container col-12 col-md-6 my-3 border">
            <AddMovie />
            <MovieList />
        </div>
    );
};

export default MoviePage;