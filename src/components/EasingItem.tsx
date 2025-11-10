import clsx from "clsx";
import { motion, type AnimationGeneratorType, type Easing } from "motion/react";
import React from "react";

const DURATION = 1.5;

function EasingItem({
  type,
  ease,
}: {
  type?: AnimationGeneratorType;
  ease?: Easing;
}) {
  const [moved, setMoved] = React.useState(false);
  const timer = React.useRef<number | null>(null);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      setMoved((prev) => !prev);
    }, DURATION * 1000 + 500);
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);

  return (
    <div>
      <h3 className="text-lg text-text-secondary">
        {(type as string) || (ease as string)}
      </h3>
      <motion.div layout className="relative flex  items-center py-5">
        <div className="h-1 w-full bg-primary rounded-full" />
        <motion.div
          layoutId={`circle-${(type as string) || (ease as string)}`}
          className={clsx(
            "absolute h-10 w-10 bg-accent rounded-full shrink-0 shadow-md",
            moved ? "right-0" : "left-0"
          )}
          transition={(() => {
            if (type === "spring") {
              return { type, stiffness: 100, damping: 10 };
            } else {
              return { duration: DURATION, ease };
            }
          })()}
        />
      </motion.div>
    </div>
  );
}

export default EasingItem;
