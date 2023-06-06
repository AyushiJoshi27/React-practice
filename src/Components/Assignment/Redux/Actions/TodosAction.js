export const getTodosDataAction = data => {
    return {
      type: "GET_TODOS_DATA",
      payload: data,
    }
  };