import { combineReducers, createStore } from 'redux';
import { GetTodosReducer } from './Components/AssignmnetWithRedux/Redux/Reducer/Reducers';

const rootReducer = combineReducers({
    TodosReducer: GetTodosReducer
});

export const store = createStore(rootReducer);