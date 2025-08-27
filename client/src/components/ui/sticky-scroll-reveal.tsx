import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  // gradients aligned to your blue CTA color palette
  const linearGradients = [
    "linear-gradient(to bottom right, #3b82f6, #2563eb)", // blue shades
    "linear-gradient(to bottom right, #06b6d4, #3b82f6)", // cyan → blue
    "linear-gradient(to bottom right, #6366f1, #2563eb)", // indigo → blue
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-2xl bg-white p-10 "
      ref={ref}
    >
      {/* Left side content */}
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-bold text-slate-800 transition"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mt-6 max-w-sm text-lg text-slate-600"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Sticky preview box */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-72 w-96 rounded-2xl p-[3px] shadow-lg lg:block",
          contentClassName,
        )}
      >
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};

