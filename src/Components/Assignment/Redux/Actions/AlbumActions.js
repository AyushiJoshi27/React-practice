//Get user data(info)
export const getAlbumsDataAction = data => {
    return {
      type: "GET_ALBUM_DATA",
      payload: data,
    }
  };