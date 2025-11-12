import type { Transition } from "motion";

const TRANSITIONS: Transition[] = [
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
  { type: "spring", stiffness: 300, damping: 20 },
] as const;

export default TRANSITIONS;
