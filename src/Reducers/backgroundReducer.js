const initialState = 'white';

const backgroundReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_BACKGROUND':
            return action.payload;
        default:
            return state;
    }
};

export default backgroundReducer;