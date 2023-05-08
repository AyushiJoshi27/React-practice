const initialState = {
    useToken: '',
}

export const TokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOKEN_DATA':
            const token = state.useToken;
            // if (state.useToken) {
            //     setTimeout(() => {
            //         localStorage.removeItem("token");
            //         console.log("removed item from storage: ",localStorage.getItem("token"));
            //       }, 2000)
            //     const item = localStorage.getItem('token');
            //     return {...state, useToken: item}
            // } else {
            //     localStorage.setItem('token', useToken: state.item)
            //     console.log(localStorage.getItem("token"));
            // }
            // console.log("TokenReducer: ", state)
            console.log(state);
            return {...state, useToken: token};
        default:
            return state;
    }
};