const initialState = {
  albums: [],
  loading: false,
  error: null,
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS_SUCCESS':
      return {
        ...state,
        albums: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_ALBUMS_FAILURE':
    case 'DELETE_ALBUM_FAILURE':
    case 'UPDATE_ALBUM_FAILURE':
    case 'CREATE_ALBUM_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_ALBUM_SUCCESS':
      return {
        ...state,
        albums: state.albums.map((album) =>
          album.id === action.payload.id ? action.payload : album
        ),
      };
    case 'DELETE_ALBUM_SUCCESS':
      return {
        ...state,
        albums: state.albums.filter((album) => album.id !== action.payload),
      };
    case 'CREATE_ALBUM_SUCCESS':
      return {
        ...state,
        albums: [...state.albums, action.payload],
      };
    default:
      return state;
  }
};

export default albumReducer;