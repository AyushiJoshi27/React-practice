import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const RoutesManipulator = () => {
  const navigate = useNavigate();
  const [userId] = useState(1);

  const GoTo = () => {
    navigate(`/layout/facebook/${userId}`)
  }

  return <>
      <button onClick={GoTo}>Go To Fb</button>
    </>
} 
