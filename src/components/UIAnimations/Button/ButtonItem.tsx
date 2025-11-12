import type { Transition } from "motion";
import ItemNameChip from "../../ItemNameChip";
import SPEEDS from "../../../consts/SPEEDS";
import Button from "./Button";

function ButtonItem({
  transition,
  chipName,
}: {
  transition: Transition;
  chipName?: string;
}) {
  return (
    <div className="flex-1">
      <ItemNameChip>
        {chipName
          ? chipName
          : ((transition.type === "spring"
              ? transition.type
              : transition.ease) as string)}
      </ItemNameChip>
      <div className="flex mt-2 gap-4 flex-wrap">
        {Object.entries(SPEEDS).map(([speedName, value]: [string, number]) => (
          <Button
            key={speedName}
            transition={{ duration: value, ...transition }}>
            {speedName.charAt(0)?.toUpperCase()}
            {speedName.slice(1).toLowerCase()}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ButtonItem;
