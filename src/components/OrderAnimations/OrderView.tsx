import TRANSITIONS from "../../consts/TRANSITIONS";
import OrderViewItem from "./OrderItem";

export type OrderType = "above" | "below" | "left" | "right";

function OrderView({ orderType }: { orderType: OrderType }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {TRANSITIONS.map((transition, i) => (
        <OrderViewItem key={i} orderType={orderType} transition={transition} />
      ))}
    </div>
  );
}

export default OrderView;
