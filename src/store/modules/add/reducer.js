import { ADD_REQ, ADD_RESPONSE_OK, DEC_REQ, DEC_RESPONSE_OK } from "./const";

const initialState = {
  number: 0,
  loading: false
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_REQ:
      return {
        ...prevState,
        ...action.payload,
      };
    case ADD_RESPONSE_OK:
      return {
        ...prevState,
        ...action.payload,
      };

    case DEC_REQ:
      return {
        number: action.payload.number
      };

    default:
      return prevState;
  }
};

export default reducer;
