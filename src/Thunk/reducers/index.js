import list from './list';
//import { isLoading } from './interactions';
import { isLoading } from '../actions';
import {combineReducers} from 'redux';

const reducer = combineReducers({
  list,
  isLoading,
});

export default reducer;