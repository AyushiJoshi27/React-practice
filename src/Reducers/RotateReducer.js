const ServiceWorker = (state, action) => {
  switch (action.type) {
    case "rotate":
      return {
        rotating: action.payload
      };
    default:
      return state
  }
}

export default ServiceWorker;