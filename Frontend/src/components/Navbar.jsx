// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
  
//   // Safely parse user
//   const user = JSON.parse(localStorage.getItem("user") || "null");
//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   return (
//     <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Price Predictor</h2>
//         <ul className="flex items-center space-x-4">
//           <li>
//             <NavLink
//               to="/home"
//               end
//               className={({ isActive }) =>
//                 isActive ? "text-yellow-400 font-bold" : "hover:text-gray-400"
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/items"
//               className={({ isActive }) =>
//                 isActive ? "text-yellow-400 font-bold" : "hover:text-gray-400"
//               }
//             >
//               Items
//             </NavLink>
//           </li>

//           {!token ? (
//             <>
//               <li>
//                 <NavLink
//                   to="/login"
//                   className={({ isActive }) =>
//                     isActive ? "text-yellow-400 font-bold" : "hover:text-gray-400"
//                   }
//                 >
//                   Login
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/register"
//                   className={({ isActive }) =>
//                     isActive ? "text-yellow-400 font-bold" : "hover:text-gray-400"
//                   }
//                 >
//                   Register
//                 </NavLink>
//               </li>
//             </>
//           ) : (
//             <>
//               <li className="flex items-center space-x-2">
//                 <img
//                   src={user?.picture || "/default-avatar.png"}
//                   alt="Profile"
//                   className="w-8 h-8 rounded-full object-cover border border-white"
//                 />
//                 <span>{user?.email}</span>
//               </li>
//               <li>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
//                 >
//                   Logout
//                 </button>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">Price Predictor</h2>
        <ul className="flex items-center space-x-4">
          <li>
            <NavLink
              to="/home"
              end
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-bold" : "hover:text-gray-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/items"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-bold" : "hover:text-gray-400"
              }
            >
              Items
            </NavLink>
          </li>

          {!token ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "hover:text-gray-400"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "hover:text-gray-400"
                  }
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-center space-x-2">
                <img
                  src={user?.picture || "/default-avatar.png"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover border border-white"
                />
                <span>{user?.email}</span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;