'use client';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";
import {GlobeDemo} from "./GridGlobe";
// import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), {ssr: false,}); // Ensure it only runs in the browser

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  type,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  type?: string;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("c.hsiang.su@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "z-10 row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1]",
        "group/bento hover:shadow-xl transition duration-200 shadow-input",
        "flex flex-col justify-between space-y-4 dark:border-white/[0.2] ",
        className
      )}
      style={{
        backgroundColor: "rgb(4,7,29)",
        background:
          "linear-gradient(90deg, rgba(27, 5, 38) 0%, rgb(49 10 66) 100%)",
      }}
    >
        <div className={`${id===6 && 'flex justify-center'} h-full`}>
            <div className="absolute w-full h-full">
                { img && (
                    <Image 
                        src={img}
                        alt={img}
                        width={500}
                        height={500}
                        className={cn(imgClassName, 'object-center object-cover')}
                    />
                )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
                {spareImg &&(
                    <Image 
                    src={spareImg}
                    alt={spareImg}
                    width={500}
                    height={500}
                    className="object-center object-cover w-full h-full"
                />
                )}
            </div>
            {type==="connect" && (
                <BackgroundGradientAnimation>
                    {/* <div
                        className ="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"
                    /> */}
                </BackgroundGradientAnimation>
            )}
            <div className={cn(titleClassName, 'transition duration-200 group-hover/bento:translate-x-2',
                'relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
                <div className="font-sans px-4 font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                    {description}
                </div>
                <div className="font-sans px-4 font-bold text-lg lg:text-3xl text-[#c1c2d3] max-x-96 z-10">
                    {title}
                </div>
                { type === "time" && <GlobeDemo />}
                { type === "tech" && (
                  <div className="flex absolute gap-1 lg:gap-5 w-fit -right-3 lg:-right-2">
                      <div className="flex flex-col gap-3 lg:gap-5">
                        {['React.js', 'Next.js', 'TypeScript', 'GitHub'].map((items)=>(
                            <span className="rounded-lg text-center py-2 lg:py-4 lg:px-3 bg-[#10132E] opacity-50 lg:opacity-100 text-gray-500 text-xs lg:text-base"
                            key={items}>{items}</span>
                        ))}
                        {/* <span className="rounded-lg text-center py-2 lg:py-4 lg:px-3 bg-[#10132E]  text-gray-500">GitHub</span> */}
                      </div>
                      <div className="flex flex-col gap-3 lg:gap-5">
                      {/* <span className="rounded-lg text-center py-2 lg:py-4 lg:px-3 bg-[#10132E] text-gray-500">Photoshop</span> */}
                        {['TailwindCSS', 'Node.js', 'Motion', 'Photoshop'].map((items)=>(
                            <span className="rounded-lg text-center py-2 lg:py-4 lg:px-3 bg-[#10132E] opacity-50 lg:opacity-100 text-gray-500 text-xs lg:text-base"
                            key={items}>{items}</span>
                        ))}
                      </div>
                  </div>
                )}
                {type==="connect" && (
                  <div className="mt-5 relative">
                    <div className="absolute -bottom-5 right-0">
                      <Lottie options={defaultOptions} height={200} width={400} />
                    </div>
                    <MagicButton 
                      title={ copied ? 'Email Copied' : 'Copy my Email'}
                      icon = {<IoCopyOutline />}
                      position="left"
                      otherClasses="!bg-[#161a31]"
                      handleClick={handleCopy}
                    />
                  </div>
                )}
            </div>
        </div>
    </div>
  );
};
