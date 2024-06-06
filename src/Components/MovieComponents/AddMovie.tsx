import { useState } from "react";

const AddMovie = (props: any) => {
    const [movieName, setMovieName] = useState("");
    function submitMovieForm(e: any, props: any) {
        e.preventDefault();
        props.handleAddMovie(movieName);
        setMovieName("");
    }

    return (
        <form onSubmit={(e: any) => submitMovieForm(e, props)}>
            <div className="row">
                <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
                <div className="col-8 offset-1">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Movie Name ..."
                        value={movieName}
                        onChange={(e: any) => setMovieName(e.target.value)}
                    >
                    </input>
                </div>
                <div className="col-2">
                    <button className="btn btn-success form-control">Add</button>
                </div>
                <hr className="mt-3" />
            </div>
        </form>
    );
};

export default AddMovie;