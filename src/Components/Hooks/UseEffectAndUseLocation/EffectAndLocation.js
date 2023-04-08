//useEffect
import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes, 
    Route,
    useLocation,
} from "react-router-dom";

// Create a custom hook that uses both useLocation and useEffect
const useScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
};

  