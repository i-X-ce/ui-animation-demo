import React from "react";
import { useView } from "../context/viewContext";
import { VIEW_NAME } from "../consts/VIEW";

function MainView() {
  const { view } = useView();
  const viewName = VIEW_NAME[view];

  return (
    <section className="h-[300vh] w-full">
      <div className="max-w-[1200px] m-auto py-12 px-12 text-shadow-2xs">
        <h1 className="text-4xl font-bold text-primary mb-8">
          <span className="text-accent">{viewName.charAt(0)}</span>
          {viewName.slice(1)}
        </h1>
        <div></div>
      </div>
    </section>
  );
}

export default MainView;
