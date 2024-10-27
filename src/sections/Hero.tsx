"use client";
import { MenuIcon } from "@/assets";
import { Button } from "@/components/Button";
import Particles from "@/components/ui/particles";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  return (
    <motion.section
      ref={sectionRef}
      className="relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] flex items-center h-[492px] md:h-[800px] overflow-hidden"
      style={{ backgroundPositionY }}
      animate={{
        background: [
          "linear-gradient(to right, #00008B, #4B0082, #8B008B)",
          "linear-gradient(to right, #4B0082, #8B008B, #00008B)",
          "linear-gradient(to right, #8B008B, #00008B, #4B0082)",
        ],
      }}
      transition={{
        background: {
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        },
      }}
    >
       <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#FFFFFF"
        refresh
      />
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,0.5)_15%,rgba(14,0,36,0.5)_78%,transparent)] animate-pulse"></div>
      {/* Start Planet */}
      <div className="top-1/2 absolute size-64 md:size-96 left-1/2 border-white/20 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] bg-purple-500 shadow-[-20px_-20px_50px_rgba(255,255,255,0.5),-20px_-20px_80px_rgba(255,255,255,0.1),0_0_50px_rgba(140,69,255,1)] hover:shadow-[0_0_100px_rgba(140,69,255,1)] border rounded-full transition-all -translate-x-1/2 -translate-y-1/2 duration-500"></div>
      {/* End Planet */}
      {/* Start Ring 1 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="top-1/2 absolute size-[344px] md:size-[580px] left-1/2 border-white opacity-20 hover:opacity-40 border rounded-full transition-opacity -translate-x-1/2 -translate-y-1/2 duration-300"
      >
        <div className="top-1/2 left-0 absolute bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping size-2"></div>
        <div className="top-0 left-1/2 absolute bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse size-2"></div>
        <div className="inline-flex top-1/2 left-full absolute justify-center items-center border-white hover:bg-purple-500/30 border rounded-full transition-colors -translate-x-1/2 -translate-y-1/2 duration-300 size-5">
          <div className="bg-white rounded-full size-2"></div>
        </div>
      </motion.div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="top-1/2 absolute size-[444px] md:size-[780px] left-1/2 border-white/20 hover:border-white/40 border border-dashed rounded-full transition-colors -translate-x-1/2 -translate-y-1/2 duration-300"
      ></motion.div>
      {/* End Ring 2 */}
      {/* Start Ring 3 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="top-1/2 absolute size-[544px] md:size-[980px] left-1/2 border-white opacity-20 hover:opacity-40 border rounded-full transition-opacity -translate-x-1/2 -translate-y-1/2 duration-300"
      >
        <div className="top-1/2 left-0 absolute bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-bounce size-2"></div>
        <div className="top-1/2 left-full absolute bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse size-2"></div>
      </motion.div>
      {/* End Ring 3 */}
      <div className="relative z-10 mt-16 container">
        <h1 className="bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-extrabold text-6xl text-center text-transparent md:text-[120px] md:leading-none tracking-tighter animate-gradient-x">
          websocket.dev
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-light text-center text-lg text-white/80 md:text-2xl leading-relaxed">
          Revolutionize your real-time communication with blazing-fast, ultra-modern websockets. Experience unparalleled speed and efficiency for your next-gen applications.
        </p>
        <div className="flex justify-center mt-8">
        <div className="flex items-center gap-4">
            <Link
              href="https://github.com/harshitduggal1"
              className="relative shadow-lg hover:shadow-xl px-6 py-3 rounded-full font-bold text-lg transform transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 opacity-90 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-indigo-300 relative z-10 bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent transition-all duration-300">
GET STARTED NOW ⚡️


              </span>
            </Link>
            <MenuIcon className="md:hidden w-8 h-8 text-white hover:text-purple-400 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
//add more from here