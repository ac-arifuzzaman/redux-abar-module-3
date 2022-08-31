import { COLORCHANGED, STATASCHANGED } from "./actionTypes";

export const colorChanged = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};

export const statasSelected = (statas) => {
  return {
    type: STATASCHANGED,
    payload: statas,
  };
};
