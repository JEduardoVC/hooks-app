import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: "Create a CRUD of products",
        done: false
    }, {
        id: new Date().getTime()*3,
        description: "Create a CRUD of users",
        done: false
    },
]

export const TodoApp = () => {
    const [ todos, dispatchTodo ] = useReducer(todoReducer, initialState)

    const handleNewTodo = ( todo ) => {
        console.log({ todo })
    }

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr></hr>
            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <ul className="list-group">
                        {
                            todos.map(todo => (
                                // TodoItem ...
                                <li key={ todo.id } className="list-group-item justify-content-between d-flex">
                                    <span className="align-self-center">{todo.description}</span>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                    {/* TodoList */}
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr></hr>
                    {/* TodoAdd onNewTodo( todo ) */}
                    <form>
                        <input className="form-control" type="Text" placeholder="¿Qué hay que hacer?"></input>
                        <button type="submit" className="btn btn-primary mt-2">Agregar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
