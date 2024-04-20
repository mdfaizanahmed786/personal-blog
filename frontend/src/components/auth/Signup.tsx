import { useState } from "react";
import { Link } from "react-router-dom";
import { userRouteInstance } from "../../lib/axios";

function Signup() {
  const [user, setUser] = useState({
    username: "",
    fullname: "",
    age: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await userRouteInstance.post("/signup", user);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 py-12 ">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Create an Account
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Already have an account?
            <Link
              className="font-medium text-gray-900 hover:underline dark:text-gray-400 ml-1"
              to="/auth/login"
            >
              Login
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
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              value={user.username}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="username"
              placeholder="johndoe_786"
              required
              type="text"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              value={user.fullname}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="fullname"
              placeholder="John Doe"
              required
              type="text"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              onChange={(e) => setUser({ ...user, age: e.target.value })}
              value={user.age}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="age"
              max={3}
              min={1}
              required
              type="number"
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
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="password"
              required
              type="password"
            />
          </div>
          <button
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
