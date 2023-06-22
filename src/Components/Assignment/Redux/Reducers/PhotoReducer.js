const initialState = {
  photos: "",
  loading: false,
  error: null,
  msg: ''
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS_SUCCESS':
      return {
        ...state,
        photos: action.payload,
        loading: false,
        error: null,
        msg: ''
      };
    case 'FETCH_PHOTOS_FAILURE':
    case 'DELETE_PHOTO_FAILURE':
    case 'UPDATE_PHOTO_FAILURE':
    case 'CREATE_PHOTO_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
        msg: ''
      };
    case 'CREATE_PHOTO_MSG':
    case 'DELETE_PHOTO_MSG':
    case 'UPDATE_PHOTOS_MSG':
    case 'FETCH_PHOTOS_MSG':
      return {
        ...state,
        loading: false,
        msg: "",
        error: null,
      }
    case 'CREATE_PHOTO_LOADER':
    case 'UPDATE_PHOTOS_LOADER':
    case 'DELETE_PHOTO_LOADER':
    case 'FETCH_PHOTOS_LOADER':
      return {
        ...state,
        loading: true,
        error: null,
        msg: "",
      }
    case 'UPDATE_PHOTO_SUCCESS':
      return {
        ...state,
        photos: state.photos.map((photo) =>
          photo.id === action.payload.id ? action.payload : photo
        ),
        error: null,
        msg: "Photo updated successfully",
      };
    case 'DELETE_PHOTO_SUCCESS':
      return {
        ...state,
        photos: state.photos.filter((photo) => photo.id !== action.payload),
        error: null,
        msg: "Photo deleted successfully",
      };
    case 'CREATE_PHOTO_SUCCESS':
      return {
        ...state,
        photos: [...state.photos, action.payload],
        error: null,
        msg: "Photo created successfully",
      };
    default:
      return state;
  }
};

export default photoReducer;