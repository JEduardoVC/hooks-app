import { useEffect, useState } from "react"

const localChache = {};

export const useFech = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });
    
    useEffect(() => {
        getFech();
    }, [url]);
    
    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    };

    
    const getFech = async() => {
        if(localChache[url]){
            setState({
                data: localChache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }

        setLoadingState();

        await new Promise(resolver => setTimeout(resolver, 1500));

        const response = await fetch(url);
        if(!response.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            })
            return;
        }

        const data = await response.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        localChache[url] = data;
    }
    
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
