export const getAlbumDataReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALBUM_DATA":
      return action.payload;
    default:
      return state;
  }
}