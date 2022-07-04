const redux=require('redux')
const createStore=redux.createStore
const axios=require('axios')
// redux thunk as middleware
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require('redux-thunk').default


const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};
const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  }; 
};

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCEEDED:
            return{
                error:'',
                loading:false,
                users:action.payload
            }
        case FETCH_USERS_FAILED:
            return{
                error:action.payload,
                users:[],
                loading:false
            }
        default:
            return state
    }
}

// action creator 
const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            // response.data is users 
           const users= response.data.map((user)=>user.id)
           dispatch(fetchUsersSuccess(users))
        }).catch(error=>{
            dispatch(fetchUserFailure(error.message))
        })
    }
}

const store=createStore(reducer,applyMiddleware(thunkMiddleware))

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())