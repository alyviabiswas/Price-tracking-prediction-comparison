const Signup = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212]">
        <form className="bg-[#1a1a2e] p-6 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Sign Up</h2>
          <input type="text" placeholder="Username" className="w-full p-2 mb-3 bg-gray-700 text-white rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 mb-3 bg-gray-700 text-white rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 mb-3 bg-gray-700 text-white rounded" />
          <button className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500">
            Register
          </button>
        </form>
      </div>
    );
  };
  
  export default Signup;
  