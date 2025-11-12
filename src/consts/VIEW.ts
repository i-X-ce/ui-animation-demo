export const VIEWS_TYPE = {
  EASING: "EASING", // イージング
  UI: "UI", // UI
  ORDER: "ORDER", // 順序
  SIZE: "SIZE", // 大きさ
};

export const UI_TYPE = {
  BUTTON: "BUTTON",
  ACCORDION: "ACCORDION",
  MODAL: "MODAL",
};

export const ORDER_TYPE = {
  ABOVE: "ABOVE", // 上から
  BELOW: "BELOW", // 下から
  LEFT: "LEFT", // 左から
  RIGHT: "RIGHT", // 右から
  // DESCENDING: "DESCENDING", // 降順
  // ASCENDING: "ASCENDING", // 昇順
};

export const SIZE_TYPE = {
  SMALL: "SMALL", //
  LARGE: "LARGE",
};

export const VIEW_STRUCTURE = {
  [VIEWS_TYPE.EASING]: [],
  [VIEWS_TYPE.UI]: Object.values(UI_TYPE),
  [VIEWS_TYPE.ORDER]: Object.values(ORDER_TYPE),
  [VIEWS_TYPE.SIZE]: Object.values(SIZE_TYPE),
};

export type ViewType =
  | keyof typeof VIEWS_TYPE
  | keyof typeof UI_TYPE
  | keyof typeof ORDER_TYPE
  | keyof typeof SIZE_TYPE;

export const VIEW_NAME: Record<ViewType, string> = {
  EASING: "Easing",
  UI: "UI Animations",
  ORDER: "Order Animations",
  SIZE: "Screen Size",
  BUTTON: "Button",
  MODAL: "Modal",
  ACCORDION: "Accordion",
  ABOVE: "From Above",
  BELOW: "From Below",
  LEFT: "From Left",
  RIGHT: "From Right",
  // DESCENDING: "Descending",
  // ASCENDING: "Ascending",
  SMALL: "Phone Size",
  LARGE: "Desktop Size",
};
