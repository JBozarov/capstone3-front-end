import { createStore, combineReducers, applyMiddleware } from 'redux'
import cartReducer from './reducers/cartReducer'
import dataReducer from './reducers/dataReducer'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
   cartReducer, 
   dataReducer,
})


export default createStore(rootReducer, applyMiddleware(promiseMiddleware)); 