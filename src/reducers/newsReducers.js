import * as types  from '../actions/types';
import initialState from './initialState';

export const newsReducer = (state = initialState.news, actions) => {
  switch (actions.type) {
    case types.SUCCESS_LOAD_NEWS:
      return actions.payload;
    default :
      return state;
  }
};