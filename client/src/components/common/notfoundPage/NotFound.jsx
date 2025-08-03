import React from "react";
import FuzzyText from "./FuzzyText";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
    const location = useLocation();
    console.log(location.pathname);
  return (
    <div className="flex flex-col items-center justify-center mt-30 gap-10">
        
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
        404
      </FuzzyText>

    
    <FuzzyText fontSize="8rem"  baseIntensity={0.2} hoverIntensity={0.26} enableHover={true}>
        not found
      </FuzzyText>

      <h1 className="text-xl">The Page <span className="text-blue-400">{location.pathname}</span> is not available. Go to <Link className="cursor-pointer text-blue-400" to="/">Home Page</Link></h1>
    </div>
     
 
  );
};

export default NotFound;
