'use client';
import React, {useEffect, useRef, useState} from "react";
import {useScroll, useTransform} from "motion/react";
import {motion} from "framer-motion";
import Lenis from "lenis";
// import {aboutMeImages} from "@/data/index";
import Image from "next/legacy/image";
import {MotionValue} from "motion";

const About = () => {
    const container = useRef(null);
    const [dimension, setDimension] = useState({width:0, height:0});

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const { height } = dimension;
    const posY1 = useTransform(scrollYProgress, [0,1], [0, height * 0.55]);
    const posY2 = useTransform(scrollYProgress, [0,1], [0, height * 0.65]);
    const posY3 = useTransform(scrollYProgress, [0,1], [0, height * 0.35]);
    const posY4 = useTransform(scrollYProgress, [0,1], [0, height * 0.2]);

    const images = [
        "/me/1.png",
        "/me/2.png",
        "/me/3.png",
        "/me/4.png",
        "/me/5.png",
        "/me/6.png",
        "/me/7.png",
        "/me/8.png",
        "/me/9.png",
    ];

    //using Lenis for smooth scroll
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis();
        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const resize = () => {
            setDimension({width: window.innerWidth, height: window.innerHeight})
        }

        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, []);

    return (
        <section ref={container} className="about relative flex flex-row gap-3 overflow-hidden bg-[#0e0014] sm:h-full h-[125vh]">
            <Column images={[ images[0], images[1], images[2] ]} y={posY1} />
            <Column images={[ images[3], images[4], images[5] ]} y={posY2} />
            <Column images={[ images[6], images[7], images[8] ]} y={posY3} />
            <Column images={[ images[0], images[1], images[2] ]} y={posY4} />
            <Column images={[ images[0], images[1], images[2] ]} y={posY2} />
        </section>
    )
}
export default About


type ColumnProps = {
    images: string[];
    y: MotionValue<number>;
};

const Column: React.FC<ColumnProps> = ({ images, y }) => {
    return (
        <motion.div className="about-column relative flex flex-col h-full gap-3 max-md:min-w-[250px]" style={{ y }}>
            {images.map((src, index)=>(
                <div key={index} className="img-container">
                    <Image src={src}
                           alt='image'
                           width={250}
                           height={350}
                           className="w-full! h-full!"
                    />
                </div>
            ))}
        </motion.div>
    );
};