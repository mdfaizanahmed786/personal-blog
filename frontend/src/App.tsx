import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import store from "./store/store";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Auth = React.lazy(() => import("./components/auth/Auth"));
const Signup = React.lazy(() => import("./components/auth/Signup"));
const Login = React.lazy(() => import("./components/auth/Login"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const About = React.lazy(() => import("./components/About"));
const Home = React.lazy(() => import("./components/Home"));

function SuspenseLayout() {
  useEffect(() => {}, []);

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
  return (
    <Provider store={store}>
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route element={<SuspenseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
