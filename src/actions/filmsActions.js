import * as types  from './types';
import { getFilmsApi, searchFilmsApi, fetchFilmByIdApi } from '../api';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function fetchFilms(){
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return getFilmsApi().then((response)=>{
      return dispatch({
        type: types.SUCCESS_LOAD_FILMS,
        payload: response.data.results
      });
    });
  }
}

export function searchFilms(params){
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return searchFilmsApi(params).then((response)=>{
      return dispatch({
        type: types.SUCCESS_LOAD_FILMS,
        payload: response.data.results
      });
    }).catch(({response: {data: {error: err}}}) => {
      dispatch(ajaxCallError());
      return dispatch({
        type: types.FAILED_SEARCH_FILM,
        payload: err
      });
    });
  }
}

export function fetchFilmById(params){
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return fetchFilmByIdApi(params).then((response)=>{
      return dispatch({
        type: types.SUCCESS_LOAD_FILM,
        payload: response.data
      });
    }).catch(({response: {data: {error: err}}}) => {
      dispatch(ajaxCallError());
      return dispatch({
        type: types.FAILED_LOAD_FILM,
        payload: err
      });
    });
  }
}