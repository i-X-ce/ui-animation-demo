import clsx from "clsx";
import OrderView from "../OrderAnimations/OrderView";
import AccordionView from "../UIAnimations/Accordion/AccordionView";
import ButtonView from "../UIAnimations/Button/ButtonView";
import ScreenItem, { type ScreenSize } from "./ScreenItem";

function ScreenItemView({ size }: { size: ScreenSize }) {
  return (
    <div className={clsx("flex flex-wrap gap-4")}>
      {[
        { chipName: "button", component: <ButtonView /> },
        { chipName: "accordion", component: <AccordionView /> },
        { chipName: "order", component: <OrderView orderType="above" /> },
      ].map((v, i) => (
        <ScreenItem key={i} size={size} chipName={v.chipName}>
          {v.component}
        </ScreenItem>
      ))}
    </div>
  );
}

export default ScreenItemView;
