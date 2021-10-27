import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import FormEnter from "./FormEnter";
import ForOrganization from "./PersonalArea/ForOrganization";
import MainPage from "../MainPage/MainPage";
import NextStep from "../NextStep/NextStep";
import {useState} from "react/cjs/react.development";
import Enter from "./Enter";
import Registered from "../Registered/Registered";



function Layout() {




  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  return (

    <BrowserRouter>
      <Route exact path="/" render={() => <MainPage />} />
      <Route path="/main" render={() => <MainPage />} />
      <Route
        path="/reg"
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

      <Route path="/nextStep" render={() => <NextStep />} />
      <Route path="/enter" render={() => <Enter />} />
       <Route path="/registered" render={() => <Registered />}/>
    </BrowserRouter>
  );
}
export default Layout;
