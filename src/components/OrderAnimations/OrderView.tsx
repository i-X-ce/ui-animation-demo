import clsx from "clsx";
import TRANSITIONS from "../../consts/TRANSITIONS";
import OrderViewItem from "./OrderItem";
import styles from "./styles.module.css";

export type OrderType = "above" | "below" | "left" | "right";

function OrderView({ orderType }: { orderType: OrderType }) {
  return (
    <div className={styles.itemWrapper}>
      <div className={clsx("grid grid-cols-3 gap-2", styles.item)}>
        {TRANSITIONS.map((transition, i) => (
          <OrderViewItem
            key={i}
            orderType={orderType}
            transition={transition}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderView;
