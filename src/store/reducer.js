import { ADD_REQ, ADD_OK, DEC_REQ, DEC_OK } from "./const";

const initialState = {
  number: 0
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_REQ:
      return {
        number: action.payload.number
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
