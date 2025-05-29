import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {
    const {counter, increment } = useCounter(13);
    const [show, setShow] = useState(false)
    return (
        <>
            <h1>Counter: <Small value={counter}></Small></h1>
            <hr></hr>
            <button onClick={ () => increment() } className="btn btn-success">+1</button>
            <button onClick={ () => setShow(!show) } className="btn btn-primary"> Show/Hidden {JSON.stringify(show)}</button>
        </>
    )
}
