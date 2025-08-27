import HowItWorksCard from "./how-it-works-card";

const Features = () => {
  const HowItWorksCardData = [
    {
      heading: "h1",
      video:
        "https://cdn.pixabay.com/video/2016/06/27/3581-172488192_large.mp4",
      desc: "   Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      heading: "h2",
      video:
        "https://cdn.pixabay.com/video/2016/06/27/3581-172488192_large.mp4",
      desc: "   Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      heading: "h3",
      video:
        "https://cdn.pixabay.com/video/2016/06/27/3581-172488192_large.mp4",
      desc: "   Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];
  return (
    <div className="container mx-40 my-46 w-9/12">
      <div className="flex justify-center flex-col items-center text-6xl font-bold">
        <h1>
          How the <span className="dts">DragThatShit</span>
        </h1>
        <h1>Extenstion works</h1>
      </div>

      <div className="flex justify-between mt-20">
      {HowItWorksCardData.map((data) => (
        <HowItWorksCard {...data} />
      ))}
      </div>
    </div>
  );
};

export default Features;
