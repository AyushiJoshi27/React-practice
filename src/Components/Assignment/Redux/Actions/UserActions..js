//Get user data(info)
export const getUserDataAction = data => {
  return {
    type: "GET_USER_DATA",
    payload: data,
  }
};