import * as axios from 'axios';

export function getNotesApi(options){
  const url = 'http://127.0.0.1:8000/notes';
  return axios.get(url);
}

export function saveNoteApi(note) {
  const url = 'http://127.0.0.1:8000/notes';
  return axios.post(url, note);
}