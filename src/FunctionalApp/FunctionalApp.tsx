import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { UserInformation } from "../types";

export const FunctionalApp = () => {
  const [submittedFirstName, setSubmittedFirstName] = useState("");
  const [submittedLastName, setSubmittedLastName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");
  const [submittedPhoneNumber, setSubmittedPhoneNumber] = useState([
    "",
    "",
    "",
    "",
  ]);

  const firstNameInput = (input: string) => {
    setSubmittedFirstName(input);
  };

  const lastNameInput = (input: string) => {
    setSubmittedLastName(input);
  };

  const emailInput = (input: string) => {
    setSubmittedEmail(input);
  };

  const cityInput = (input: string) => {
    setSubmittedCity(input);
  };

  const phoneNumberInput = (input: string[]) => {
    const combinedNumbers = input.join().replace(/,/g, "");
    if (combinedNumbers.length === 7) {
      setSubmittedPhoneNumber(input);
    }
    if (combinedNumbers.length === 8) {
      const modifiedCombinedNumbers = [
        ...input.slice(0, -1),
        input[input.length - 1].slice(0, 1),
      ];
      setSubmittedPhoneNumber(modifiedCombinedNumbers);
    }
  };

  const userObject: UserInformation = {
    email: submittedEmail,
    firstName: submittedFirstName,
    lastName: submittedLastName,
    city: submittedCity,
    phone: submittedPhoneNumber.join().replace(/,/g, ""),
  };

  return (
    <>
      <h2>Functional</h2>

      <ProfileInformation userData={userObject} />

      <FunctionalForm
        handleUserPhoneNumberInput={phoneNumberInput}
        handleUserCityInput={cityInput}
        handleUserEmailInput={emailInput}
        handleUserLastNameInput={lastNameInput}
        handleUserFirstNameInput={firstNameInput}
      />
    </>
  );
};
