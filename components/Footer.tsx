import React from 'react'
import footerImg from "@/public/footer-grid.svg";
import Image from 'next/image';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow, FaFileDownload } from 'react-icons/fa';
import { socialMedia } from '@/data';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className='w-full pt-20 pb-20 sm:px-10 px-5'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <Image
                src={footerImg}
                alt="footer background Image"
            />
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[65vw]'>
                Looking for a
                <span className='text-purple-300'> passionate frontend developer </span> 
                to join your team? 
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                I&apos;m ready to contribute and grow with your team
                </p>
            <a href="mailto:c.hsiang.su@gmail.com" target="_blank">
                <MagicButton 
                    title="let's connect"
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
            <Link href="/Chi_Su_Resume.pdf" target="_blank">
                <MagicButton 
                    title="My Resume"
                    icon={<FaFileDownload />}
                    position='right'
                />
            </Link>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © {new Date().getFullYear()} Chi</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile, idx)=>(
                    <Link key={idx}
                        href={profile.url}
                        target="_blank"
                    >
                        <div className='w-10 h-10 flex justify-center items-center
                        bg-gray-900 bg-opacity-75 border border-gray-800 rounded-lg mt-5 md:mt-0
                        backdrop-blur-lg saturate-180 hover:bg-gray-700'>
                            <Image
                                src={profile.img}
                                alt={profile.img}
                                width={20}
                                height={20}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer