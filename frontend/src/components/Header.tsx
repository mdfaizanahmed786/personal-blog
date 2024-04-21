import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import { userRouteInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { setUser } from "../features/slices/authSlice";

function Header() {
  const user = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const logOutUser = async () => {
    try {
      const { data } = await userRouteInstance.get("/logout", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      if (data.success) {
        toast.success(data.message);
        dispatch(
          setUser({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
          })
        );
      }
    } catch (error: unknown) {
      toast.error("An error occurred while logging out!");
      console.log(error);
    }
  };
  return (
    <header className="bg-gray-900 sticky top-0 shadow-md text-white py-4 px-6 md:px-8">
      <div className="container  mx-auto flex items-center ">
        <div className="flex-1 space-x-4">
          <Link className="text-xl font-bold" to="/">
            Blog
          </Link>
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/about">
            About
          </Link>
        </div>
        <nav className="hidden md:self-end md:flex items-center space-x-4">
          {user.isAuthenticated ? (
            <>
              <Link to="">Welcome, {user?.user?.username}</Link>
              <Link onClick={logOutUser} className="hover:underline" to="">
                Logout
              </Link>
              <Link className="hover:underline" to="/blog/create">
            Create Blog
          </Link>
            </>
          ) : (
            <>
              <Link className="hover:underline" to="/auth/login">
                Login
              </Link>
              <Link className="hover:underline" to="/auth/signup">
                Signup
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
