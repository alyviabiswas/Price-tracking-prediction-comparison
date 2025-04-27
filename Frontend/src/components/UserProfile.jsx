// src/components/UserProfile.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/auth/me", {
      withCredentials: true,
    })
    .then(res => setUser(res.data))
    .catch(() => console.log("Not logged in"));
  }, []);

  const handleLogout = () => {
    window.location.href = "http://localhost:5000/api/auth/logout";
  };

  if (!user) return null;

  return (
    <div className="bg-[#1e2b26] text-white rounded-xl p-6 w-72 shadow-lg text-center">
      <img
        src={user.profilePicture || "https://via.placeholder.com/80"}
        alt="Profile"
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{user.fullName}</h2>
      <p className="text-sm text-gray-300">{user.email}</p>
      <button
        onClick={handleLogout}
        className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
