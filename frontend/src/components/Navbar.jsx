import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold hover:text-blue-600 transition">
          Blog
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/upload" className="hover:text-blue-600 transition">Upload</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
