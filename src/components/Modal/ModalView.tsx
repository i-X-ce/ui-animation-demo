import TRANSITIONS from "../../consts/TRANSITIONS";
import ModalItem from "./ModalItem";

function ModalView() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {TRANSITIONS.map((transition, i) => (
        <ModalItem key={i} transition={transition} />
      ))}
    </div>
  );
}

export default ModalView;
