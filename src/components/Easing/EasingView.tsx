import EasingItem from "./EasingItem";
import type { AnimationGeneratorType, Easing } from "motion";

function EasingView() {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 ">
        {(
          [
            { ease: "linear" },
            { ease: "easeIn" },
            { ease: "easeOut" },
            { ease: "easeInOut" },
            { ease: "circIn" },
            { ease: "circOut" },
            { ease: "circInOut" },
            { ease: "backIn" },
            { ease: "backOut" },
            { ease: "backInOut" },
            { type: "spring" },
          ] as { ease?: Easing; type?: AnimationGeneratorType }[]
        ).map((v, i) => (
          <EasingItem key={i} {...v} />
        ))}
      </div>
    </div>
  );
}

export default EasingView;
