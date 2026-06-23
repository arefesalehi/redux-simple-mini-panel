import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const getArticleFromServer = createAsyncThunk('get/getArticleFromServer', async () => {
    return fetch('https://redux-cms.iran.liara.run/api/articles').then(res => res.json()).then(data => data)
})

export const removeArticleFromServer = createAsyncThunk('get/removeArticleFromServer', async (id) => {

    return fetch(`https://redux-cms.iran.liara.run/api/articles/${id}`,{
        method:'DELETE'
    }).then(res => res.json()).then(data => data)
})


const articleSlice = createSlice({
    name: "articles",
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getArticleFromServer.fulfilled, (state, action) => {
            console.log("state:", state);
            console.log("action:", action.payload);
            // state.push(...action.payload)
            return action.payload

        })

        builder.addCase(removeArticleFromServer.fulfilled,(state,action)=>{
            console.log("state:", state);
            console.log("action:", action.payload);


            const removeArticle = state.filter((article)=>{
                return (
                    article._id !== action.payload.id
                )
            })

            return removeArticle
        })
    }
})

export default articleSlice.reducer
