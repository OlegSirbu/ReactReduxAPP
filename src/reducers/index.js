import { combineReducers } from 'redux'
import { notesReducer } from './notesReducers';
import { newsReducer } from './newsReducers';
import { paginationReducer } from './paginationReducers';
import ajaxSatatusReducer from './ajaxSatatusReducer';

const rootReducer = combineReducers({
  notesState: notesReducer,
  news: newsReducer,
  pagination: paginationReducer,
  ajaxSatatusReducer
});

export default rootReducer
