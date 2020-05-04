import { combineReducers } from 'redux'

import userReducer from './user/userReducer'
import searchReducer from './search/searchReducer'
import productReducer from './product/productReducers'

export default combineReducers({
   user: userReducer,
   search: searchReducer,
   product: productReducer 
})