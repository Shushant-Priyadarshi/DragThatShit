
const IntroVideo = () => {
  return (
    <div className="container w-11/12 lg:w-9/12 mx-auto mt-30">
      
      {/* Heading */}
      <div className="flex justify-center mb-24 font-semibold text-center">
        <h1 className="text-4xl md:text-5xl leading-tight">
          See Us <span className="text-blue-600">Drag</span> Your Resumes
        </h1>
      </div>

      {/* Video Wrapper with Gradient Border */}
      <div className="p-[4px] rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 shadow-2xl">
        <div className="bg-black w-full aspect-video rounded-2xl overflow-hidden">
          <video
            src="https://media.istockphoto.com/id/2127771235/video/copacabana-neighborhood.mp4?s=mp4-640x640-is&k=20&c=Oa-nu36c3HMk8h05cp78O1bLUWySFWLk-bqElYQN2a0="
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          ></video>
        </div>
      </div>


    </div>
  )
}

export default IntroVideo
