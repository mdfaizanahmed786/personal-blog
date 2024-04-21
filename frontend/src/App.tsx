import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./components/auth/Auth";

const NotFound = React.lazy(() => import("./components/NotFound"));
const About = React.lazy(() => import("./components/About"));
const Home = React.lazy(() => import("./components/Home"));
import { Cookies } from "react-cookie";
import { userRouteInstance } from "./lib/axios";
import { setUser } from "./features/slices/authSlice";
import SingleBlog from "./components/SingleBlog";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
const CreateBlog = React.lazy(() => import("./components/CreateBlog"));

const cookies = new Cookies();

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      const token = cookies.get("auth-token");

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
      <Header />
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <About />
            </Suspense>
          }
        />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route
          path="/blog/create"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <CreateBlog />
            </Suspense>
          }
        />

        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
