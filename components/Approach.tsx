'use client';
import {useState} from "react";
import { AnimatePresence, motion } from "motion/react";
// import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { Button } from "./ui/MovingBorder";
import type { SVGProps } from "react";


const Approach = () => {
  return (
    <section id="approach" className="w-full py-20">
      <h1 className="heading">
        My
        <span className="text-purple-300"> approach</span>
      </h1>
      <div className="my-20 flex flex-col md:flex-row gap-4 items-center justify-center">
        <Card 
            title="Planning & Strategy" 
            icon={<AceternityIcon order="Phase 1"/>}
            description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
        >
          {/* <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          /> */}
        </Card>
        <Card 
            title="Development & Progress Updates" 
            icon={<AceternityIcon order="Phase 2" />}
            description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
        >
          {/* <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          /> */}
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card 
            title="Development & Launch" 
            icon={<AceternityIcon order="Phase 3" />}
            description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
        >
          {/* <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          /> */}
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  description,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group/canvas-card flex items-center justify-center border-white/[0.1]  max-w-sm w-full mx-auto p-4 min-h-[20rem] lg:h-[35rem] rounded-3xl relative"
    >
      <Icon className="absolute h-9 w-9 -top-3 -left-3 text-white/50" />
      <Icon className="absolute h-9 w-9 -bottom-3 -left-3 text-white/50" />
      <Icon className="absolute h-9 w-9 -top-3 -right-3 text-white/50 " />
      <Icon className="absolute h-9 w-9 -bottom-3 -right-3 text-white/50" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="text-white text-xs opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}:{order:string}) => {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="text-purple-300 border-slate-800 px-4 py-2 text-2xl font-bold"
      >
        {order}
      </Button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: SVGProps<SVGSVGElement> ) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
  
export default Approach;
