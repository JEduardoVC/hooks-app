import { useLayoutEffect, useRef, useState } from "react"

export const PokemonCard = ({id, name, sprites = []}) => {
    const [boxSize, setBoxSize] = useState({width: 0, height: 0})
    
    const h2Ref = useRef();

    useLayoutEffect(() => {
        const { width, height } = h2Ref.current.getBoundingClientRect();
        console.log({width, height});
        setBoxSize({width, height});
    }, [name])

    return (
        <section style={{height: 200, display: "flex", flexDirection: "row"}}>
            <h2 ref={h2Ref} className="text-capitalize">#{id} - {name}</h2>
            <div>
                {
                    sprites.map(sprite => (
                        <img key={sprite} src={sprite} alt={name}></img>
                    ))
                }
            </div>
        </section>
    )
}
