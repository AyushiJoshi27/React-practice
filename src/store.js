import {createStore} from 'redux';
import RotateReducer from './Reducers/RotateReducer';

function configureStore(state = {rotating: true}) {
    return createStore(RotateReducer, state);
}

export default configureStore;