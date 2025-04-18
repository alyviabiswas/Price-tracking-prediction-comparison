import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token); // 🔍 DEBUG LOG

    if (!token) {
      alert("Please login first");
      navigate("/login");
    } else {
      setIsChecking(false);
    }
  }, [navigate]);

  // Prevent flashing of protected page before redirect
  if (isChecking) return null;

  return children;
};

export default ProtectedRoute;
