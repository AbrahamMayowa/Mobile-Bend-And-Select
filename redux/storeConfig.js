import {createStore, combineReducers, applyMiddleware} from 'redux'
import authReducer from './reducer/authReducer'
import productDetailsReducer from './reducer/productDetailsReducer'
import productList from './reducer/productList'
import searchReducer from './reducer/searchReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

const reducers = combineReducers({
    auth: authReducer,
    products: productList,
    details: productDetailsReducer,
    search: searchReducer
})

export default store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))