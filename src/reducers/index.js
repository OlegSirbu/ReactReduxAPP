import { combineReducers } from 'redux'
import { notesReducer } from './notesReducers';
import { newsReducer } from './newsReducers';
import { paginationReducer } from './paginationReducers';
import ajaxStatusReducer from './ajaxSatatusReducer';

const rootReducer = combineReducers({
  notesState: notesReducer,
  news: newsReducer,
  pagination: paginationReducer,
  ajaxStatusReducer
});

export default rootReducer
