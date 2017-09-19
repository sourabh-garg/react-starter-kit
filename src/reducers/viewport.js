import {SET_VIEWPORT} from "../action/actionConstants";

export default function search( state = false, action) {

  switch (action.type) {

    case SET_VIEWPORT: {
      return {...state,
        favourite: action.payload
      };
    }

    default:
      return state;
  }
}
