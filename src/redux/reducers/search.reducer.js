const SearchReducer = (state = { data: [] }, action) => {
    switch (action.type) {
      case 'SET_SEARCH':
        return action.payload;
      case 'CLEAR_SEARCH':
        return { data: [] }
      default:
        return state;
    }
  };
  
  export default SearchReducer;
  