import TRANSITIONS from "../../consts/TRANSITIONS";
import ButtonItem from "./ButtonItem";

function ButtonView() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {TRANSITIONS.map((transition, i) => (
        <ButtonItem key={i} transition={transition} />
      ))}
    </div>
  );
}

export default ButtonView;
