import * as types  from './types';
import { getNotesApi, saveNoteApi } from '../api';
import {beginAjaxCall} from './ajaxStatusActions';

export function fetchNotes(){
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return getNotesApi().then((response)=>{
      return dispatch({
        type: types.SUCCESS_LOAD_NOTES,
        payload: response.data
      });  
    }).catch(err=>{
    });
  }
}

export function saveNote(note) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
      return saveNoteApi(note).then(()=>{
        return dispatch({
          type: types.SUCCESS_SAVE_NOTES
        });
      })
  }
}