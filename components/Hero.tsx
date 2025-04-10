'use client';

import {TextGenerateEffect} from "./ui/TextGenerateEffect";
import {Spotlight} from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa";

const Hero = () => {
    return (
        <section id="hero" className="flex">
            <div className="section-container">
            <div className="section-container pb-20 pt-36 md:h-dvh scroll-mt-20 md:scroll-mt-24">
                <div>
                    <Spotlight
                        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                        fill="white"
                    />
                    <Spotlight className="top-10 left-200 h-[80vh] w-[50vw]" fill="purple"/>
                    <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
                </div>
                <div
                    className="
              h-dvh w-full dark:bg-black-100
              absolute top-0 left-0 flex items-center justify-center inset-0
              [background-size:60px_60px]
              [background-image:linear-gradient(to_right,#e4e4e709_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e709_1px,transparent_1px)]
              dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]
              "
                />
                {/* Radial gradient for the container to give a faded look
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div> */}
                <div className="flex justify-center relative my-20 z-10">
                    <div
                        className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <h2 className="uppercase tracking-widest text-xs text-center
                 text-blue-100 max-w-80">From Imagination to Interaction — Powered by React & Next.js</h2>
                        <TextGenerateEffect
                            words="Crafting Web Wonders, One Pixel at a Time"
                            className="text-center text-[40px] md:text-5xl lg:text-6xl"
                            filter={false}
                            duration={0.5}
                        />
                        <p className="text-white text-center md:tracking-wider
                text-sm md:text-lg lg:text-xl">Hi, I&apos;m Chi, — a frontend developer in San Francisco who turns ideas
                            into delightful digital adventures.</p>
                        <a href="#projects">
                            <MagicButton
                                title="my recent projects"
                                icon={<FaLocationArrow/>}
                                position="right"
                            />
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </section>

    );
};

export default Hero;
