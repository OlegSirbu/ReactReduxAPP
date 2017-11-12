import * as types from '../actions/types';
import initialState from './initialState';

function actionsTypeEndsInSuccess(type) {
  return type.substring(type.length - 8 ) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallInProgress, actions) {
  if(actions.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if(actions.type === types.AJAX_CALL_ERROR ||
    actionsTypeEndsInSuccess(actions.type)) {
    return state - 1;
  }
  return state;
}

