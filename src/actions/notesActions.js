import * as types  from './types';
import Promise from 'bluebird';
import { getNotesApi, saveNoteApi, deleteNoteApi } from '../api';
import { beginAjaxCall } from './ajaxStatusActions';

export function deleteNote(ids) {
		return (dispatch) => {
				const deletePromise = ids.length > 1
				? Promise.all([ids.forEach((id)=>deleteNoteApi(id))])
				: deleteNoteApi(ids);
				
				return deletePromise.then(() => {
						return dispatch({
								type: types.SUCCESS_DELETE_NOTES
						});
				})
		}
}

export function fetchNotes() {
		return (dispatch) => {
				dispatch(beginAjaxCall());
				return getNotesApi().then((response)=> {
						return dispatch({
								type   : types.SUCCESS_LOAD_NOTES,
								payload: response.data
						});
				});
		}
}

export function saveNote(note) {
		return (dispatch) => {
				dispatch(beginAjaxCall());
				return saveNoteApi(note).then(()=> {
						return dispatch({
								type: types.SUCCESS_SAVE_NOTES
						});
				});
		}
}
