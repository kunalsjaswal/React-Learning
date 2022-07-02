import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initalstate={
    loading:true,
    error:'',
    post:{}
}
const reducer=(currState,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading:false,
                post:action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                post:{},
                error:'Something went wrong!'
            }
        default:
            return currState
    }

}

const DatafetchingUseReducer = () => {
    const [state,dispatch]=useReducer(reducer,initalstate)

    useEffect(()=>{

        axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            dispatch({type:'FETCH_SUCCESS',payload:response.data})
        })
        .catch(err=>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])

  return (
    <>
        <nav>Data fetching using useReducer</nav>

        {state.loading ? 'Loading': state.post.title}
        {state.error? state.error:null}
    </>
  )
}

export default DatafetchingUseReducer