import type { LocationQueryValue } from "vue-router";

export const parseQueryParamToNumber = (
  param: LocationQueryValue | LocationQueryValue[],
): number => {
  if (param === undefined) {
    return 0;
  }
  if (Array.isArray(param)) {
    param = param[0];
  }
  if (isNaN(Number(param))) {
    return 0;
  }
  return Number(param);
};
