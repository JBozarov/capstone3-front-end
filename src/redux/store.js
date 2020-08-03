import { createStore, combineReducers } from 'redux'
import cartReducer from './reducers/cartReducer'
import dataReducer from './reducers/dataReducer'

const rootReducer = combineReducers({
   cartReducer, 
   dataReducer,
})


export default createStore(rootReducer); 