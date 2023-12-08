import { Component, FormEvent } from "react";
import { ErrorMessage } from "../ErrorMessage";
import {
  isEmailValid,
  isNameValid,
  isPhoneNumberValid,
  isValidCity,
} from "../utils/validations";
import { allCities } from "../utils/all-cities";
import { TextInput } from "./ClassTextInput";
import { PhoneInput } from "./CLassPhoneInput";
import { FormPropsTypes, PhoneInputState } from "../types";
const firstNameErrorMessage =
  "First Name should be at least 2 characters long and should not contain non letters.";
const lastNameErrorMessage =
  "Last Name should be at least 2 characters long and should not contain non letters";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

interface ClassComponentStates {
  firstNameInput: string;
  lastNameInput: string;
  emailInput: string;
  cityInput: string;
  userPhoneNumberInput: PhoneInputState;
  isFormSubmitted: boolean;
}

export class ClassForm extends Component<FormPropsTypes> {
  state: ClassComponentStates = {
    firstNameInput: "",
    lastNameInput: "",
    emailInput: "",
    cityInput: "",
    userPhoneNumberInput: ["", "", "", ""],
    isFormSubmitted: false,
  };

  handleUserPhoneNumberInputChange = (index: number, value: string): void => {
    const updatedPhoneNumber = [...this.state.userPhoneNumberInput];
    updatedPhoneNumber[index] = value;
    this.setState({ userPhoneNumberInput: updatedPhoneNumber });
  };

  render() {
    const {
      handleUserFirstNameInput,
      handleUserLastNameInput,
      handleUserEmailInput,
      handleUserCityInput,
      handleUserPhoneNumberInput,
    } = this.props;

    const isFirstNameInputValid = isNameValid(this.state.firstNameInput);
    const shouldShowfirstNameErrorMessage =
      this.state.isFormSubmitted && !isFirstNameInputValid;

    const isLastNameInputValid = isNameValid(this.state.lastNameInput);
    const shouldShowlastNameErrorMessage =
      this.state.isFormSubmitted && !isLastNameInputValid;

    const isEmailInputValid = isEmailValid(this.state.emailInput);
    const shouldShowEmailErrorMessage =
      this.state.isFormSubmitted && !isEmailInputValid;

    const isCityInputValid = isValidCity(this.state.cityInput, allCities);
    const shouldShowCityErrorMessage =
      this.state.isFormSubmitted && !isCityInputValid;
    const isPhoneInputValid = isPhoneNumberValid(
      this.state.userPhoneNumberInput
    );
    const shouldShowPhoneErrorMessage =
      this.state.isFormSubmitted && !isPhoneInputValid;

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      this.setState({ isFormSubmitted: true });

      if (
        isNameValid(this.state.firstNameInput) &&
        isNameValid(this.state.lastNameInput) &&
        isEmailValid(this.state.emailInput) &&
        isValidCity(this.state.cityInput, allCities) &&
        isPhoneNumberValid(this.state.userPhoneNumberInput)
      ) {
        handleUserFirstNameInput(this.state.firstNameInput);
        handleUserLastNameInput(this.state.lastNameInput);
        handleUserEmailInput(this.state.emailInput);
        handleUserCityInput(this.state.cityInput);
        handleUserPhoneNumberInput(this.state.userPhoneNumberInput);
        this.setState({ firstNameInput: "" });
        this.setState({ lastNameInput: "" });
        this.setState({ emailInput: "" });
        this.setState({ cityInput: "" });
        this.setState({ userPhoneNumberInput: ["", "", "", ""] });
        this.setState({ isFormSubmitted: false });
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
              this.setState({ firstNameInput: e.target.value });
            },
            value: this.state.firstNameInput,
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
              this.setState({ lastNameInput: e.target.value });
            },
            value: this.state.lastNameInput,
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
              this.setState({ emailInput: e.target.value });
            },
            value: this.state.emailInput,
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
              this.setState({ cityInput: e.target.value });
            },
            value: this.state.cityInput,
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
              phoneInputState={this.state.userPhoneNumberInput}
              setPhoneInputState={this.handleUserPhoneNumberInputChange}
            />
          </div>
        </div>

        {shouldShowPhoneErrorMessage && (
          <ErrorMessage message={phoneNumberErrorMessage} show={true} />
        )}

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
