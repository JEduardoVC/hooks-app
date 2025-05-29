import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <h1> Focus Screen </h1>
            <hr></hr>
            <input ref={ inputRef } className="form-control" type="text" placeholder="Name"></input>
            <button onClick={onClick} className="btn btn-warning mt-2">Set focus</button>
        </>
    )
}
