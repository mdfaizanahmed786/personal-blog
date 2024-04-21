import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">© 2024 FZ. All rights reserved.</p>
        <nav className="hidden md:flex items-center space-x-4">
          <Link className="hover:underline" to="/">
            Privacy Policy
          </Link>
          <Link className="hover:underline" to="/">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
