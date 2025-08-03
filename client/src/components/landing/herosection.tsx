
import InfiniteMenu from "../../blocks/Components/InfiniteMenu/InfiniteMenu";
import GridBack from "../common/grid-back";
import { motion } from "framer-motion";

const items = [
  {
    image: "https://picsum.photos/300/300?grayscale",
    link: "https://google.com/",
    title: "DragThatShit",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/400/400?grayscale",
    link: "https://google.com/",
    title: "DragThatShit",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/500/500?grayscale",
    link: "https://google.com/",
    title: "DragThatShit",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/600/600?grayscale",
    link: "https://google.com/",
    title: "DragThatShit",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/300/300?grayscale",
    link: "https://google.com/",
    title: "DragThatShit",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/400/400?grayscale",
    link: "https://google.com/",
    title: "DragThatShit",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/500/500?grayscale",
    link: "https://google.com/",
    title: "DragThatShit",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/600/600?grayscale",
    link: "https://google.com/",
    title: "DragThatShit",
    description: "This is pretty cool, right?",
  },
];

const Landing = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Grid Effect */}
     
    <GridBack/>

      {/* Animated Heading */}
      <motion.h1
        className="text-6xl font-bold mt-16 mb-8 relative z-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
          DragThatSh*t</span>
          <svg className="absolute -bottom-4 right-1 transform -translate-x-1/2" width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 20 C 50 15, 150 5, 600 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.h1>
      
      <motion.p
        className="text-2xl font-semibold text-gray-300 mb-10 relative z-10 text-center max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        All your <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Resumes</span> now just one click away.
        {/* <button className=" mt-5 text-md cursor-pointer bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-900  text-white px-3 py-1 rounded-xl font-semibold transition">
          Install Extension
        </button> */}
      </motion.p>

      {/* "Hollow Hole" Effect - Centered InfiniteMenu */}

      <div className="relative mb-10 w-full h-[80vh] flex items-center justify-center z-10  rounded-t-[200px] overflow-hidden ">
      <div style={{ height: '600px', position: 'relative' }}>
 <InfiniteMenu items={items}/>
</div>
</div>




    </div>
  );
};

export default Landing;
