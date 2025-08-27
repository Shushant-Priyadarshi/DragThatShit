import Profile from "@/components/page_components/dashboard_page/profile";
import Resume from "@/components/page_components/dashboard_page/resume";
import ResumeCard from "@/components/page_components/dashboard_page/resume-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex justify-center   min-h-screen bg-black">
      <div className="w-11/12 md:w-9/12   shadow-lg p-8   ">
        <div className="flex justify-center">
          <Profile />
        </div>
        <div className="">
          <Resume />
        </div>
  

      <Link to="/">
        <Button
          variant="outline"
          className="absolute top-18 left-1/12 ml-20 cursor-pointer"
        >
          Home
        </Button>
      </Link>

      <div className="text-white flex justify-center">
        <ResumeCard/>
      </div>


    
    </div>


    </div>
  );
}
