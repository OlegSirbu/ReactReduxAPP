import { combineReducers } from 'redux'
import { notesReducer } from './notesReducers';
import { newsReducer } from './newsReducers';
import { paginationReducer } from './paginationReducers';
import { financeReducer } from './financeReducers';
import { filmsReducer, filmReducer } from './filmsReducers';
import ajaxStatusReducer from './ajaxSatatusReducer';

const rootReducer = combineReducers({
  notesState: notesReducer,
  news: newsReducer,
  finance: financeReducer,
  pagination: paginationReducer,
  films: filmsReducer,
  film: filmReducer,
  ajaxStatusReducer
});

export default rootReducer
