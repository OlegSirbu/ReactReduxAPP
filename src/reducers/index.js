import { combineReducers } from 'redux'
import { notesReducer } from './notesReducers';
import { newsReducer } from './newsReducers';
import { paginationReducer } from './paginationReducers';
import { filmsReducer, filmReducer } from './filmsReducers';
import ajaxStatusReducer from './ajaxSatatusReducer';

const rootReducer = combineReducers({
  notesState: notesReducer,
  news: newsReducer,
  pagination: paginationReducer,
  films: filmsReducer,
  film: filmReducer,
  ajaxStatusReducer
});

export default rootReducer
