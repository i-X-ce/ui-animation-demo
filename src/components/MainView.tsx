import { useView } from "../context/viewContext";
import { VIEW_NAME } from "../consts/VIEW";
import EasingView from "./Easing/EasingView";
import ButtonView from "./Button/ButtonView";
import AccordionView from "./Accordion/AccordionView";

function MainView() {
  const { view } = useView();
  const viewName = VIEW_NAME[view];

  return (
    <section className="w-full overflow-x-hidden">
      <div className="max-w-[1200px] m-auto py-12 px-12">
        <h1 className="text-4xl font-bold text-primary mb-8 text-shadow-2xs">
          <span className="text-accent">{viewName.charAt(0)}</span>
          {viewName.slice(1)}
        </h1>
        {view === "EASING" && <EasingView />}
        {view === "BUTTON" && <ButtonView />}
        {view === "ACCORDION" && <AccordionView />}
      </div>
    </section>
  );
}

export default MainView;
