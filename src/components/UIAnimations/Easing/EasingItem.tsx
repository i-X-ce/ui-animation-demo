import clsx from "clsx";
import { motion, type AnimationGeneratorType, type Easing } from "motion/react";
import React from "react";
import ItemNameChip from "../../ItemNameChip";

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
    setMoved(true);
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
      <ItemNameChip>{(type as string) || (ease as string)}</ItemNameChip>
      <motion.div layout className="relative flex items-center py-5 mt-2">
        <div className="h-1 w-full bg-primary rounded-full" />
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            layoutId={`circle-${(type as string) || (ease as string)}-${i}`}
            transition={{
              ...(() => {
                if (type === "spring") {
                  return { type, stiffness: 100, damping: 10 };
                } else {
                  return { duration: DURATION, ease };
                }
              })(),
              delay: i * 0.1,
            }}
            className={clsx(
              "absolute h-10 w-10 bg-accent rounded-full shrink-0 shadow-md",
              moved ? "right-8" : "left-8"
            )}
            style={{ opacity: 1 - i * 0.3, zIndex: 10 - i }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default EasingItem;
