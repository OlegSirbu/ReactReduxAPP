import { combineReducers } from 'redux'
import { notesReducer } from './notesReducers';
import ajaxSatatusReducer from './ajaxSatatusReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  ajaxSatatusReducer
});

export default rootReducer
