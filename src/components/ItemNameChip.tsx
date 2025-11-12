import type { ReactNode } from "react";

function ItemNameChip({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <h3 className="px-2 border-text-secondary text-text-secondary">
        - {children}
      </h3>
    </div>
  );
}

export default ItemNameChip;
