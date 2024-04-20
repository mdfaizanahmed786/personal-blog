import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../store/store";

function Auth() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return <>{isAuthenticated ? <Navigate to="/" replace={true}/> : <Outlet />}</>;
}

export default Auth;
