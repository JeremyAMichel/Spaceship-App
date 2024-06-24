"use client";

import Background from "@/components/Background";
import MotionDiv from "@/components/MotionDiv";
import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import mobile from "@/assets/destination/background-destination-mobile.jpg";
import desktop from "@/assets/destination/background-destination-desktop.jpg";
import tablet from "@/assets/destination/background-destination-tablet.jpg";
import PageTitle from "@/components/PageTitle";
import { SLIDE_LEFT, SLIDE_RIGHT } from "@/lib/data";
import { usePrevious } from "@mantine/hooks";
import Image from "next/image";

import { planets } from "@/app/destination/utils/utils";

function DestinationPage() {
  const [actual, setActual] = useState(0);

  const previous = usePrevious(actual);
  const planet = useMemo(() => planets[actual], [actual]);
  const variant = useMemo(() => {
    if (previous === undefined) return SLIDE_RIGHT;
    if (actual > previous) return SLIDE_LEFT;
    return SLIDE_RIGHT;
  }, [actual, previous]);

  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />
      <main className="relative z-10 p-6 md:px-24 md:pb-0">
        <PageTitle number={1} title="Pick your destination" />

        <motion.div
          variants={SLIDE_LEFT}
          className="w-fit mx-auto mb-8 md:mx-0 md:-ml-10"
        ></motion.div>

        <div className="grid gap-40 lg:grid-cols-2 lg:pt-12">
          <AnimatePresence>
            <motion.div
              key={planet.name}
              variants={variant}
              className="flex justify-center my-6"
            >
              <Image
                className="w-60 md:w-80 lg:w-[440px] aspect-square"
                src={planet.image}
                alt={`planet ${planet.name}`}
              />
            </motion.div>
          </AnimatePresence>
          <div>
            <div className="flex items-center justify-center text-secondary space-x-6 nav-text md:text-[16px] lg:justify-start">
              {planets.map(({ name }, index) => {
                return (
                  <div
                    key={name}
                    onClick={() => setActual(index)}
                    className={`relative py-2 border-b-2 border-transparent cursor-pointer transition [&:not(.active)]:hover:border-current [&.active]:text-white
                        ${actual === index && "active"}
                    `}
                  >
                    {name}
                    {planet.name === name && (
                      <motion.span
                        layoutId="planetUnderline"
                        className="absolute bottom-0 left-0 w-full h-1 bg-white"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-secondary text-center lg:text-left">
              <h3 className="mt-5 uppercase text-white lg:text-[100px]">
                {planets[actual].name}
              </h3>
              <p className="leading-relaxed lg:text-[18px]">
                {" "}
                {planets[actual].description}{" "}
              </p>
              <hr className="my-8 border-secondary/25" />

              <div className="grid md:grid-cols-2 gap-8">
                <div className="w-fit mx-auto uppercase lg:mx-0">
                  <span className="block sub-2">avg. distance</span>
                  <span className="block sub-1 text-white">
                    {" "}
                    {planets[actual].distance}{" "}
                  </span>
                </div>
                <div className="w-fit mx-auto uppercase lg:mx-0">
                  <span className="block sub-2">est. travel time</span>
                  <span className="block sub-1 text-white">
                    {" "}
                    {planets[actual].time}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MotionDiv>
  );
}

export default DestinationPage;
