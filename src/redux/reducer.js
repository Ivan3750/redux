const initialState = {
  count: 0,
};

export const reducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    return { ...state, count: state.count + action.payload };
  } else if (action.type === "MINUS") {
    return { ...state, count: state.count - action.payload };
  } else {
    return state;
  }
};
