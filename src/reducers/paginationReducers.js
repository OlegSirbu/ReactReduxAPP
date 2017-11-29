import * as types  from '../actions/types';
import initialState from './initialState';

export const paginationReducer = (state = initialState.pagination, actions) => {
		switch (actions.type) {
			case types.CHANGE_NOTE_PAGE:
				return {...state, notesPage: actions.payload};
				default :
						return state;
		}
};
