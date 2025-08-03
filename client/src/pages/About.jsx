import React from "react";
import GridBack from "../components/common/gridBack/GridBack";  

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Background Grid */}
      <GridBack />

      {/* Hero Section */}
      <div className=" relative text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          About <span className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
          DragThatSh*t</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          A modern and dynamic experience designed with cutting-edge technologies.
          Elevate your workflow with speed, efficiency, and an immersive UI.
        </p>
        <button className=" cursor-pointer bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-900  text-white px-6 py-3 rounded-xl font-semibold transition">
          Install Extension
        </button>
      </div>

      {/* Features Section */}
      <div className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {[
          { title: "Fast & Responsive", desc: "Optimized for performance and mobile-friendly." },
          { title: "Modern UI", desc: "Sleek design with smooth animations and interactions." },
          { title: "Seamless Integration", desc: "Easy to use with your existing setup." },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 border border-gray-700 rounded-xl bg-black/80 text-center hover:bg-gray-900 transition"
          >
            <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
