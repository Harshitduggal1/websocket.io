"use client";
import { testimonials } from "@/data/data";
import { motion } from "framer-motion";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        <h2 className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-extrabold text-6xl text-center text-transparent md:text-7xl tracking-tight">
          Blazing Fast Websockets
        </h2>
        <p className="mx-auto mt-8 max-w-3xl font-light text-center text-white/80 text-xl md:text-2xl tracking-wide">
          Our revolutionary websocket.dev tools have supercharged real-time communication for our clients.
        </p>
        <div className="[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] flex mt-16 overflow-hidden">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-none gap-8 pr-8"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-none border-white/20 hover:border-white/40 bg-gradient-to-br from-indigo-600/30 to-fuchsia-600/30 shadow-xl hover:shadow-2xl backdrop-blur-lg p-8 md:p-12 border rounded-2xl max-w-sm md:max-w-md transform transition-all duration-300 group hover:scale-105"
              >
                <span className="group-hover:text-white font-medium text-white/90 text-xl md:text-2xl tracking-tight transition-colors duration-300">
                  {testimonial.text}
                </span>
                <div className="flex items-center gap-4 mt-8">
                  <div className="relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="group-hover:grayscale-0 group-hover:scale-110 rounded-xl transform transition-all duration-300 grayscale size-14"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-600 group-hover:bg-gradient-to-r font-semibold text-lg text-white transition-all duration-300">
                      {testimonial.name}
                    </span>
                    <span className="group-hover:text-white/80 text-sm text-white/60 transition-colors duration-300">
                      {testimonial.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
