import * as types  from './types';
import { getFinanceApi } from '../api';
import {beginAjaxCall} from './ajaxStatusActions';

export function fetchFinance(){
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return getFinanceApi().then((response)=>{
      return dispatch({
        type: types.SUCCESS_LOAD_FINANCE_DATA,
        payload: response.data
      });
    });
  }
}
