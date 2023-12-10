import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { UserInformation } from "../types";

export const FunctionalApp = () => {
  const [user, setUser] = useState<null | UserInformation>(null);

  return (
    <>
      <h2>Functional</h2>

      <ProfileInformation userData={user} />
      <FunctionalForm handleSubmitUser={(user) => setUser(user)} />
    </>
  );
};
