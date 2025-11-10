import React from "react";
import { VIEW_STRUCTURE } from "../consts/VIEW";
import SideBarItem from "./SideBarItem";
import { motion } from "motion/react";

function SideBar() {
  return (
    <nav className="relative w-[250px] max-h-dvh bg-primary px-2 overflow-auto">
      <h2 className="sticky top-0 border-b border-background/50 text-2xl p-4 font-bold text-background mb-2 bg-primary z-20">
        <span className="text-accent">UI</span> Animation
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
    </nav>
  );
}

export default SideBar;
