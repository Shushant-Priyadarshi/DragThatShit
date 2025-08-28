"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

type PreviewLinkProps = {
  children: React.ReactNode;
  link: string; // URL to go to
  imagelink: string; // Image to show on hover
  video?: boolean;
  className?: string;
  width?: number;
  height?: number;
  container?: React.RefObject<HTMLElement>;
};

export const PreviewLink = ({
  children,
  link,
  imagelink,
  video = false,
  className,
  width = 200,
  height = 125,
  container
}: PreviewLinkProps) => {
  const [isOpen, setOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted ? (
        <div className="hidden z-10">
          {video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              src={imagelink}
              width={width}
              height={height}
            />
          ) : (
            <img
              src={imagelink}
              width={width}
              height={height}
              alt="hidden image"
            />
          )}
        </div>
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => setOpen(open)}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn("cursor-pointer text-black dark:text-white", className)}
          asChild
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
          container={container?.current}
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 20 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl"
                style={{ x: translateX }}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block z-10 p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                  style={{ fontSize: 0 }}
                >
                  {video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={imagelink}
                      width={width}
                      height={height}
                      className="rounded-lg "
                    />
                  ) : (
                    <img
                      src={imagelink}
                      width={width}
                      height={height}
                      className="rounded-lg"
                      alt="preview"
                    />
                  )}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};
