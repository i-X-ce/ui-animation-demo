import { useState } from "react";
import type { ViewType } from "../consts/VIEW";
import { ViewContext } from "./viewContext";

const INITIAL_VIEW: ViewType = "EASING";

export default function ViewProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [view, setView] = useState<ViewType>(INITIAL_VIEW);

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}
