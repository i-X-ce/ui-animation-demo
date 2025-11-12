import type { ReactNode } from "react";
import ItemNameChip from "../ItemNameChip";
import clsx from "clsx";

export type ScreenSize = "sm" | "lg";

function ScreenItem({
  size,
  chipName,
  children,
}: {
  size: ScreenSize;
  chipName?: string;
  children?: ReactNode;
}) {
  return (
    <div className="justify-self-stretch">
      <ItemNameChip>{chipName}</ItemNameChip>
      <div
        className={clsx(
          "border-4 border-primary rounded-lg overflow-auto mt-2 p-4",
          size === "sm" && "w-[375px] h-[667px]",
          size === "lg" && "w-[1200px] h-[80vh]"
        )}>
        {children}
      </div>
    </div>
  );
}

export default ScreenItem;
