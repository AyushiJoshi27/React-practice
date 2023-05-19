import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RoutesManipulator = () => {
  const navigate = useNavigate();
  const [param, setParam] = useState(1);

  const GoTo = () => {
    navigate(`/layout/facebook/${param}`)
  }

  return <button onClick={GoTo}>Go To Fb</button>
} 
