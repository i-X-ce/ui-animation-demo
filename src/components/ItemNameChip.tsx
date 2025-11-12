import React from "react";

function ItemNameChip({ children }: { children: string }) {
  return (
    <div className="flex">
      <h3 className="px-3 py-1 border border-text-secondary rounded-full">
        {children}
      </h3>
    </div>
  );
}

export default ItemNameChip;
