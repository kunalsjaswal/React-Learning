import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    loading:false,
    users:[],
    error:''
}

// generates pending , fulfilled and rejected action type automatically 
export const fetchUsers=createAsyncThunk('user/fetchUsers',
    async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})

const userSlice=createSlice({
    name:'user',
    initialState,
    // extraReducers:builder=>{
    //     builder.addCase(fetchUsers.pending,(state)=>{
    //         state.loading=true
    //     })
    //     builder.addCase(fetchUsers.fulfilled,(state,action)=>{
    //         state.loading=false 
    //         state.users=action.payload
    //         state.error=''
    //     })
    //     builder.addCase(fetchUsers.rejected,(state,action)=>{
    //         state.loading=false 
    //         state.users=[]
    //         state.error=action.payload 
    //     })
    // }

    extraReducers:{
        ['user/fetchUsers/pending']:(state)=>{
            state.loading=true
        },
        ['user/fetchUsers/fulfilled']:(state,action)=>{
            state.loading=false
            state.error=''
            state.users=action.payload
        },
        ['user/fetchUsers/rejected']:(state,action)=>{
            state.loading=false
            state.error=action.payload
            state.users=[]
        }
    }
})

export default userSlice.reducer