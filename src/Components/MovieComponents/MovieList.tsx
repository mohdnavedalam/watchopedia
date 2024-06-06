const MovieList = (props: any) => {
    return (
        <div>
            {props.movieList.map((movie: string, index: number) => {
                return (
                    <div key={index}>{movie}</div>
                );
            })}
        </div>
    );
};

export default MovieList;