import clsx from "clsx";
import { motion } from "motion/react";
import React from "react";
import { VIEW_NAME, type ViewType } from "../consts/VIEW";
import { useView } from "../context/viewContext";

function SideBarItem({
  itemType,
  children,
}: {
  itemType: "parent" | "child";
  children: string;
}) {
  const { view, setView } = useView();
  const selected = view === children;
  const value = VIEW_NAME[children as ViewType] || children;

  return (
    <li className={clsx(itemType === "parent" && "mt-2")}>
      <button
        onClick={() => setView(children as ViewType)}
        className={clsx(
          "relative text-background/60 w-full text-left p-2 transition-colors rounded-md ",
          itemType === "parent" && "text-xl",
          itemType === "child" && "text-lg pl-6",
          selected && "font-bold",
          !selected && "hover:bg-text-primary/10 hover:text-background"
        )}>
        {selected && (
          <motion.div
            className="absolute bg-text-primary/20 inset-0 rounded-md shadow-md"
            layoutId="selected"
          />
        )}

        <p
          className={clsx(
            "transition-colors",
            selected && "relative text-background z-10"
          )}>
          <span className={clsx(selected && "text-accent")}>
            {value.charAt(0)}
          </span>
          {value.slice(1)}
        </p>
      </button>
    </li>
  );
}

export default SideBarItem;
