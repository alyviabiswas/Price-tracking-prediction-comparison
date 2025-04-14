import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa"; 

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log("Login Data:", data);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=600')`, 
      }}
    >
      
      <div className="absolute inset-0"></div>

      
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative z-10 transform transition-all hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
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
              {...register("password", { required: "Password is required" })}
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
            Login
          </button>
        </form>

        
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 hover:underline font-semibold"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;