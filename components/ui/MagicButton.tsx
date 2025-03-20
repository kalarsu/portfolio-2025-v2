import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  position: string;
  icon: React.ReactNode;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 w-full md:w-60 mt-6 md:mt-10 
    overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2
     focus:ring-slate-400 focus:ring-offset-2 
     focus:ring-offset-slate-50" onClick={handleClick}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
