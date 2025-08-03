import { motion } from 'framer-motion';
import GridBack from '../common/grid-back';

const steps = [
  {
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Drag & Drop Your Resume",
    description: "Simply drag and drop your resume into our extension to begin.",
    reverse: false
  },
  {
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Securely Stored",
    description: "Your resume will be securely stored in our database for easy access.",
    reverse: true
  },
  {
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Easily Access Anytime",
    description: "Drag your resume from the extension and drop it anywhere with ease!",
    reverse: false
  }
];

const HowItWorks = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
        <GridBack/>
      <h2 className="text-6xl font-bold mb-16 relative">How It <span className='bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent'>Works</span> 
        <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2" width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10 C 50 15, 150 5, 198 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </h2>
      <div className="relative grid gap-36 max-w-6xl">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`grid grid-cols-1 md:grid-cols-2 gap-24 items-center ${step.reverse ? 'md:grid-cols-[1fr_1.2fr]' : 'md:grid-cols-[1.2fr_1fr]'}`}
          >
            {!step.reverse && (
              <motion.div 
                className="border-4 border-blue-500 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              </motion.div>
            )}
            <div className="text-left p-6">
              <h3 className="text-5xl font-semibold mb-4">{step.title}</h3>
              <p className="text-lg text-gray-300">{step.description}</p>
            </div>
            {step.reverse && (
              <motion.div 
                className="border-4 border-blue-500 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;