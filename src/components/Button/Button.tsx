import type { Transition } from "motion";
import { motion, type MotionProps } from "motion/react";
import type { ReactNode } from "react";

function Button({
  transition,
  children,
  ...props
}: {
  transition: Transition;
  children: ReactNode;
} & MotionProps) {
  return (
    <motion.button
      transition={transition}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-2xl font-bold text-background bg-primary px-4 py-2 rounded-lg hover:shadow-lg flex-1"
      {...props}>
      {children}
    </motion.button>
  );
}

export default Button;
