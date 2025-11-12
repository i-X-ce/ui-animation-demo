import type { ReactNode } from "react";
import Accordion from "./Accordion/Accordion";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import ItemNameChip from "../ItemNameChip";

function Item({
  chipName,
  children,
}: {
  chipName: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 flex-1 max-w-[500px]">
      <ItemNameChip>{chipName}</ItemNameChip>
      <div>{children}</div>
    </div>
  );
}

function UIAnimationsView() {
  return (
    <div className="flex flex-col gap-4">
      <Item chipName="Button">
        <Button>Button</Button>
      </Item>
      <Item chipName="Accordion">
        <Accordion>Accordion</Accordion>
      </Item>
      <Item chipName="Modal">
        <Modal>Modal</Modal>
      </Item>
    </div>
  );
}

export default UIAnimationsView;
