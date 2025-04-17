import React from "react";
 
 const Home = () => {
   return (
     <div>
 
       <div
         className="h-[480px] flex items-center justify-center bg-cover bg-center"
         style={{
           backgroundImage: `url('https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&w=600')`,
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
             <div className="space-y-6">
               <a
                 href="/items"
                 className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
               >
                 Explore Products
               </a>
 
               <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                 <input
                   type="text"
                   placeholder="Search item by name..."
                   className="px-4 py-2 w-72 bg-black text-gray-300 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                 />
                 <button className="bg-yellow-500 text-black px-5 py-2 rounded-md hover:bg-yellow-600 transition">
                   Search
                 </button>
               </div>
 
               <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                 <input
                   type="text"
                   placeholder="Paste product link..."
                   className="px-4 py-2 w-72 bg-black text-gray-300 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                 />
                 <button className="bg-yellow-500 text-black px-5 py-2 rounded-md hover:bg-yellow-600 transition">
                   Search
                 </button>
               </div>
             </div>
 
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