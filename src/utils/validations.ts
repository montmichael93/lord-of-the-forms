export function isEmailValid(emailAddress: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export const isPhoneNumberValid = (userNumber: string[]): boolean => {
  if (
    userNumber.join().replace(/,/g, "").length === 7 ||
    userNumber.join().replace(/,/g, "").length === 8
  ) {
    return true;
  } else return false;
};

export const isValidCity = (
  submittedCity: string,
  cityRepository: string[]
): boolean => {
  cityRepository.includes(submittedCity) ? true : false;

  if (cityRepository.includes(submittedCity)) {
    return true;
  } else return false;
};

export const isNameValid = (chosenName: string): boolean => {
  const checkName =
    chosenName
      .split("")
      .every((char) => char.toLowerCase() != char.toUpperCase()) &&
    chosenName.length >= 2;
  return checkName;
};
