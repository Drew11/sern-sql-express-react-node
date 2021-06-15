import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Counter() {
    const [count, setCount] = useState(0);
    const [minutes, setMinutes] = useState(0);
    useInterval(() => {
        setCount(count + 1);
    }, 1000);
    if(count > 59 ){
        setMinutes(minutes + 1);
        setCount(0);
    }
    return <h1>{`minutes: ${minutes} seconds:${count}`}</h1>;
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
