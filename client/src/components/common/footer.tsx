
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Brand Name */}
        <div className="text-xl font-bold">DragThat
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Sh*t</span></div>
        
        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-300 text-sm">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex gap-4 text-gray-400 text-lg">
          <a title="twitter" href="https://x.com/ceutical_"   target="__blank" className="hover:text-white"><FaTwitter /></a>
          <a title="insta" href="#" className="hover:text-white"  target="__blank"><FaInstagram /></a>
          <a title="linkedin" href="https://www.linkedin.com/in/shushant-priyadarshi/"  target="__blank" className="hover:text-white"><FaLinkedin /></a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-4">©{new Date().getFullYear()} DragThatSh*t . Made By <a href="https://www.linkedin.com/in/shushant-priyadarshi/" target="__blank" className="underline-blue-400 text-blue-500 font-semibold">This Guy</a>.</div>
    </footer>
  );
};

export default Footer;
