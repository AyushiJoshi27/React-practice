const initialState = {
  albums: "",
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
    case 'CREATE_ALBUM_LOADER':
    case 'UPDATE_ALBUMS_LOADER':
    case 'DELETE_ALBUM_LOADER':
    case 'FETCH_ALBUMS_LOADER':
      return {
        ...state,
        loading: true,
        error: null,
        msg: "",
      }
    case 'CREATE_ALBUM_MSG':
    case 'DELETE_ALBUM_MSG':
    case 'UPDATE_ALBUMS_MSG':
    case 'FETCH_ALBUMS_MSG':
      return {
        ...state,
        loading: false,
        msg: "",
        error: null,
      }
    case 'UPDATE_ALBUM_SUCCESS':
      return {
        ...state,
        albums: state.albums.map((album) =>
          album.id === action.payload.id ? action.payload : album
        ),
        error: null,
        msg: "Album updated successfully",
        loading: false,
      };
    case 'DELETE_ALBUM_SUCCESS':
      return {
        ...state,
        albums: state.albums.filter((album) => album.id !== action.payload),
        error: null,
        msg: "Album deleted successfully",
        loading: false,
      };
    case 'CREATE_ALBUM_SUCCESS':
      return {
        ...state,
        albums: [...state.albums, action.payload],
        error: null,
        msg: "Album created successfully",
        loading: false,
      };
    default:
      return state;
  }
};

export default albumReducer;