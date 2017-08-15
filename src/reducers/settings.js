import {FAVOURITE_ON,} from "../action/actionConstants";

export default function search(state = {favourite : false }, action) {

  switch (action.type) {

    case FAVOURITE_ON: {
      return {...state,
        favourite: action.payload
      };
    }


    default:
      return state;
  }
}
