import * as types  from './types';
import { getFilmsApi, searchFilmsApi, fetchFilmByIdApi } from '../api';
import {beginAjaxCall} from './ajaxStatusActions';

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
    });
  }
}