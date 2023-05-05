import { HELLO_RESPONSE } from '../actions';

export default function List(state = {}, action) {
  switch (action.type) {
    case HELLO_RESPONSE:
      console.log(action);
      return action.json;
    default:
      return state;
  }
}