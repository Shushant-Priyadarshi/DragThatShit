import React from 'react';
import { motion } from 'framer-motion';

const AboutTheExtension = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white p-6">
      <div className="relative w-full max-w-8xl h-[600px] flex justify-center items-center rounded-2xl overflow-hidden">
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-4 border-transparent p-1 ">
          <div className="w-full h-full bg-black rounded-2xl border-4 border-transparent" style={{
            boxShadow: '0px 0px 20px 4px rgba(0, 183, 255, 0.8) inset, 0px 0px 15px 4px rgba(0, 183, 255, 0.8)'
          }}>
            {/* Demo Image Inside the Frame */}
            <motion.img
              src="https://images.unsplash.com/photo-1548983965-416c1920352e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Manage Your Resume Dashboard"
              className="w-full h-full object-cover rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheExtension;
