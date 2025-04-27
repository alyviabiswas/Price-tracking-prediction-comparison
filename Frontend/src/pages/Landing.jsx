import React from "react";

const Landing = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?technology,price')` }}
    >
      <div className="flex items-center justify-center h-screen px-4">
        <div className="text-center text-white">
          <a
            href="/register"
          >
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
