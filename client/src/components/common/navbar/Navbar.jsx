import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return ()=>{
        window.removeEventListener('scroll', handleScroll);
    }
  },[])
  return (
    <div className={`fixed top-0 w-full z-50 shadow-md ${isScrolled?"bg-black":"bg-black"} shadow-2xl`}>
      <div className="flex items-center justify-between px-8 py-4 " >
        {/* Logo */}
        <div className="font-bold text-3xl flex items-center">
          <Link to="/">
            <p className="cursor-pointer">
              DragThat
              <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                Sh*t
              </span>
            </p>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 text-lg font-semibold items-center">
          <Link
            to="/about"
            className="cursor-pointer hover:text-blue-500 transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/dashboard"
            className="cursor-pointer hover:text-blue-500 transition-all duration-300"
          >
            Dashboard
          </Link>
        </div>

        {/* SignUp Button */}
        <div className="text-lg font-semibold flex items-center">
          <p className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-1 rounded-lg text-white shadow-md hover:scale-105 transition-all duration-300">
            SignUp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
