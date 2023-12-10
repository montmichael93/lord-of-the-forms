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
    const theState = { ...this.state };
    const setUser = (newUser: UserInformation) => {
      this.setState({
        userInformation: {
          ...this.state.userInformation,
          ...newUser,
        },
      });
    };
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={theState.userInformation} />
        <ClassForm handleSubmitUser={(user) => setUser(user)} />
      </>
    );
  }
}
