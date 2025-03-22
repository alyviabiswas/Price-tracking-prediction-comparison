import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-cyan-400">Track & Compare Prices Easily</h1>
      <p className="text-lg text-gray-300 mt-4">Get the best deals from Amazon, Flipkart & more.</p>
      <Link to="/signup" className="mt-6 bg-yellow-400 px-6 py-3 rounded-lg text-black hover:bg-yellow-500">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
