import { combineReducers } from 'redux';
import search from "./search.reducer"
import user from "./user.reducer"
import rated from "./rated.reducer"
const rootReducer = combineReducers({
   search,
   user,
   rated
  });
  
  export default rootReducer;