import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthIsSignedIn } from "../redus/authSelectors";


const RestrictedRoute = ({ children, redirectTo = "/gallery" }) => {
  const isSignedIn = useSelector(selectAuthIsSignedIn);
  return isSignedIn ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
