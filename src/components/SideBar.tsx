import React from "react";
import { VIEW_STRUCTURE } from "../consts/VIEW";
import SideBarItem from "./SideBarItem";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

function SideBar() {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.nav
          key="sidebar"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={clsx(
            "fixed md:sticky top-0 w-[250px] max-h-dvh bg-primary px-2 overflow-auto pb-4 shrink-0 min-h-dvh z-200"
          )}>
          <h2 className="sticky top-0 border-b border-background/50 text-2xl p-4 font-bold text-background mb-2 bg-primary z-20">
            <button
              onClick={handleClose}
              className="flex items-center gap-2 w-full">
              <span className="text-accent">UI</span> Animation
            </button>
          </h2>
          <motion.ul layout>
            {Object.entries(VIEW_STRUCTURE).map(([parent, children]) => (
              <React.Fragment key={parent}>
                <SideBarItem itemType="parent">{parent}</SideBarItem>
                {children.map((child) => (
                  <SideBarItem key={child} itemType="child">
                    {child}
                  </SideBarItem>
                ))}
              </React.Fragment>
            ))}
          </motion.ul>
        </motion.nav>
      ) : (
        <motion.button
          key="open-button"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpen}
          className="fixed top-4 left-4 p-2 bg-primary rounded-full shadow-lg z-200 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFF">
            <path d="M360-120v-720h80v720h-80Zm160-160v-400l200 200-200 200Z" />
          </svg>
        </motion.button>
      )}
      {open && (
        <motion.div
          key="drop"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed md:hidden top-0 left-0 w-screen h-screen bg-black z-100"
        />
      )}
    </AnimatePresence>
  );
}

export default SideBar;
