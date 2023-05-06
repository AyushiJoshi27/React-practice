const initialState = {
    useToken: ''
}

export const TokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOKEN_DATA':
            console.log("TokenReducer: ", state)
            return {state: state.useToken};
        default:
            return state;
    }
};