import { FormEvent, useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import {
  isEmailValid,
  isNameValid,
  isPhoneNumberValid,
  isValidCity,
} from "../utils/validations";
import { allCities } from "../utils/all-cities";
import { TextInput } from "./FunctionalTextInput";
import { PhoneInput } from "./FunctionalPhoneInput";
import { FormPropsTypes, PhoneInputState } from "../types";

const firstNameErrorMessage =
  "First Name should be at least 2 characters long and should not contain non letters.";
const lastNameErrorMessage =
  "Last Name should be at least 2 characters long and should not contain non letters";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({
  handleUserFirstNameInput,
  handleUserLastNameInput,
  handleUserEmailInput,
  handleUserCityInput,
  handleUserPhoneNumberInput,
}: FormPropsTypes) => {
  const [firstName, setFirstNameInput] = useState("");
  const [lastName, setLastNameInput] = useState("");
  const [email, setEmailInput] = useState("");
  const [city, setCityInput] = useState("");

  const [phoneInput, setPhoneInput] = useState<PhoneInputState>([
    "",
    "",
    "",
    "",
  ]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const isFirstNameInputValid = isNameValid(firstName);
  const shouldShowfirstNameErrorMessage =
    isFormSubmitted && !isFirstNameInputValid;

  const isLastNameInputValid = isNameValid(lastName);
  const shouldShowlastNameErrorMessage =
    isFormSubmitted && !isLastNameInputValid;

  const isEmailInputValid = isEmailValid(email);
  const shouldShowEmailErrorMessage = isFormSubmitted && !isEmailInputValid;

  const isCityInputValid = isValidCity(city, allCities);
  const shouldShowCityErrorMessage = isFormSubmitted && !isCityInputValid;
  const isPhoneInputValid = isPhoneNumberValid(phoneInput);
  const shouldShowPhoneErrorMessage = isFormSubmitted && !isPhoneInputValid;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if (
      isNameValid(firstName) &&
      isNameValid(lastName) &&
      isEmailValid(email) &&
      isValidCity(city, allCities) &&
      isPhoneNumberValid(phoneInput)
    ) {
      handleUserFirstNameInput(firstName);
      handleUserFirstNameInput(firstName);
      handleUserLastNameInput(lastName);
      handleUserEmailInput(email);
      handleUserCityInput(city);
      handleUserPhoneNumberInput(phoneInput);
      setFirstNameInput("");
      setLastNameInput("");
      setEmailInput("");
      setCityInput("");
      setPhoneInput(["", "", "", ""]);
      setIsFormSubmitted(false);
    } else {
      alert("Bad Inputs");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}

      <TextInput
        inputProps={{
          onChange: (e) => {
            setFirstNameInput(e.target.value);
          },
          value: firstName,
          placeholder: "Bilbo",
        }}
        labelText={"First Name"}
      />
      {shouldShowfirstNameErrorMessage && (
        <ErrorMessage message={firstNameErrorMessage} show={true} />
      )}

      {/* last name input */}

      <TextInput
        inputProps={{
          onChange: (e) => {
            setLastNameInput(e.target.value);
          },
          value: lastName,
          placeholder: "Baggins",
        }}
        labelText={"Last Name"}
      />

      {shouldShowlastNameErrorMessage && (
        <ErrorMessage message={lastNameErrorMessage} show={true} />
      )}

      {/* Email Input */}

      <TextInput
        inputProps={{
          onChange: (e) => {
            setEmailInput(e.target.value);
          },
          value: email,
          placeholder: "bilbo-baggins@adventurehobbits.net",
        }}
        labelText={"Email"}
      />

      {shouldShowEmailErrorMessage && (
        <ErrorMessage message={emailErrorMessage} show={true} />
      )}

      {/* City Input */}

      <TextInput
        inputProps={{
          onChange: (e) => {
            setCityInput(e.target.value);
          },
          value: city,
          placeholder: "Hobbiton",
        }}
        labelText={"City"}
      />
      {shouldShowCityErrorMessage && (
        <ErrorMessage message={cityErrorMessage} show={true} />
      )}

      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <PhoneInput
            phoneInputState={phoneInput}
            setPhoneInputState={setPhoneInput}
          />
        </div>
      </div>

      {shouldShowPhoneErrorMessage && (
        <ErrorMessage message={phoneNumberErrorMessage} show={true} />
      )}

      <input type="submit" value="Submit" />
    </form>
  );
};
