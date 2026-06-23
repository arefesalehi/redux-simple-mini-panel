import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const getCourseFromServer = createAsyncThunk('get/getCourseFromServer', 
async () => {
    return fetch('https://redux-cms.iran.liara.run/api/courses').then(res => res.json()).then(data => data)
})

export const removeCourseFromServer = createAsyncThunk('get/removeCourseFromServer',
 async (id) => {
    return fetch(`https://redux-cms.iran.liara.run/api/courses/${id}`,{
        method:'DELETE'
    }).then(res => res.json()).then(data => data)
})


const courseSlice = createSlice({
    name: "courses",
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getCourseFromServer.fulfilled, (state, action) => {
            console.log("state:", state);
            console.log("action:", action.payload);
            // state.push(...action.payload)
            return action.payload
        }),

        builder.addCase(removeCourseFromServer.fulfilled,(state, action)=>{
            console.log("state:", state);
            console.log("action:", action.payload);

            const removeCourse = state.filter((course)=>{
                return (
                    course._id !== action.payload.id
                )
            })

            return removeCourse
        })

    }
})

export default courseSlice.reducer
