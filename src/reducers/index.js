import { combineReducers } from 'redux'
import { notesReducer } from './notesReducers';
import { newsReducer } from './newsReducers';
import { paginationReducer } from './paginationReducers';
import { financeReducer } from './financeReducers';
import ajaxStatusReducer from './ajaxSatatusReducer';

const rootReducer = combineReducers({
  notesState: notesReducer,
  news: newsReducer,
  finance: financeReducer,
  pagination: paginationReducer,
  ajaxStatusReducer
});

export default rootReducer
