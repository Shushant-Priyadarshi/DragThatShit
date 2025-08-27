
type HowItWorksData = {
  heading:string
  video:string,
  desc:string
}
const HowItWorksCard = (data:HowItWorksData) => {

  return (
    <div className="w-72 min-h-72 bg-white rounded-2xl shadow-2xl hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-4">
      
      {/* Heading */}
      <div className="text-sm font-semibold text-gray-800 mb-3">
        {data.heading}
      </div>

      {/* Video */}
      <div className="w-full h-40 overflow-hidden rounded-xl mb-3">
        <video
          src={data.video}
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Description */}
      <div className="text-sm text-gray-600 text-center">
        {data.desc}
      </div>
    </div>
  );
};

export default HowItWorksCard;
