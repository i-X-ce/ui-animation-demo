import { createContext, useContext } from "react";
import type { ViewType } from "../consts/VIEW";

type ViewContextType = {
  view: ViewType;
  setView: React.Dispatch<React.SetStateAction<ViewType>>;
};
export const ViewContext = createContext<ViewContextType | undefined>(
  undefined
);

export function useView() {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
}
