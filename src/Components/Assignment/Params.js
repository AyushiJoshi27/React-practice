import { useState } from "react";

export const Params = () => {
    const [paramState] = useState(1);
    // console.log(paramState);
  
    return paramState;
  };
