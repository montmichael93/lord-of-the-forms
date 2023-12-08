export const capitalize = (chosenName: string) => {
  // todo: build this function
  // `capitalize("jOn")` should output `"Jon"`
  const resetCaps = chosenName.toLowerCase();
  const fixedCaps = resetCaps.charAt(0).toUpperCase() + resetCaps.slice(1);
  return fixedCaps;
};

export const formatPhoneNumber = (providedPhoneNumber: string) => {
  // todo: build this function
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
  return ` ${providedPhoneNumber.slice(0, 2)}-${providedPhoneNumber.slice(
    2,
    4
  )}-${providedPhoneNumber.slice(4, 6)}-${providedPhoneNumber.slice(6, 7)}`;
};
