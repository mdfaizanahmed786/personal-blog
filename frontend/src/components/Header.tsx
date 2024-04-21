import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 sticky top-0 shadow-md text-white py-4 px-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-xl font-bold" to="/">
          Blog
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/about">
            About
          </Link>
          <Link className="hover:underline" to="/">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
