import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FormEnter from "./formEnter";
import ForOrganization from "./PersonalArea/ForOrganization";
import MainPage from "../MainPage/MainPage";
import NextStep from "../NextStep/NextStep";
import { useState } from "react/cjs/react.development";

function Layout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => (
          <FormEnter
            setEmail={setEmail}
            email={email}
            setPassword={setPassword}
            password={password}
          />
        )}
      />
      <Route
        path="/signUp"
        render={() => <ForOrganization password={password} email={email} />}
      />
      <Route path="/main" render={() => <MainPage />} />
      <Route path="/nextStep" render={() => <NextStep />} />
    </BrowserRouter>
  );
}
export default Layout;
