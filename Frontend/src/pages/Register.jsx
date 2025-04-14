import React from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log("Registration Data:", data);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1495578942200-c5f5d2137def?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGx8ZW58MHx8MHx8fDA%3D')`,
      }}
    >
     
      <div className="absolute inset-0"></div>

     
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative z-10 transform transition-all hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Full Name is required" })}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>

        
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-semibold"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;