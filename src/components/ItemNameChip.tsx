import type { ReactNode } from "react";

function ItemNameChip({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <h3 className="px-3 py-1 border border-text-secondary text-text-secondary rounded-full">
        {children}
      </h3>
    </div>
  );
}

export default ItemNameChip;
