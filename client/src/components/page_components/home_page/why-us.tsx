import { StickyScroll } from "../../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Drag & Drop Simplicity",
    description:
      "No complex dashboards, no endless steps. Just drag your resume wherever you need it. Our platform is designed to be fast, effortless, and frustration-free — so you can focus on opportunities, not uploads.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Drag & Drop
      </div>
    ),
  },
  {
    title: "Secure by Default",
    description:
      "Your resume contains sensitive information — we keep it safe. With strong encryption and reliable infrastructure, your data stays protected and only you control where it goes.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="resume security demo"
        />
      </div>
    ),
  },
    {
    title: "Always Ready to Share",
    description:
      "No more digging through folders or emailing yourself attachments. Your resume is always one drag away — ready to share with recruiters, clients, or colleagues instantly.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Instantly Share
      </div>
    ),
  },
  {
    title: "One Slot, Unlimited Freedom",
    description:
      "Start for free with a single resume slot. Keep it updated, drag it anywhere, anytime. When you need more, simply add new slots for just $3 each — no hidden costs, no confusing plans.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Flexible Slots
      </div>
    ),
  },

];

export function WhyUs() {
  return (
    <section className="w-full py-4" id="feature">
     <div className="flex justify-center flex-col items-center text-6xl font-bold mb-10">
      <h1>Why We <span className="dts">Drag?</span></h1>
      </div>
   <StickyScroll content={content} />

    </section>
  );
}
