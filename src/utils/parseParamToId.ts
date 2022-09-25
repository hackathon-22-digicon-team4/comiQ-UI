export const parseParamToId = (param: string | string[] | undefined): string => {
  if (param === undefined) {
    return "";
  }
  if (Array.isArray(param)) {
    return param[0];
  }
  return param;
};
