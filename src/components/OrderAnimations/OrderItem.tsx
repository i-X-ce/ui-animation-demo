import React, { useEffect, useRef, useState } from "react";
import ItemNameChip from "../ItemNameChip";
import type { OrderType } from "./OrderView";
import { AnimatePresence, motion, type MotionProps } from "motion/react";

const TILE_NUMBER = 3;
const INTERVAL = 2;

interface OrderPosType {
  x: number;
  y: number;
}

const ORDER_POSITIONS: Record<OrderType, OrderPosType> = {
  above: { x: 0, y: 1 },
  below: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
} as const;

function OrderViewItem({
  orderType,
  itemName,
  ...props
}: { orderType: OrderType; itemName?: string } & MotionProps) {
  const [open, setOpen] = useState(false);
  const timer = useRef<number | null>(null);
  const pos = ORDER_POSITIONS[orderType];

  useEffect(() => {
    setOpen(true);
    timer.current = setInterval(() => {
      setOpen((prev) => !prev);
    }, INTERVAL * 1000);
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);

  return (
    <div>
      <ItemNameChip>
        {itemName
          ? itemName
          : ((props?.transition?.type === "spring"
              ? props?.transition?.type
              : props?.transition?.ease) as string)}
      </ItemNameChip>
      <div
        className="h-[300px] grid gap-2 mt-2 border border-black/10 p-2 rounded-md overflow-clip"
        style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        <AnimatePresence>
          {Array.from({ length: TILE_NUMBER }).map(
            (_, i) =>
              open && (
                <React.Fragment key={i}>
                  {Array.from({ length: TILE_NUMBER }).map((__, j) => (
                    <motion.div
                      key={j}
                      {...props}
                      className="bg-black/20 rounded-md"
                      initial={{
                        x: pos.x * 50,
                        y: pos.y * 50,
                        opacity: 0,
                      }}
                      animate={{ x: 0, y: 0, opacity: 1 }}
                      exit={{ x: pos.x * 50, y: pos.y * 50, opacity: 0 }}
                      transition={{
                        delay:
                          ((pos.y < 0 ? TILE_NUMBER - i - 1 : i) *
                            Math.abs(pos.y) +
                            (pos.x < 0 ? TILE_NUMBER - j - 1 : j) *
                              Math.abs(pos.x)) *
                          0.5,
                        ...props.transition,
                      }}
                    />
                  ))}
                </React.Fragment>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default OrderViewItem;
