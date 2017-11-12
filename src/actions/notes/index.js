import * as types  from '../../actions/types';
import { getNotes } from '../../api';

export const fetchNotes = () => {
  return (dispatch) => {
    getNotes().then((response)=>{
      return dispatch({
        type: types.SUCCESS_LOAD_NOTES,
        payload: response.data
      });  
    });
  }
};