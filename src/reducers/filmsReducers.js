import * as types  from '../actions/types';
import initialState from './initialState';

export const filmsReducer = (state = initialState.films, actions) => {
  switch (actions.type) {
    case types.SUCCESS_LOAD_FILMS:
      return actions.payload;
    default :
      return state;
  }
};
