import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (iterationNumber = 50) => {
    for(let i = 0; i <= iterationNumber; i++){
        console.log("Ahí vamos...")
    }
    return `${iterationNumber} iteraciones realizadas`;
};

export const MemorizeHook = () => {
    const {counter, increment } = useCounter(4000);
    const [show, setShow] = useState(false);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])
    
    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr></hr>
            <h4>{ memorizeValue }</h4>
            <button onClick={ () => increment() } className="btn btn-success">+1</button>
            <button onClick={ () => setShow(!show) } className="btn btn-primary"> Show/Hidden {JSON.stringify(show)}</button>
        </>
    )
}
