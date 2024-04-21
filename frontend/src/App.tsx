import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Auth = React.lazy(() => import("./components/auth/Auth"));
const Signup = React.lazy(() => import("./components/auth/Signup"));
const Login = React.lazy(() => import("./components/auth/Login"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const About = React.lazy(() => import("./components/About"));
const Home = React.lazy(() => import("./components/Home"));
import { Cookies } from "react-cookie";
import { userRouteInstance } from "./lib/axios";
import { setUser } from "./features/slices/authSlice";
import SingleBlog from "./components/SingleBlog";

const cookies= new Cookies();
function SuspenseLayout() {
  return (
    <>
      <Header />

      <React.Suspense fallback={<>Loading..</>}>
        <Outlet />
      </React.Suspense>
      <Footer />
    </>
  );
}
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      const token = cookies.get("auth-token");
      console.log(token, "TOKEN===>");
      if (token) {
        const { data } = await userRouteInstance.get("/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (data.success) {
          dispatch(setUser({ user: data.user, token, isAuthenticated: true }));
        }
      }
    };
    fetchUser();
  }, [dispatch]);
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route element={<SuspenseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/blog/:slug" element={<SingleBlog />}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
