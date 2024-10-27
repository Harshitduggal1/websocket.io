"use client";
import { Button } from "@/components/Button";
import { StarsImage, GridLines } from "@/assets";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import useRelativeMousePosition from "@/hooks/useRelativeMousePosition";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-20 md:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        <motion.div
          ref={borderedDivRef}
          animate={{
            backgroundPositionX: StarsImage.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${StarsImage.src})`,
          }}
          className="relative border-white/20 bg-white/5 bg-opacity-10 shadow-2xl backdrop-blur-lg py-24 border rounded-3xl transform transition-all duration-300 overflow-hidden group hover:scale-[1.02]"
        >
          <div
            className="absolute inset-0 bg-blend-overlay bg-gradient-to-br from-purple-600/30 to-blue-600/30 [mask-image:radial-gradient(60%_60%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${GridLines.src})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-blend-overlay bg-gradient-to-tr from-indigo-600/40 to-fuchsia-600/40 opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${GridLines.src})`,
            }}
          ></motion.div>
          <div className="relative z-10">
            <h2 className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mx-auto max-w-4xl font-extrabold text-5xl text-center text-transparent md:text-7xl leading-tight tracking-tight">
              Unleash the Power of websocket.dev: Lightning-Fast Real-Time Communication
            </h2>
            <p className="mx-auto mt-8 px-5 max-w-2xl font-light text-center text-white/80 text-xl md:text-2xl tracking-wide">
              Experience unparalleled speed and efficiency with our cutting-edge websocket technology.
            </p>
            <div className="flex justify-center mt-12">
              <Button classname="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Join the Revolution⚡️

              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
