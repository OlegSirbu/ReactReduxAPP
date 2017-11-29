import * as types  from './types';

export function setPage(params) {
	return (dispatch) => {
		return dispatch({
			type   : types.CHANGE_NOTE_PAGE,
			payload: params.page
		});
	}
}
