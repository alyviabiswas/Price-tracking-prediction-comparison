import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#1a1a2e] text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-cyan-400">PriceTracker</h1>
      <nav>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/login" className="hover:text-yellow-400">Login</Link></li>
          <li><Link to="/signup" className="bg-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-600">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
