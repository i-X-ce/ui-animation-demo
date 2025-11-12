import { motion, type MotionProps } from "motion/react";
import type { HTMLAttributes } from "react";

function Button({ ...props }: HTMLAttributes<HTMLButtonElement> & MotionProps) {
  return (
    <motion.button
      transition={props.transition}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-2xl font-bold text-background bg-primary px-4 py-2 rounded-lg hover:shadow-lg flex-1"
      {...props}>
      {props.children}
    </motion.button>
  );
}

export default Button;
