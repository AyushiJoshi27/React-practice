const initialState = {
  photos: "",
  loading: false,
  error: null,
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS_SUCCESS':
      return {
        ...state,
        photos: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_PHOTOS_FAILURE':
    case 'DELETE_PHOTO_FAILURE':
    case 'UPDATE_PHOTO_FAILURE':
    case 'CREATE_PHOTO_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_PHOTO_SUCCESS':
      return {
        ...state,
        photos: state.photos.map((photo) =>
          photo.id === action.payload.id ? action.payload : photo
        ),
      };
    case 'DELETE_PHOTO_SUCCESS':
      return {
        ...state,
        photos: state.photos.filter((photo) => photo.id !== action.payload),
      };
    case 'CREATE_PHOTO_SUCCESS':
      return {
        ...state,
        photos: [...state.photos, action.payload],
      };
    default:
      return state;
  }
};

export default photoReducer;