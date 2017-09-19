import {SET_SETTINGS} from "../action/actionConstants";

export default function search(state = {favourite : false }, action) {

  switch (action.type) {

    case SET_SETTINGS: {
      return {...state,
        favourite: action.payload
      };
    }


    default:
      return state;
  }
}
