const initialState = {
    data: {
        loading: false,
        error: null,
        title: '',
        body: '',
    },
};

const Thunk3Red = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                data: {
                    loading: false,
                    error: null,
                    title: action.payload.title,
                    body: action.payload.body,
                },
            };
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                data: {
                    loading: false,
                    error: action.payload,
                    title: '',
                    body: '',
                },
            };
        default:
            return state;
    }
};

export default Thunk3Red;