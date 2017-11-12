import * as types  from '../actions/types';
import initialState from './initialState';

export const notesReducer = (state = initialState.notes, action) => {
  switch (action.type) {
    case types.SUCCESS_LOAD_NOTES:
      return [...state, ...action.payload];
    default :
      return state;
  }
};