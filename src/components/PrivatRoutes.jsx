import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthIsSignedIn } from "../redus/authSelectors";


const PrivatedRoute = ({ children, redirectTo = "/login" }) => {
  const isSignedIn = useSelector(selectAuthIsSignedIn);
  return isSignedIn ? children : <Navigate to={redirectTo} replace />;
};

export default PrivatedRoute;
