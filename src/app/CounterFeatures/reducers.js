let initalState = {
    count: 0,
  };
  
  const reducers = (state = initalState, action) => {
    switch (action.type) {
      case 'INC':
        return {
          ...state,
          count: state.count + action.value,
        };
      case 'DEC':
        return {
          count: state.count == 0 ? state.count : state.count - action.value,
        };
      default:
        return state;
    }
  };

export default reducers;