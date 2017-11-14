import * as axios from 'axios';

export function getNewsApi(){
  const url = 'https://newsapi.org/v1/sources?language=en&apiKey=9f55d974fffd4796a278408ae223ab54';
  return axios.get(url);
}

export function getNotesApi(){
  const url = 'http://127.0.0.1:8000/notes';
  return axios.get(url);
}

function updateNote(note) {
  let url = `http://127.0.0.1:8000/notes/${note._id}`;
  return axios.put(url, note);
}

export function saveNoteApi(note) {
  let url = 'http://127.0.0.1:8000/notes';
  if(note._id) return updateNote(note);

  return axios.post(url, note);
}