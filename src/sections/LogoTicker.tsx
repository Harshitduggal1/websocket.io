"use client";
import {
  AcmeLogo,
  ApexLogo,
  CelestialLogo,
  QuantumLogo,
  PulseLogo,
  EchoLogo,
} from "@/assets";
import Particles from "@/components/ui/particles";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  AcmeLogo,
  PulseLogo,
  EchoLogo,
  CelestialLogo,
  ApexLogo,
  QuantumLogo,
];

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-32">
       
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        <div className="flex md:flex-row flex-col items-center gap-10 md:gap-20">
          <div className="flex-1 md:flex-none text-center md:text-left">
            <h2 className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 font-extrabold text-4xl text-transparent md:text-6xl">
              Powering Blazing Fast Websockets
            </h2>
            <p className="font-light text-white/80 text-xl md:text-2xl">
              Trusted by ultra-modern, innovative teams worldwide
            </p>
          </div>
          <div className="[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] flex-1 overflow-hidden">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="relative transform transition-all group hover:scale-110 duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-75 rounded-lg transition-opacity duration-300"></div>
                  <Image
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                    alt="websocket.dev Partner"
                    className="group-hover:brightness-100 brightness-0 w-auto h-12 invert group-hover:invert-0 transition-all duration-300 filter"
                  />
                </div>
              ))}
            </motion.div>
            <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#FFFFFF"
        refresh
      />
     
          </div>
        </div>
      </div>
    </section>
  );
};
//add more from here