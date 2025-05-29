import { useCounter, useFech } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {
    const { counter, decrement, increment} = useCounter(1);
    const { data, isLoading, hasError } = useFech(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    
    return (
        <>
            <h1>Pokémon information</h1>
            <hr></hr>

            { 
                isLoading ? 
                <LoadingMessage></LoadingMessage> : 
                <PokemonCard 
                    id={data?.id}
                    name={data.name}
                    sprites={[
                        data.sprites.front_default, 
                        data.sprites.back_default,
                        data.sprites.front_shiny,
                        data.sprites.back_shiny
                    ]}>
                </PokemonCard> 
            }

            <h2>{ data?.name }</h2>

            <button onClick={ () => counter > 1 ? decrement() : null } className="btn btn-danger mt-2">Anterior</button>
            <button onClick={ () => increment() } className="btn btn-success mt-2">Siguiente</button>
        </>
    )
}
