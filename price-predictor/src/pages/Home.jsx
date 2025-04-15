import React from "react";

const Home = () => {
  return (
    <div>
      
      <div
        className="h-[480px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHx8MA%3D%3D')`, 
        }}
      >
        
        <div className="absolute inset-0"></div>

        
        <div className="relative text-center text-black max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-6">
            Welcome To Smart Spending
          </h1>
          <p className="text-xl text-gray-900 font-bold mb-8">
          Spot price patterns here, like a shopping Sherlock.
          </p>
          <div className="space-x-4">
            <a
              href="/items"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Explore Products
            </a>
            
          </div>
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Discover More
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore perfect matches for your style and budget, then save smarter with price predictions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;