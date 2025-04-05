'use client';
import React, {useRef, useEffect} from 'react';
import {BentoGrid, BentoGridItem} from './ui/BentoGrid';
import {gridItems} from '@/data';

import Lenis from "lenis";
import {useTransform, useScroll} from "motion/react";
import {motion} from 'framer-motion';



const Grid = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    })
    const posY = useTransform(scrollYProgress, [0, 1], [0, 1000]);

    return (
        <section ref={containerRef} id="about" className="flex sm:px-10 px-5">
            <div className="section-container">
                <BentoGrid>
                    {gridItems.map(({
                                        id,
                                        type,
                                        title,
                                        description,
                                        className,
                                        imgClassName,
                                        titleClassName,
                                        img,
                                        spareImg
                                    }, i) => (

                            <BentoGridItem
                                id={id}
                                type={type}
                                key={i}
                                title={title}
                                description={description}
                                className={className}
                                img={img}
                                imgClassName={imgClassName}
                                titleClassName={titleClassName}
                                spareImg={spareImg}
                            />

                    ))}

                </BentoGrid>
            </div>
        </section>
    )
}

export default Grid