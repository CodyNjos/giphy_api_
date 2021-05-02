const RatedReducer = (state = { data: [] }, action) => {
    switch (action.type) {
      case 'SET_RATED':
        return action.payload;
      case 'CLEAR_RATED':
        return { data: [] }
      default:
        return state;
    }
  };

export default RatedReducer