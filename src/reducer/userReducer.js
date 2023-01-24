import * as actionType from '../actions/ActionType';

const userReducer= (state = {}, action) => {
  switch (action.type) {
    case actionType.PASS_USER_OBJECT:
      return state = action.payload;
      default:
      return state
  }
}

export default userReducer;