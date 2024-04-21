import { Link, useNavigate } from "react-router-dom";
import { type LoginUser } from "@faizanpkg786/blog";
import { useState } from "react";
import { userRouteInstance } from "../../lib/axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setUser } from "../../features/slices/authSlice";

function Login() {
  const [userInfo, setUserInfo] = useState<LoginUser>({
    username: "",
    password: "",
  });
  const { isLoading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(
        setUser({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: true,
        })
      );
      const { data } = await userRouteInstance.post("/login", userInfo);
  
      if (data.success) {
        toast.success(data.message);

        dispatch(
          setUser({ user: data.user, token: data.token, isAuthenticated: true })
        );
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }

    } catch (error: unknown) {
          // @ts-expect-error This is having some type, not sure
      console.log(error.response?.data);
          // @ts-expect-error This is having some type, not sure
      toast.error(error.response?.data.message || "An error occurred")
      dispatch(
        setUser({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        })
      );
    }
  };
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 py-12 ">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Don't have an account?
            <Link
              className="font-medium text-gray-900 hover:underline dark:text-gray-400 ml-1"
              to="/auth/signup"
            >
              Register
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="w-full">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              onChange={(e) =>
                setUserInfo({ ...userInfo, username: e.target.value })
              }
              value={userInfo.username}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="username"
              placeholder="johndoe_786"
              required
              type="text"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Link
                className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                to="#"
              >
                Forgot password?
              </Link>
            </div>
            <input
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
              value={userInfo.password}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="password"
              required
              type="password"
            />
          </div>
          <button
            disabled={isLoading}
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="submit"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
