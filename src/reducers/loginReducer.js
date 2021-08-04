const default_state = {
  data: {},
  errorMsg: "",
  loggedin: false,
};

const loginReducer = (state = default_state, action) => {
  switch (action.type) {
    case "login__done":
      return {
        ...state,
        data: action.payload,
        loggedin: action.payload.loggedin,
        errorMsg: "",
      };
    case "login__failed":
      return {
        ...state,
        data: action.payload,
        errorMsg: "login failed",
      };
    case "logout__done":
      return {
        data: "none",
        errorMsg: "",
        loggedin: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
