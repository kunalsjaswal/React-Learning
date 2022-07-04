const createSlice=require('@reduxjs/toolkit').createSlice

const initialState={
    numOfIceCreams:20,
    iceCreamSold:0
}
const iceCreamSlice=createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIceCreams--
            state.iceCreamSold++
        },
        restocked:(state,action)=>{
            state.numOfIceCreams+=action.payload
        },
        returned:(state)=>{
            state.iceCreamSold--
            state.numOfIceCreams++
        }

    },
    extraReducers:{   //extra reducer to add extra action of different slice
        ['cake/ordered']:(state)=>{
            state.numOfIceCreams--
        }
    }
})

module.exports=iceCreamSlice.reducer
module.exports.iceCreamActions=iceCreamSlice.actions