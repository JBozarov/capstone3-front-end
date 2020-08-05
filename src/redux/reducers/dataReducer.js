// import data from '../../assets/data'
import { SEARCH_DATA, PURCHASE_MADE, EDIT_ITEM, DELETE_ITEM, GET_ALL_PRODUCTS } from './actionTypes'
import axios from 'axios'

// const data = []; 
// const originalState = []; 
const initialState = []



export const getAllData = () => {
      //let results = axios.get('http://34.221.195.5/products')
      let results =  axios.get('http://localhost:8080/products')
           .then(response => response.data)
           .catch(error => console.log("data Reducer line 15 fetching error ", error));
         console.log(results)
   return {
       type: GET_ALL_PRODUCTS, 
       payload: results
   }
}

export const search = input => {
   return {
      type: SEARCH_DATA, 
      payload: input 
   }
}

export const purchaseMade = cart => {
   return {
      type: PURCHASE_MADE,
      payload: cart
   }
}

export const editItem = arr => {
   return {
      type: EDIT_ITEM, 
      payload: arr
   }
}

export const deleteItem = id => {
   console.log('delete fired ' )
   return {
      type: DELETE_ITEM, 
      payload: id
   }
}


const dataReducer = (state = initialState, action ) => {
   const { type, payload } = action

   console.log('payload', payload)
   console.log('initialState', initialState)
   console.log('state', state)
   switch(type) {
      case SEARCH_DATA : {
         let filtered = state.filter(function(product, index) {
           {/* if (product.name.toLowerCase().includes(payload.toLowerCase()) || product.price<payload || product.serial === payload){ */}
           if (product.productName.includes(payload.toLowerCase())) {
              console.log('payload is ', payload)
               return product
            }
         })  
         return [...filtered]
      }
      case PURCHASE_MADE : {
         for ( let i = 0; i<state.length; i++ ) {
            for ( let k = 0; k<payload.length; k++ ) {
               if ( state[i].id === payload[k].id ) {
                  state[i].quantity -= payload[k].cartQuantity; 
               }
            }
         }
         return [...state]
      }
      case EDIT_ITEM : {
         let [i, p, q] = payload; 
         console.log('payload fired ', i, p, q)
         let updatedState = state.map(product => {
            if (product.id === parseInt(i)){
                  product.price = parseInt(p)
                  product.quantity = parseInt(q)
            }
            return product
         })
         return [...updatedState]
      }
      case DELETE_ITEM : {
         console.log(typeof payload)
         let deletedItemState = state.filter(product => product.id !== payload)
         return [...deletedItemState]
      }
      case GET_ALL_PRODUCTS + '_FULFILLED': {
         return payload
      } 
      
      default : return state; 
   }
}

export default dataReducer; 
