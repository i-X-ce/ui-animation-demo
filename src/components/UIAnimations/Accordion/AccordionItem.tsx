import type { Transition } from "motion";
import ItemNameChip from "../../ItemNameChip";
import SPEEDS from "../../../consts/SPEEDS";
import Accordion from "./Accordion";

function AccordionItem({ transition }: { transition: Transition }) {
  return (
    <div>
      <ItemNameChip>
        {
          (transition.type === "spring"
            ? transition.type
            : transition.ease) as string
        }
      </ItemNameChip>
      <div className="flex mt-2 gap-4">
        {Object.entries(SPEEDS).map(([speedName, value]: [string, number]) => (
          <Accordion
            key={speedName}
            transition={{ duration: value, ...transition }}>
            {speedName.charAt(0)?.toUpperCase()}
            {speedName.slice(1).toLowerCase()}
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default AccordionItem;
