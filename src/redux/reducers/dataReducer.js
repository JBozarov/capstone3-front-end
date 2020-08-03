import data from '../../assets/data'
import { SEARCH_DATA, PURCHAE_MADE, EDIT_ITEM, DELETE_ITEM } from './actionTypes'


const initialState = data
 

export const search = input => {
   return {
      type: SEARCH_DATA, 
      payload: input 
   }
}

export const purchaseMade = cart => {
   return {
      type: PURCHAE_MADE,
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
   switch(type) {
      case SEARCH_DATA : {
         let filtered = data.filter(function(product, index) {
            if (product.name.toLowerCase().includes(payload.toLowerCase()) || product.price<payload || product.serial === payload){
               return product
            }
         })  
         return [...filtered]
      }
      case PURCHAE_MADE : {
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
      default : return state; 
   }
}

export default dataReducer; 
