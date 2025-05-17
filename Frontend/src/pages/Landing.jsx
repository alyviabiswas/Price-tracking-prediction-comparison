import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from "../components/button.jsx";

// Define animation variants
// const slideInLeft = {
//   hidden: { opacity: 0, x: -100 }, // Starts off-screen to the left
//   visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Moves to the center
// };

// const slideInRight = {
//   hidden: { opacity: 0, x: 100 }, // Starts off-screen to the right
//   visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Moves to the center
// };

const Landing = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);  // Track logged-in state

  // Define refs for each section
  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);
  // const ref4 = useRef(null);

  // Check if user is logged in (can be done by checking localStorage for token or via API)
  React.useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      // If token exists, assume user is logged in
      axios.get('/api/user/profile', { headers: { 'x-auth-token': token } })
        .then(response => {
          setUser(response.data);
          navigate('/home'); // Redirect to Home page if logged in
        })
        .catch(error => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [navigate]);

  if (user) {
    return null;  // Redirects the user to the Home page if they are logged in.
  }

  return (
    <div className="w-full min-h-screen">
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">PRICE PREDICTOR</h1>
            <div className="hidden md:flex space-x-6">
              {["FEATURES", "ABOUT", "SECTION","TEAM", "CONTACT"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm hover:text-blue-500 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/38526eaf-5019-40e3-b438-1b0315d58a8a.png"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4">WELCOME TO<br />SMART SPENDING</h2>
            <p className="text-gray-600 mb-8">Spot price patterns here, like a shopping Sherlock.</p>
            <a
              href="/items"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container bg-blue-500 mx-auto px-4 ">
          <h3 className="text-2xl font-bold text-center mb-16">FEATURES</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "📈",
                title: "Price History",
                description: "View the historical price trends and patterns of products.",
              },
              {
                icon: "🎯",
                title: "Price Prediction",
                description: "Get smart predictions for future prices using AI models.",
              },
              {
                icon: "📊",
                title: "Price Comparison",
                description: "Compare product prices across different platforms easily.",
              },
              {
                icon: "💡",
                title: "User Friendly",
                description: "Enjoy a clean, intuitive interface designed for everyone.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About Us"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">ABOUT US</h3>
              <p className="text-gray-600 mb-6">
                We empower consumers and businesses with real-time price intelligence. Our mission is to make smarter shopping and pricing decisions effortless using AI-driven insights. Whether you're a shopper tracking the best deals or a business optimizing your product pricing, our tools are built to give you an edge. With advanced algorithms and a clean interface, we help you stay ahead in the fast-moving digital marketplace.
              </p>
              <h4 className="font-bold mb-4">Why Choose Us?</h4>
              <ul className="space-y-2">
                {[
                  "AI-Powered Insights – Smart, data-driven price predictions.",
                  "Trusted & Reliable – Accuracy you can count on, backed by modern tech.",
                  "Custom Alerts – Get notified when prices match your budget.",
                  "Time & Money Saver – Helps users make informed decisions without the hassle.",
                  "User-Friendly Interface – Designed for ease and clarity.",
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-white mb-16">OUR SERVICES</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Price Monitoring",
                description: "Track real-time price changes across e-commerce platforms.",
              },
              {
                icon: "🤖",
                title: "AI Price Prediction",
                description: "Forecast product prices using smart AI algorithms.",
              },
              {
                icon: "📈",
                title: "Historical Trends",
                description: "View product pricing trends over time for better decisions.",
              },
              {
                icon: "🔔",
                title: "Smart Alerts",
                description: "Get notified instantly when a product hits your target price.",
              },
              {
                icon: "📉",
                title: "Price Comparison",
                description: "Compare product prices across multiple websites in one view.",
              },
              {
                icon: "📤",
                title: "Export Reports",
                description: "Download insightful data reports in various formats.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h4 className="font-bold mb-2">{service.title}</h4>
                <p className="text-sm text-white/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Meet the Team Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-2">MEET <span className="border-b-4 border-blue-500">THE TEAM</span></h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          The minds behind the mission – passionate, skilled, and ready to make a difference.
        </p>

        <div className="flex flex-wrap justify-center gap-8 px-4">
          {[
            { name: "Alyvia Biswas", role: "Developer", img: "https://i.pravatar.cc/150?img=1" },
            { name: "Firoj Sk", role: "Developer", img: "https://i.pravatar.cc/150?img=2" },
            { name: "Dipak Das", role: "AI & ML", img: "https://i.pravatar.cc/150?img=3" },
            { name: "Rupak Das", role: "AI & ML", img: "https://i.pravatar.cc/150?img=4" },
            { name: "Sayan Ghosh", role: "Database Manager", img: "https://i.pravatar.cc/150?img=4" },
          ].map((member, i) => (
            <div key={i} className="flex flex-col items-center max-w-[150px]">
              <img src={member.img} alt={member.name} className="rounded-md shadow-md" />
              <h4 className="mt-2 font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-400 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-2">GET IN TOUCH</h2>
            <p className="text-sm mb-6">Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>

            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Name" className="w-full p-3 rounded bg-white text-black" />
                <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white text-black" />
              </div>
              <textarea rows="4" placeholder="Message" className="w-full p-3 rounded bg-white text-black"></textarea>
              <button type="submit" className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-blue-500 transition">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3 space-y-4">
            <div>
              <h4 className="font-bold">Address</h4>
              <p>Kolkata, India</p>
            </div>
            <div>
              <h4 className="font-bold">Phone</h4>
              <p>+1 123 456 1234</p>
            </div>
            <div>
              <h4 className="font-bold">Email</h4>
              <p>info@pricepredictor.com</p>
            </div>
          </div>
        </div>

        {/* Footer Icons and Copyright */}
        <div className="mt-12 text-center border-t border-white/30 pt-6">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-github"></i></a>
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          </div>
          <p className="text-sm">© 2025 Price Predictor</p>
        </div>
      </section>



    </div>
  );
};

export default Landing;

// import React from "react";

// const Landing = () => {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?technology,price')` }}
//     >
//       <div className="flex items-center justify-center h-screen px-4">
//         <div className="text-center text-white">
//           <a
//             href="/register"
//           >
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;
