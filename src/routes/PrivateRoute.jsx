import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return (
      <div className="m-5">
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="secondary" />
    </div>
    )
  }

  if(user){
    return children;
  }
  return <Navigate to='/login' state={{from : location}} replace></Navigate>
 
};

export default PrivateRoute;