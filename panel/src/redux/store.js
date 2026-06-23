import {configureStore} from  '@reduxjs/toolkit'
import userReducer from './store/userReducer'
import courseReducer from './store/courseReducer'
import articleReducer from './store/articleReducer'

export default configureStore({
    reducer:{
        users:userReducer,
        courses:courseReducer,
        articles:articleReducer
    }
})