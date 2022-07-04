const redux=require ('redux')
const createStore=redux.createStore

// npm i immer : it is used to change the state easily
const produce=require ('immer').produce

// redux logger as middleware
const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger

const applyMiddleware=redux.applyMiddleware

const initalState={
    name:"kunal",
    address:{
        street:"Bhapoo",
        city:"kangra",
        state:"HP"
    }
}

const STREET_UPDATED='STREET_UPDATED'
const updateStreet=(street)=>{
    return{
        type:STREET_UPDATED,
        payload:street 
    }       
}


const reducer=(state=initalState,action)=>{
    switch(action.type){
        case STREET_UPDATED:
        //     return{
        //     ...state,
        //     address:{
        //         ...state.address,
        //         street:action.payload
        //     }
        // }
        return produce(state,(draft)=>{
            draft.address.street=action.payload
        })
        default:
            return state
    }
}

const store=createStore(reducer, applyMiddleware(logger))
console.log('inital state: ',store.getState())

const unSubcribe=store.subscribe(()=>{})

store.dispatch(updateStreet('Indora'))

unSubcribe()
