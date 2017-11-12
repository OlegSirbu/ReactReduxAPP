import * as types  from '../../actions/types';

export const notesReducer = (state = [], action) => {
  switch (action.type) {
    case types.SUCCESS_LOAD_NOTES:
    debugger;
      return { ...state, notes: action.payload };
    default :
      return state;
  }
};