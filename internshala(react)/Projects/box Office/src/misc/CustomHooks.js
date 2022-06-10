import { useEffect, useReducer ,useState} from "react";


function showReducer(prevState,action){
    switch(action.type){

        case 'ADD':{
            return [...prevState,action.showId];
        }
        case 'REMOVE':{
            return prevState.filter(showId=>showId!==action.showId);
        }

        default: return prevState;
    }
}

function usePersistedReducer(reducer,initialState,key){

    const [state,dispatch]=useReducer(reducer,initialState,initials=>{
        const persisted=localStorage.getItem(key);

        return persisted? JSON.parse(persisted):initials;
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(state));
    },[state,key]);

    return [state,dispatch];
}

export function useShows(key="shows"){
    return usePersistedReducer(showReducer,[],key);
}


export function useLastQuery(key='lastQuery'){

    const [input, setInput] = useState( ()=>{
        
        const persisted=sessionStorage.getItem(key);
        return persisted? JSON.parse(persisted):"";
    });

    const setPersistedInput=(newstate)=>{
        setInput(newstate);
        sessionStorage.setItem(key,JSON.stringify(newstate))
    }

    return [input , setPersistedInput];
}