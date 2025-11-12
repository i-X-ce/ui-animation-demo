import clsx from "clsx";
import TRANSITIONS from "../../../consts/TRANSITIONS";
import ButtonItem from "./ButtonItem";
import styles from "./styles.module.css";

function ButtonView() {
  return (
    <div className={styles.buttonViewWrapper}>
      <div className={clsx("grid grid-cols-2 gap-8", styles.buttonView)}>
        {TRANSITIONS.map((transition, i) => (
          <ButtonItem key={i} transition={transition} />
        ))}
      </div>
    </div>
  );
}

export default ButtonView;
