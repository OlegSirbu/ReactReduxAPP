import * as types  from './types';
import Promise from 'bluebird';
import { getNotesApi, saveNoteApi, deleteNoteApi, fetchNotesCountApi } from '../api';
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

export function fetchNotes(params) {
		return (dispatch) => {
				dispatch(beginAjaxCall());
				return getNotesApi(params).then((response)=> {
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

export function fetchNotesCount() {
		return (dispatch) => {
				dispatch(beginAjaxCall());
				return fetchNotesCountApi().then((response)=>{
						return dispatch({
								type: types.SUCCESS_GET_NOTES_COUNT,
								payload: response.data
						});
				});
		}
}
