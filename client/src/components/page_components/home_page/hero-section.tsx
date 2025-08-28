import { DownloadCTA } from "../home_page/download-cta";
import { CircleArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="container w-9/12 mx-auto">
      <div className="container mx-auto p-8 pt-28">
        <div className="text-center my-7">
          <span className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow">
            {/* The Pinging Dot */}
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {/* Your Text */}
            Backed By Sydney Sweeney
          </span>
        </div>
        <h1 className="mb-4 text-center text-7xl font-bold">
          <div className="relative">
            <div>
              Never Find Your{" "}
              <span className="dts shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                Resumes
              </span>{" "}
              ,
            </div>

            <span className=" mb-10 ">DragThatShit</span>
          </div>
        </h1>
        <div className="text-center mt-10 mb-8 font-semibold flex items-center justify-center gap-10">
          <div>
            <DownloadCTA />
          </div>
          <div className="bg-gray-100 shadow-sm px-8 py-5 rounded-2xl cursor-pointer text-black text-sm font-semibold ">
            SignUp
          </div>
        </div>

        <p className="mb-10 text-center text-md text-zinc-500">
          Upload once, drag anywhere. Apply faster without digging through
          folders.
        </p>

        <div className="flex justify-center">
          <CircleArrowDown className="text-blue-700 animate-bounce " />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
