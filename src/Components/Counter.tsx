import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(() => {
        return 10;
    });
    function handleIncrement () {
        setCounter((prevState) => {
            return prevState + 1;
        });
    }
    function handleDecrement () {
        setCounter((prevState) => {
            return prevState - 1;
        });
    }
    return (
        <div className="col-12 col-md-4 offset-md-4 border">
            <span className="h2 pt-4 m-2">Fun Counter</span>
            <br />
            <button className="btn btn-success m-1" onClick={handleIncrement}>+1</button>
            <button className="btn btn-danger m-1" onClick={handleDecrement}>-1</button>
            <br />
            <span className="h4">
                Counter: &nbsp;
                <span className="text-success">{counter}</span>
            </span>
        </div>
    );
};

export default Counter;