import _ from "lodash";
const default_state = {
  loading: false,
  data: {},
  errorMsg: "",
  species_dropdown: "all",
  status_dropdown: "all",
  sort_checkbox: "A-Z",
};

const charReducer = (state = default_state, action) => {
  switch (action.type) {
    case "charLoading":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "charFailed":
      return {
        ...state,
        loading: false,
        errorMsg: "Cant get data of a character",
      };

    case "charLoaded":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
          ...state.data,
          [action.Id]: action.payload,
        },
      };

    case "charDeleted":
      const newstate = { ...state.data };
      if (!_.isEmpty(newstate[action.payload.id])) {
        delete newstate[action.payload.id];
      }
      return {
        ...state,
        data: newstate,
        loading: false,
        errorMsg: "",
      };

    case "filterUpdate":
      return {
        ...state,
        species_dropdown: action.payload.species,
        status_dropdown: action.payload.status,
        sort_checkbox: action.payload.sort,
      };
    case "logout":
      return{
        ...state,
        species_dropdown: "all",
        status_dropdown: "all",
        sort_checkbox: "A-Z",
      }
    case "Reset":
      return {
        loading: false,
        data: {},
        errorMsg: "",
        species_dropdown: "all",
        status_dropdown: "all",
        sort_checkbox: "A-Z",
      };
    default:
      return state;
  }
};

export default charReducer;
