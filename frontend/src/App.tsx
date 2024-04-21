import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./components/auth/Auth";

import NotFound from "./components/NotFound";
import About from "./components/About";
import Home from "./components/Home";
import { Cookies } from "react-cookie";
import { userRouteInstance } from "./lib/axios";
import { setUser } from "./features/slices/authSlice";
import SingleBlog from "./components/SingleBlog";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import CreateBlog from "./components/CreateBlog";
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
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="/blog/create" element={<CreateBlog />} />

        <Route path="/auth" element={<Auth />}>
          <Route  path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
