import clsx from "clsx";
import TRANSITIONS from "../../../consts/TRANSITIONS";
import ModalItem from "./ModalItem";
import styles from "./styles.module.css";

function ModalView() {
  return (
    <div className={styles.modalViewWrapper}>
      <div className={clsx("grid grid-cols-2 gap-8", styles.modalView)}>
        {TRANSITIONS.map((transition, i) => (
          <ModalItem key={i} transition={transition} />
        ))}
      </div>
    </div>
  );
}

export default ModalView;
