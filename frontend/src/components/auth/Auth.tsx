import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { userRouteInstance } from "../../lib/axios";


function Auth() {
    useEffect(()=>{
        const userSession=async()=>{
           const response=await userRouteInstance.get("")
        }
    },[])

  return (
    <>
      <div>Hello this is auth component</div>
      <Outlet />
    </>
  );
}

export default Auth;
