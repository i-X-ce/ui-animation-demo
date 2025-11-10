export const VIEWS_TYPE = {
  EASING: "EASING", // イージング
  UI: "UI", // UI
  ORDER: "ORDER", // 順序
  LAW: "LAW", // 法則
};

export const UI_TYPE = {
  BUTTON: "BUTTON",
  SWITCH: "SWITCH",
  MODAL: "MODAL",
  TABS: "TABS",
  ACCORDION: "ACCORDION",
};

export const ORDER_TYPE = {
  ABOVE: "ABOVE", // 上から
  BELOW: "BELOW", // 下から
  LEFT: "LEFT", // 左から
  RIGHT: "RIGHT", // 右から
  DESCENDING: "DESCENDING", // 降順
  ASCENDING: "ASCENDING", // 昇順
};

export const LAW_TYPE = {
  GRAVITY: "GRAVITY", // 重力
  SPRING: "SPRING", // バネ
  FRICTION: "FRICTION", // 摩擦
  PREPARATORY: "PREPARATORY", // 予備動作
};

export const VIEW_STRUCTURE = {
  [VIEWS_TYPE.EASING]: [],
  [VIEWS_TYPE.UI]: Object.values(UI_TYPE),
  [VIEWS_TYPE.ORDER]: Object.values(ORDER_TYPE),
  [VIEWS_TYPE.LAW]: Object.values(LAW_TYPE),
};

export type ViewType =
  | keyof typeof VIEWS_TYPE
  | keyof typeof UI_TYPE
  | keyof typeof ORDER_TYPE
  | keyof typeof LAW_TYPE;
