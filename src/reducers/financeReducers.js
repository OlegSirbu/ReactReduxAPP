import * as types  from '../actions/types';
import initialState from './initialState';

export const financeReducer = (state = initialState.finance, actions) => {
  switch (actions.type) {
    case types.SUCCESS_LOAD_FINANCE_DATA:
      return {...state, cities: actions.payload.cities, organizations: actions.payload.organizations};
    default :
      return state;
  }
};
