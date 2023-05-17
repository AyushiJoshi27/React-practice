import { useState } from "react";

export const Params = () => {
    const [paramState, serParamState] = useState(1);
    console.log("param:", paramState);
  
    return paramState;
  };