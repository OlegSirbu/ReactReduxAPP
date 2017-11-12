import * as axios from 'axios';

export function getNotes(options){
  const url = 'http://127.0.0.1:8000/notes';
  return axios.get(url);
}

export function saveNote(note) {
  const url = 'http://127.0.0.1:8000/notes';
  debugger;
}