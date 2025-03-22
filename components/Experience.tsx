import React from 'react'
import { Button } from './ui/MovingBorder'
import { workExperience } from '@/data'
// import Image from 'next/image'

const Experience = () => {
  return (
   <section id="experiences" className="py-20">
         <h1 className="heading">
           My 
           <span className="text-purple-300"> work experiences</span>
         </h1>
         <div className="w-full mt-10 grid lg:grid-cols-4 grid-cols-1 gap-10">
               {workExperience.map((card,idx)=>(
                    <Button key={idx} 
                        duration = {Math.floor(Math.random() * 10000) + 10000}
                        borderRadius = "1.75rem"
                        className="flex-1 text-white">
                        
                        <div className='flex lg:flex-row flex-col lg:items-center
                        p-3 md:p-5 lg:p-10 py-6">'>
                            {/* <Image
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                width={16}
                                height={16}
                                className='w-15 md:w-20 lg:w-32'
                            /> */}
                            <div className='text-xs text-gray-400 justify-center pr-5 mb-5'>
                                {card.period}
                            </div>
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {card.title}
                                </h1>
                                <p className='text-start text-gray-300 font-extralight mt-3'>
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
               ))}
               
         </div>
       </section>
  )
}

export default Experience