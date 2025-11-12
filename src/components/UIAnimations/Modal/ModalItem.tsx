import type { Transition } from "motion";
import ItemNameChip from "../../ItemNameChip";
import SPEEDS from "../../../consts/SPEEDS";
import Modal from "./Modal";

function ModalItem({ transition }: { transition: Transition }) {
  return (
    <div className="flex-1">
      <ItemNameChip>
        {
          (transition.type === "spring"
            ? transition.type
            : transition.ease) as string
        }
      </ItemNameChip>
      <div className="flex mt-2 gap-4 flex-wrap">
        {Object.entries(SPEEDS).map(([speedName, value]: [string, number]) => (
          <Modal
            key={speedName}
            transition={{ duration: value, ...transition }}>
            {speedName.charAt(0)?.toUpperCase()}
            {speedName.slice(1).toLowerCase()}
          </Modal>
        ))}
      </div>
    </div>
  );
}

export default ModalItem;
