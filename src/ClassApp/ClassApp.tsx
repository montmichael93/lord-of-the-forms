import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { UserInformation } from "../types";
import { ProfileInformation } from "../ProfileInformation";
type State = { userInformation: UserInformation | null };

export class ClassApp extends Component<Record<string, never>, State> {
  state: State = {
    userInformation: {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      phone: "",
    },
  };

  render() {
    const firstNameInput = (input: string) => {
      const firstNameStateSetter = { ...this.state };
      if (firstNameStateSetter.userInformation) {
        firstNameStateSetter.userInformation.firstName = input;
        this.setState(firstNameStateSetter);
      }
    };

    const lastNameInput = (input: string) => {
      const lastNameStateSetter = { ...this.state };
      if (lastNameStateSetter.userInformation) {
        lastNameStateSetter.userInformation.lastName = input;
        this.setState(lastNameStateSetter);
      }
    };

    const emailInput = (input: string) => {
      const emailStateSetter = { ...this.state };
      if (emailStateSetter.userInformation) {
        emailStateSetter.userInformation.email = input;
        this.setState(emailStateSetter);
      }
    };

    const cityInput = (input: string) => {
      const cityStateSetter = { ...this.state };
      if (cityStateSetter.userInformation) {
        cityStateSetter.userInformation.city = input;
        this.setState(cityStateSetter);
      }
    };

    const phoneNumberInput = (input: string[]) => {
      const combineNumbers = input.join();
      const regex = new RegExp(",", "g");
      const phoneNumberStateSetter = { ...this.state };
      if (phoneNumberStateSetter.userInformation) {
        phoneNumberStateSetter.userInformation.phone = combineNumbers.replace(
          regex,
          ""
        );
        this.setState(phoneNumberStateSetter);
      }
    };

    const userObject: UserInformation = {
      email: this.state.userInformation?.email ?? "",
      firstName: this.state.userInformation?.firstName ?? "",
      lastName: this.state.userInformation?.lastName ?? "",
      city: this.state.userInformation?.city ?? "",
      phone: this.state.userInformation?.phone ?? "",
    };

    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={userObject} />
        <ClassForm
          handleUserPhoneNumberInput={phoneNumberInput}
          handleUserCityInput={cityInput}
          handleUserEmailInput={emailInput}
          handleUserLastNameInput={lastNameInput}
          handleUserFirstNameInput={firstNameInput}
        />
      </>
    );
  }
}
