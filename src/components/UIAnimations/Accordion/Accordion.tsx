import { motion, type MotionProps } from "motion/react";
import { useState } from "react";

function Accordion({ ...props }: MotionProps) {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <motion.div
        transition={props.transition}
        className="flex flex-col px-4 py-4 border border-primary/70 rounded-lg">
        <button
          onClick={handleToggleOpen}
          className="flex items-center justify-between text-2xl text-primary">
          {props.children as React.ReactNode}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
            transition={props.transition}
            animate={{ rotate: open ? 180 : 0 }}
            className={"fill-primary"}>
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </motion.svg>
        </button>
        <motion.div
          animate={{ height: open ? "auto" : 0 }}
          {...props}
          className="overflow-y-clip text-text-secondary h-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          nesciunt quia, obcaecati nulla porro ipsa. Ea, fuga. Est modi aut
          incidunt ipsam, esse libero dolorum dignissimos ab harum cupiditate
          dolores blanditiis dolor, laborum autem fugiat velit atque. Non sint
          nemo laboriosam vero fugiat minus, dolorum neque aperiam, obcaecati
          aspernatur debitis.
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Accordion;
