import React from "react";
import { useSelector } from "react-redux";
import Redirect from "./Redirect";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const { isValid } = useSelector((state) => state.user);
  let location = useLocation();

  if (isValid === false) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return children;
};

export default Auth;
