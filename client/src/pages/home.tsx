import Footer from "@/components/page_components/common/footer";
import { NavbarDemo } from "@/components/page_components/common/navbar";
import { DownloadCTA } from "@/components/page_components/home_page/download-cta";
import Features from "@/components/page_components/home_page/features";

import IntroVideo from "@/components/page_components/home_page/intro-video";
import Pricing from "@/components/page_components/home_page/pricing";
import { WhyUs } from "@/components/page_components/home_page/why-us";

const Home = () => {
  return (
    <div className="">
      <NavbarDemo />
      <IntroVideo />
      <Features />
      <WhyUs />
      <Pricing />

      {/* CTA */}
      <div className="my-20 flex  justify-center">
        <div className="flex justify-between items-center font-semibold gap-36 text-center ">
          <h2 className=" md:text-xl bg-gray-100 shadow-sm px-8 py-4 rounded-2xl cursor-pointer text-black text-sm font-semibold ">
            Get Started Now
          </h2>
          <DownloadCTA />
        </div>
      </div>



      <Footer />
    </div>
  );
};

export default Home;
