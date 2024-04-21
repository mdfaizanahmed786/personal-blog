import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";

function Header() {
  const user = useSelector((state: RootState) => state.auth.user);
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
        
        {user ? (
          <>
          <Link to="">Welcome, {user.username}</Link>
          <Link className="hover:underline" to="">
            Logout
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
