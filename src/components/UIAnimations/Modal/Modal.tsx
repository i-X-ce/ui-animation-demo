import { AnimatePresence, motion, type MotionProps } from "motion/react";
import Button from "../Button/Button";
import { useState } from "react";

function Modal({ ...props }: MotionProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>{props.children as string}</Button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed bg-black inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={props.transition}
            />
            <div
              className="fixed flex items-center justify-center inset-0"
              onClick={handleClose}>
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                {...props}
                className="relative bg-white max-w-[700px] max-h-[80%] p-6 rounded-lg shadow-lg overflow-y-auto">
                <h3 className="text-2xl text-primary font-bold pb-4">
                  {props.children as string}
                </h3>
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 active:scale-90 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                    className="fill-text-secondary">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </button>
                <p className="text-text-primary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae veniam obcaecati dicta illum? Obcaecati vero, labore
                  modi officia dicta reprehenderit quasi blanditiis illum quas
                  aspernatur non eveniet voluptatibus ab dignissimos cupiditate
                  porro corporis. Dolorum ut accusamus modi aliquid
                  voluptatibus, ea ipsum beatae, officiis accusantium quibusdam
                  delectus ullam nobis earum! Sunt illo nam similique odio
                  itaque dolor totam dicta debitis velit suscipit, architecto
                  dolore, quidem numquam. Esse magni officiis ex ratione
                  provident a error asperiores ipsa quas quis consequuntur
                  voluptates debitis ducimus corporis blanditiis eius, inventore
                  impedit quisquam, libero repellat ea nostrum quod accusantium
                  optio? Natus repudiandae reiciendis aut odio nostrum?
                </p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Modal;
