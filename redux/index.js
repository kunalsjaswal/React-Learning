const redux = require('redux')
const createStore = redux.createStore

// alternate way to dispatch
const bindActionCreators = redux.bindActionCreators

// combining reducers
const combineReducers = redux.combineReducers

// action type
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RETURNED = "CAKE_RETURNED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED "
const ICECREAM_RETURNED = "ICECREAM_RETURNED"
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"


// action creator = dispatch function
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    };
}

function returnCake() {
    return {
        type: CAKE_RETURNED,
        payload: 1,
    };
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function returnIceCream(qty = 1) {
    return {
        type: ICECREAM_RETURNED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// state of application 

const cakeInitialState = {
    numOfCakes: 10,
    CakeSold: 0,
}
const iceCreamInitialState = {
    numOfIceCreams: 20,
    IceCreamSold: 0
}

// reducer - takes action and prevState
// (prevState,action)=>newState

const cakeReducer = (state = cakeInitialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state, //this helps to make a copy of state object and only change below values (spread operator i.e., prev  + new)
                numOfCakes: state.numOfCakes - 1,
                CakeSold: state.CakeSold + 1
            };
        case CAKE_RETURNED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + 1,
                CakeSold: state.CakeSold - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state;
    }
};
const iceCreamReducer = (state = iceCreamInitialState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
                IceCreamSold: state.IceCreamSold + 1
            }
        case ICECREAM_RETURNED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + 1,
                IceCreamSold: state.IceCreamSold - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer) //created our store
console.log('inital state: ', store.getState())
const unSubscribe = store.subscribe(() => console.log('updated state', store.getState()))
    // if any changes to store happens subscribe method get called


// alternate way to bind dispatch 
const actions = bindActionCreators({ orderCake, returnCake, restockCake, orderIceCream, returnIceCream, restockIceCream }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.returnCake()
actions.orderIceCream()
actions.orderIceCream()
actions.returnIceCream()
actions.restockCake(4)
actions.restockIceCream(4)

// store.dispatch(orderCake())
// store.dispatch(returnCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(5))

unSubscribe()
    // we unsubscribe store. i.e., don't reflect any changes in store on UI