const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    numOfCakes: 10,
    cakeSold:0
};
const cakeSlice = createSlice({
    name: "cake", //1st value - name
    initialState, //2nd value - inital state
    reducers: {
        //3rd value - reduce function
        ordered: (state) => {
            state.numOfCakes--
            state.cakeSold++
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload;
        },
        returned:(state)=>{
            state.numOfCakes++
            state.cakeSold--
        }
    },
});

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions