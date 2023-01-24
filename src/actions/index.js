import * as actionType from './ActionType';
export const addCounter = () => ({
  type: actionType.ADD_COUNTER,
  payload: 1
});

export const removeCounter = () => ({
    type: actionType.REMOVE_COUNTER,
    payload: 1
  });

  export const passUser = (user) => ({
    type: actionType.PASS_USER_OBJECT,
    payload: user
  });
