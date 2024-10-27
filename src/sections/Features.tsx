"use client";
import { ProductImage } from "@/assets";
import { featuresTabs } from "@/data/data";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { useState } from "react";
import FeatureTab from "@/components/FeatureTab";

//added ui
export const Features = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const backgroundPositionX = useMotionValue(
    featuresTabs[0].backgroundPositionX,
  );
  const backgroundPositionY = useMotionValue(
    featuresTabs[0].backgroundPositionY,
  );
  const backgroundSizeX = useMotionValue(featuresTabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (tabIndex: number) => {
    setCurrentTab(tabIndex);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, featuresTabs[tabIndex].backgroundSizeX],
      animateOptions,
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), featuresTabs[tabIndex].backgroundPositionX],
      animateOptions,
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), featuresTabs[tabIndex].backgroundPositionY],
      animateOptions,
    );
  };

  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-fuchsia-900 py-20 md:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        <h2 className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-extrabold text-6xl text-center text-transparent md:text-7xl tracking-tight">
          Unleash Blazing Fast Websockets
        </h2>
        <p className="mx-auto mt-8 max-w-3xl font-light text-center text-white/80 text-xl md:text-2xl tracking-wide">
          From startups to enterprises, websocket.dev revolutionizes real-time communication with lightning-fast, ultra-modern technology.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {featuresTabs.map((tab, tabIndex) => (
            <FeatureTab
              key={tabIndex}
              {...tab}
              onClick={() => handleSelectTab(tabIndex)}
              selected={currentTab === tabIndex}
              className="transform hover:scale-105 bg-gradient-to-br from-indigo-600/30 hover:from-indigo-500/50 to-fuchsia-600/30 hover:to-fuchsia-500/50 shadow-lg hover:shadow-2xl backdrop-blur-lg rounded-xl transition-all duration-300"
            />
          ))}
        </div>
        <div className="border-white/20 bg-gradient-to-br from-indigo-900/50 to-fuchsia-900/50 backdrop-blur-xl mt-8 p-3 border rounded-2xl">
          <motion.div
            className="border-white/30 bg-cover border rounded-xl overflow-hidden aspect-video"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${ProductImage.src})`,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex justify-center items-center bg-gradient-to-tr from-indigo-600/40 to-fuchsia-600/40 opacity-0 hover:opacity-100 w-full h-full transition-opacity duration-300">
              <span className="font-bold text-3xl text-white tracking-wider">Explore websocket.dev</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
