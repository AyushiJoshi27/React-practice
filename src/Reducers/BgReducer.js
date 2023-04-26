const initialState = 'white';

const bgReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'CHANGE_BACKGROUND': 
            return action.payload;
        default: 
            return state;
    }
}

export default bgReducer;