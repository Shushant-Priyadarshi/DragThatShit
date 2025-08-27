import AddResumeModal from "./add-resume";
import BuySlots from "./buy-slots";
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  return (
    <div className="text-white mt-20">
      <div className="flex justify-between  items-center">
        <div className="font-semibold text-2xl py-1 ">
          Your <span className="dts">Resumes</span>
        </div>
        <div className="flex gap-10 items-center">
          <AddResumeModal />
          <BuySlots />
        </div>
      </div>
      <Separator className="my-2 bg-blue-500 opacity-40" />
    </div>
  );
};

export default Resume;
