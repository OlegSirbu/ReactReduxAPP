import * as types  from '../actions/types';
import initialState from './initialState';

export const notesReducer = (state = initialState.notesState, actions) => {
  switch (actions.type) {
    case types.SUCCESS_LOAD_NOTES:
      return {...state, notes: actions.payload};
    case types.SUCCESS_GET_NOTES_COUNT:
      return {...state, notesCount: actions.payload};
    default :
      return state;
  }
};