import * as types  from '../actions/types';
import initialState from './initialState';

export const filmsReducer = (state = initialState.films, actions) => {
  switch (actions.type) {
    case types.SUCCESS_LOAD_FILMS:
      return actions.payload;
    case types.FAILED_SEARCH_FILM:
      return {...state, err: actions.payload};
    default :
      return state;
  }
};
export const filmReducer = (state = initialState.film, actions) => {
  switch (actions.type) {
    case types.SUCCESS_LOAD_FILM:
      return actions.payload;
    case types.FAILED_LOAD_FILM:
      return {...state, err: actions.payload};
    default :
      return state;
  }
};
