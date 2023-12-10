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
import { PhoneInputState, UserInformation } from "../types";

const firstNameErrorMessage =
  "First Name should be at least 2 characters long and should not contain non letters.";
const lastNameErrorMessage =
  "Last Name should be at least 2 characters long and should not contain non letters";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({
  handleSubmitUser,
}: {
  handleSubmitUser: (input: UserInformation) => void;
}) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("");

  const [phoneInput, setPhoneInput] = useState<PhoneInputState>([
    "",
    "",
    "",
    "",
  ]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const isFirstNameInputValid = isNameValid(firstNameInput);
  const shouldShowFirstNameErrorMessage =
    isFormSubmitted && !isFirstNameInputValid;

  const isLastNameInputValid = isNameValid(lastNameInput);
  const shouldShowLastNameErrorMessage =
    isFormSubmitted && !isLastNameInputValid;

  const isEmailInputValid = isEmailValid(emailInput);
  const shouldShowEmailErrorMessage = isFormSubmitted && !isEmailInputValid;

  const isCityInputValid = isValidCity(cityInput, allCities);
  const shouldShowCityErrorMessage = isFormSubmitted && !isCityInputValid;
  const isPhoneInputValid = isPhoneNumberValid(phoneInput);
  const shouldShowPhoneErrorMessage = isFormSubmitted && !isPhoneInputValid;

  const reset = () => {
    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setCityInput("");
    setPhoneInput(["", "", "", ""]);
    setIsFormSubmitted(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if (
      !(
        isNameValid(firstNameInput) &&
        isNameValid(lastNameInput) &&
        isEmailValid(emailInput) &&
        isValidCity(cityInput, allCities) &&
        isPhoneNumberValid(phoneInput)
      )
    ) {
      alert("Bad Inputs");
      return;
    }

    handleSubmitUser({
      city: cityInput,
      email: emailInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      phone: phoneInput.join(" "),
    });
    reset();
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
          value: firstNameInput,
          placeholder: "Bilbo",
        }}
        labelText={"First Name"}
      />
      {shouldShowFirstNameErrorMessage && (
        <ErrorMessage message={firstNameErrorMessage} show={true} />
      )}

      {/* last name input */}

      <TextInput
        inputProps={{
          onChange: (e) => {
            setLastNameInput(e.target.value);
          },
          value: lastNameInput,
          placeholder: "Baggins",
        }}
        labelText={"Last Name"}
      />

      {shouldShowLastNameErrorMessage && (
        <ErrorMessage message={lastNameErrorMessage} show={true} />
      )}

      {/* Email Input */}

      <TextInput
        inputProps={{
          onChange: (e) => {
            setEmailInput(e.target.value);
          },
          value: emailInput,
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
          value: cityInput,
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
