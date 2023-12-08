export type UserInformation = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
};

export type FormPropsTypes = {
  handleUserFirstNameInput: (userInput: string) => void;
  handleUserLastNameInput: (userInput: string) => void;
  handleUserEmailInput: (userInput: string) => void;
  handleUserCityInput: (userInput: string) => void;
  handleUserPhoneNumberInput: (userInput: string[]) => void;
};

export type PhoneInputState = [string, string, string, string];
