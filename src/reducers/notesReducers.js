import * as types  from '../actions/types';
import initialState from './initialState';

export const notesReducer = (state = initialState.notes, actions) => {
  switch (actions.type) {
    case types.SUCCESS_LOAD_NOTES:
      return actions.payload;
    default :
      return state;
  }
};