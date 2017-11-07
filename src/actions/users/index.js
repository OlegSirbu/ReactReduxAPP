import * as types  from '../../actions/types';
import { getUsers } from '../../api';

export const fetchUsers = () => {
  return (dispatch) => {
    getUsers().then((response)=>{
      return dispatch({
        type: types.SUCCESS_LOAD_USERS,
        payload: response.data
      });  
    });
  }
};