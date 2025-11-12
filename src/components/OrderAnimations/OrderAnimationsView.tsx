import OrderViewItem from "./OrderItem";
import type { OrderType } from "./OrderView";

function OrderAnimationsView() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {["above", "below", "left", "right"].map((type) => (
        <OrderViewItem
          key={type}
          itemName={type}
          orderType={type as OrderType}
        />
      ))}
    </div>
  );
}

export default OrderAnimationsView;
