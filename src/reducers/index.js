import { combineReducers } from 'redux'
import { notesReducer } from './notesReducers';
import { newsReducer } from './newsReducers';
import ajaxSatatusReducer from './ajaxSatatusReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  news: newsReducer,
  ajaxSatatusReducer
});

export default rootReducer
