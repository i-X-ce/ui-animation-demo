import TRANSITIONS from "../consts/TRANSITIONS";
import AccordionItem from "./AccordionItem";

function AccordionView() {
  return (
    <div className="grid grid-cols-1 gap-8">
      {TRANSITIONS.map((transition, i) => (
        <AccordionItem key={i} transition={transition} />
      ))}
    </div>
  );
}

export default AccordionView;
