import React from "react";
import { Provider } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import store from "./store/store";
const Auth = React.lazy(() => import("./components/auth/Auth"));
const Signup = React.lazy(() => import("./components/auth/Signup"));
const Login = React.lazy(() => import("./components/auth/Login"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const About = React.lazy(() => import("./components/About"));
const Home = React.lazy(() => import("./components/Home"));

function SuspenseLayout() {
  return (
    <React.Suspense fallback={<>Loading..</>}>
      <Outlet />
    </React.Suspense>
  );
}
function App() {
  return (
    <Provider store={store}>
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
