import React from "react";
import ScrollVelocity from "./ScrollVelocity";
const BrandBelt = () => {
  return (
   <div>
      
            <ScrollVelocity
        texts={[" DragThatSh*t ", " UploadThatSh*t "]}
        velocity={100}
        className="custom-scroll-text"
        numCopies={6}
      />
    
      
    </div>
  );
};

export default BrandBelt;
