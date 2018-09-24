const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      state = {
        ...state,
        value: state.value + 1
      };
      break;

    // case "decrease":
    //   state = {
    //     ...state,
    //     value: state.value - 1
    //   };
    //   break;

    case "decrease_ASYNC":
      console.log("decrease_ASYNC");
      state = {
        ...state,
        value: state.value - 1
      };
      break;

    default:
      break;
  }
  return state;
};

export default reducer;
