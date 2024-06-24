"use client";

import Image from "next/image";

import mobile from "@/assets/technology/background-technology-mobile.jpg";
import tablet from "@/assets/technology/background-technology-tablet.jpg";
import desktop from "@/assets/technology/background-technology-desktop.jpg";

import Background from "@/components/Background";
import PageTitle from "@/components/PageTitle";
import { useMemo, useState } from "react";
import MotionDiv from "@/components/MotionDiv";
import { FADE } from "@/lib/data";
import { motion } from "framer-motion";

// Technology data
import { technologies } from "@/app/technology/utils/utils";


export default function TechnologyPage() {
  let [actual, setActual] = useState(0);
  const technology = useMemo(() => technologies[actual], [actual]);
  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />
      <main className="relative z-10 w-full mt-10 lg:pl-44">
        <div className="w-fit mx-auto mb-8 md:mx-2">
          <PageTitle number={3} title="Space Launch 101" />
        </div>
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-[35%] lg:min-h-[35vh] ">
            <motion.picture
              key={technology.name}
              variants={FADE}
              className="block"
            >
              <source
                media="(min-width:1024px)"
                srcSet={technology.portrait.src}
              />
              <Image
                src={technology.landscape}
                className="object-cover w-full h-auto"
                alt="Background Image"
              />
            </motion.picture>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-14 lg:flex-row lg:grow lg:mt-0">
            <div className="w-fit flex gap-4 mb-6 md:mb-11 lg:flex-col lg:mb-0 lg:gap-8">
              {technologies.map(({ name }, index) => (
                <div
                  onClick={() => setActual(index)}
                  key={name}
                  className={`w-10 md:w-14 aspect-square flex items-center justify-center text-white border rounded-full border-white/20 transition cursor-pointer
                                    [&.active]:border-transparent [&.active]:bg-white [&.active]:text-primary [&:not(.active)]:hover:border-white ${
                                      technology.name === name && "active"
                                    }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="text-secondary text-center px-6 md:max-w-lg md:mx-auto lg:text-left lg:max-w-xl">
              <span className="block nav-text uppercase mb-2 text-[14px] md:text-[16px] ">
                The Terminology ...
              </span>
              <h3 className="uppercase mb-4 text-white text-[24px] md:text-[40px] lg:text-[56px] ">
                {" "}
                {technology.name}{" "}
              </h3>
              <p className="leading-relaxed lg:leading-loose lg:text-[18px]">
                {" "}
                {technology.description}{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </MotionDiv>
  );
}
