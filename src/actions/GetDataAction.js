export const getDataAction = data => {
  return {
    type: "GET_DATA",
    payload: data,
  }
}

export const deleteCartItemIndex = dataIndex => {
  return {
    type: "REMOVE_DATA_INDEX",
    payload: dataIndex,
  }
}