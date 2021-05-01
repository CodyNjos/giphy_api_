import { combineReducers } from 'redux';
import search from "./search.reducer"
import user from "./user.reducer"
const rootReducer = combineReducers({
   search,
   user
  });
  
  export default rootReducer;