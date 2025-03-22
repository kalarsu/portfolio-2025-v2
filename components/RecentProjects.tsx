import { projects } from '@/data'
import React from 'react'
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from 'react-icons/fa';
import Image from 'next/legacy/image';


const RecentProjects = () => {
  return (
    <section id='projects' className='py-20'>
        <h1 className='heading'>
        A glimpse into some of my <br />
            <span className='text-purple-300'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link})=>(
                <div key={id} className='flex items-center justify-center lg:min-h-[32.5rem] h-[25rem] sm:w-96 w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center
                        sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl
                            bg-[#13162d]'>
                                <Image 
                                    src="/bg.png" 
                                    alt="bg-img"
                                    layout='fill'
                                   className='w-auto h-auto' />
                            </div>
                            <Image 
                                src={img}
                                alt={title}
                                layout='fill'
                                className='z-10 absolute bottom-0 w-auto h-auto'
                            />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                        <p className='lg:text-xl lg:font-normal font-light  text-sm line-clamp-2'>
                            {des}
                        </p>
                        <div className='flex items-center justify-center mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index)=>(
                                    <div key={index} className='border border-white/[0.2]
                                    rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8
                                    justify-center items-cente flex'
                                    style={{ transform: `translateX(-${5 * index * 2}px)` }}
                                    >
                                        <Image className='lg:p-2 p-1'
                                            src={icon}
                                            alt={icon}
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple-300'>
                                    Check Live Site</p>
                                    <FaLocationArrow className='ms-3' color='#cbacf9' />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </section>
  )
}

export default RecentProjects