import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const getUserFromServer = createAsyncThunk('get/getUserFromServer',
 async () => {
    return fetch('https://fakestoreapi.com/users').then(res => res.json()).then(data => data)
})

export const removeUserFromServer = createAsyncThunk('get/removeUserFromServer', 
async (id) => {
    return fetch(`https://fakestoreapi.com/users/${id}`,{
        method:'DELETE'
    }).then(res => res.json()).then(data => data)
})


const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getUserFromServer.fulfilled, (state, action) => {
            // console.log("state:", state);
            // console.log("action:", action.payload);
            // state.push(...action.payload)
            return action.payload
        })

        builder.addCase(removeUserFromServer.fulfilled,(state,action)=>{
            console.log("state:", state);
            console.log("action:", action.payload);
            const removeUser = state.filter((user)=>{
                return(
                    user.id !== action.payload.id
                )
            })

            return removeUser
        })
    }
})

export default userSlice.reducer
