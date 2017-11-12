import * as types  from './types';
import { getNotes, saveNote } from '../api';
import {beginAjaxCall} from './ajaxStatusActions';

export const fetchNotes = () => {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    getNotes().then((response)=>{
      return dispatch({
        type: types.SUCCESS_LOAD_NOTES,
        payload: response.data
      });  
    }).catch(err=>{
    });
  }
};

export  const saveNotes = (notes) => {
  return (dispatch) => {
    dispatch(beginAjaxCall());
      saveNote().then(()=>{
        return dispatch({
          type: types.SUCCESS_SAVE_NOTES
        });
      })
  }
};