import * as types  from './types';
import {createUserApi} from '../api';
import {beginAjaxCall} from './ajaxStatusActions';

export function createUser(user) {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        return createUserApi(user)
                .then((response) => {
                    return dispatch({
                        type: types.SUCCESS_CREATE_USER,
                        payload: response.data
                    })
                })
    }
}
