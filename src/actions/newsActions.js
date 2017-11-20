import * as types  from './types';
import { getNewsApi } from '../api';
import {beginAjaxCall} from './ajaxStatusActions';

export function fetchNews(){
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return getNewsApi().then((response)=>{
      return dispatch({
        type: types.SUCCESS_LOAD_NEWS,
        payload: response.data.articles
      });
    })
  }
}
